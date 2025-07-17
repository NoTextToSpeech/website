export function ChevronMenu({ title, children, alwaysOpen = false }) {
  return (
    <details
      open={alwaysOpen ? true : undefined}
      className="last-of-type:mb-0 rounded-lg p-2 mt-4 bg-primary border border-gray-300 dark:border-gray-600 transition-colors hover:border-ntts-blue-hover"
    >
      <summary className="cursor-pointer font-semibold text-lg text-text-main">
        {title}
      </summary>
      <div className="nx-p-2 text-text-secondary">
        {children}
      </div>
    </details>
  );
}
