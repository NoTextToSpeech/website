export function ChevronMenu({ title, openstate, children }) {
  return (
    <details
      open={openstate}
      className="last-of-type:mb-0 rounded-lg p-2 mt-4 bg-blue-100 dark:bg-blue-950"
    >
      <summary>
        <strong className="text-lg">{title}</strong>
      </summary>
      <div className="nx-p-2">{children}</div>
    </details>
  );
}
