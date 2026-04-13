import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/Global/Button/Button";

function ContactFeedbackPopup({ open, variant, message, onClose }) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
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
  }, [open]);

  if (!open) return null;

  const isSuccess = variant === "success";

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-slate-900/50 dark:bg-black/60"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-feedback-title"
        className={`relative w-full max-w-md rounded-2xl border bg-white p-6 shadow-xl dark:bg-slate-800 md:p-8 ${
          isSuccess
            ? "border-emerald-200 dark:border-emerald-900/40"
            : "border-rose-200 dark:border-rose-900/40"
        }`}
      >
        <h2
          id="contact-feedback-title"
          className={`text-lg font-semibold md:text-xl ${
            isSuccess
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-rose-700 dark:text-rose-400"
          }`}
        >
          {isSuccess ? "Message sent" : "Could not send"}
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{message}</p>
        <div className="mt-6">
          <Button
            type="button"
            content="OK"
            onClick={onClose}
            className="button primary-button purple w-full py-3"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required={required}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select…",
  required = false,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const SERVICE_OPTIONS = [
  "Store Setup",
  "Custom Theme Development",
  "Store Redesign",
  "Performance Optimization",
  "Shopify 2.0 Migration",
  "Checkout UX",
  "App Integration",
  "Maintenance & Support",
  "Not Sure Yet",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    service: "",
    message: "",
    website: "",
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setFeedback({
          variant: "success",
          message: "Thanks for reaching out. We'll get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          storeUrl: "",
          service: "",
          message: "",
          website: "",
        });
      } else {
        setFeedback({
          variant: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setFeedback({
        variant: "error",
        message: "Server error. Try again later.",
      });
    }
  };

  return (
    <>
    <ContactFeedbackPopup
      open={Boolean(feedback)}
      variant={feedback?.variant}
      message={feedback?.message ?? ""}
      onClose={() => setFeedback(null)}
    />
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 dark:bg-slate-900 p-6 md:p-10 rounded-2xl space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Your Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required={true}
        />
        <InputField
          label="Your Email *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required={true}
        />
      </div>

      <InputField
        label="Store URL *"
        name="storeUrl"
        type="text"
        value={formData.storeUrl}
        onChange={handleChange}
        placeholder="https://yourstore.com or yourstore.myshopify.com"
        required={true}
      />

      <SelectField
        label="Service Interested In *"
        name="service"
        value={formData.service}
        onChange={handleChange}
        options={SERVICE_OPTIONS}
        placeholder="Select a service"
        required={true}
      />

      <div>
        <label className="block mb-2 font-medium">
          Tell me about your project *
        </label>
        <textarea
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={
            "What's not working,\nwhat do you want to build,\nor what do you need help with?"
          }
          required={true}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Button
        content="Submit"
        className="button primary-button purple w-full py-4"
        type="submit"
      />
    </form>
    </>
  );
}

export default ContactForm;