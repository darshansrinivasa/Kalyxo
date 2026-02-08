function NavHeading({ children, className = "" }) {
    return (
      <p className={`font-bold ${className}`}> {children} </p>
    );
}
  
export default NavHeading;