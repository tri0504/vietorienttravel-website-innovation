// Reusable button that supports both routed links and native actions.
import { Link } from 'react-router-dom';

export function Button({ children, className = '', to, type = 'button', ...props }) {
  // Internal destinations use client-side routing; other buttons stay native.
  // Allow feature-specific variants while retaining the shared button foundation.
  const buttonClassName = `button ${className}`.trim();
  if (to) return <Link className={buttonClassName} to={to} {...props}>{children}</Link>;
  return <button className={buttonClassName} type={type} {...props}>{children}</button>;
}
