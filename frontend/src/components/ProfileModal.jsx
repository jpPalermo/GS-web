export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-950/95 border border-slate-700/80 shadow-2xl p-6">
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 text-xl"
        >
          ×
        </button>

        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-24 h-24 rounded-full object-cover border border-slate-600"
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-50">
              {profile.nome}
            </h2>
            <p className="text-slate-200">{profile.cargo}</p>
            <p className="text-sm text-slate-400">{profile.localizacao}</p>
            <p className="mt-2 text-sm text-slate-300">{profile.resumo}</p>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-sm">
          {/* Técnicas */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">
              Habilidades técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.habilidadesTecnicas.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-100 text-xs border border-indigo-400/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">Soft skills</h3>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              {profile.softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Experiências */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">Experiências</h3>
            <div className="space-y-2">
              {profile.experiencias.map((exp, idx) => (
                <div key={idx}>
                  <p className="font-medium text-slate-200">
                    {exp.cargo} — {exp.empresa}
                  </p>
                  <p className="text-xs text-slate-400">
                    {exp.inicio} até {exp.fim || "atual"}
                  </p>
                  <p className="text-slate-300 text-xs mt-1">
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formação */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">Formação</h3>
            <ul className="space-y-1 text-slate-300">
              {profile.formacao.map((f, idx) => (
                <li key={idx}>
                  {f.curso} — {f.instituicao} ({f.ano})
                </li>
              ))}
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">Projetos</h3>
            <ul className="space-y-1">
              {profile.projetos.map((p, idx) => (
                <li key={idx}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200 underline"
                  >
                    {p.titulo}
                  </a>
                  <span className="block text-xs text-slate-400">
                    {p.descricao}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interesses */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">
              Áreas de interesse
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.areaInteresses.map((a) => (
                <span
                  key={a}
                  className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-200 text-xs border border-emerald-400/40"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-1">Idiomas</h3>
            <ul className="space-y-1 text-slate-300">
              {profile.idiomas.map((idioma, idx) => (
                <li key={idx}>
                  {idioma.idioma} — {idioma.nivel}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              alert(`Você recomendou ${profile.nome} 👏`)
            }
            className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-medium"
          >
            Recomendar profissional
          </button>
          <button
            onClick={() =>
              alert(`Mensagem enviada para ${profile.nome} ✉️`)
            }
            className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-sm font-medium"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
