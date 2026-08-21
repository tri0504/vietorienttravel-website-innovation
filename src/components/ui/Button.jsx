import { Link } from 'react-router-dom';

export function Button({ children, to, type = 'button', ...props }) {
  // Internal destinations use client-side routing; other buttons stay native.
  if (to) return <Link className="button" to={to} {...props}>{children}</Link>;
  return <button className="button" type={type} {...props}>{children}</button>;
}
