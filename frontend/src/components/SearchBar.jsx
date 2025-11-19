export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <div className="relative max-w-xl mx-auto">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
          🔍
        </span>
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/70 border border-slate-700/70 text-slate-100 placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
