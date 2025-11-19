export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Buscar por nome ou cargo..."
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
