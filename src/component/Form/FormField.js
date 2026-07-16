// Reusable Form Field Component
export default function FormField({ label, required, error, children, animated = false }) {
  return (
    <div className={`w-full ${animated ? "animate-fadeIn" : ""}`}>
      {label && (
        <label className="block text-xs sm:text-sm font-semibold text-gray-900">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {children}
      {error && <span className="text-red-500 text-xs mt-0.5 block">{error}</span>}
    </div>
  );
}