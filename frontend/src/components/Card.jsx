export default function Card({ profile, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full h-full bg-slate-900/80 border border-slate-700/70 rounded-2xl p-4 shadow-md hover:shadow-xl hover:border-indigo-500/80 transition transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-16 h-16 rounded-full object-cover border border-slate-600"
        />
        <div>
          <h2 className="text-lg font-semibold text-slate-50 group-hover:text-indigo-300">
            {profile.nome}
          </h2>
          <p className="text-sm text-slate-300">{profile.cargo}</p>
          <p className="text-xs text-slate-500 mt-1">{profile.localizacao}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-xs rounded-full bg-indigo-500/15 text-indigo-200 border border-indigo-400/40"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-400 line-clamp-2">
        {profile.resumo}
      </p>
    </button>
  );
}
