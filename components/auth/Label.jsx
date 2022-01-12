export default function AuthLabel({ required = false, htmlFor = "", children }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium">
      {children}
      {required && (
        <>
          <span class="text-red-500" aria-hidden="true">
            *
          </span>
          <span class="sr-only">Required field</span>
        </>
      )}
    </label>
  );
}
