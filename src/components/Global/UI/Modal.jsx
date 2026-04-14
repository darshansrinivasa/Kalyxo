import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({
  open,
  titleId,
  onClose,
  children,
  maxWidthClassName = "max-w-2xl",
  closeDurationMs = 200,
}) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Next frame so transitions apply.
      requestAnimationFrame(() => setVisible(true));
      return;
    }

    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), closeDurationMs);
    return () => window.clearTimeout(t);
  }, [open, closeDurationMs]);

  useEffect(() => {
    if (!mounted) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-fg/40 dark:bg-black/55"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`depth-surface relative w-full ${maxWidthClassName} max-h-[85vh] overflow-auto rounded-2xl border border-border p-6 shadow-card transition-all duration-200 dark:shadow-card-dark md:p-8 ${
          visible ? "translate-y-0 scale-100" : "translate-y-2 scale-[0.99]"
        }`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;

