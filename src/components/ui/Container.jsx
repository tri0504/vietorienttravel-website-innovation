// Reusable semantic container for consistent page width and spacing.
export function Container({ as: Element = 'div', className = '', children }) {
  // `as` lets pages choose semantic elements without duplicating container CSS.
  return <Element className={`container ${className}`.trim()}>{children}</Element>;
}
