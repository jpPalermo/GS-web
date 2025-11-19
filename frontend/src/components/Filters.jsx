export default function Filters({
  area,
  cidade,
  tecnologia,
  setArea,
  setCidade,
  setTecnologia,
}) {
  const areas = [
    "Tecnologia",
    "Design",
    "Saúde",
    "Educação",
    "Marketing",
    "Engenharia",
  ];
  const cidades = [
    "São Paulo/SP",
    "Rio de Janeiro/RJ",
    "Curitiba/PR",
    "Salvador/BA",
    "Porto Alegre/RS",
  ];
  const tecnologias = ["Python", "JavaScript", "React", "SQL", "AWS", "Figma"];

  const baseSelect =
    "px-3 py-2 rounded-xl bg-slate-900/70 border border-slate-700/70 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-between items-center bg-slate-900/60 border border-slate-700/70 rounded-2xl px-4 py-3 shadow-sm">
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className={baseSelect}
      >
        <option value="">Área</option>
        {areas.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <select
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className={baseSelect}
      >
        <option value="">Cidade</option>
        {cidades.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        className={baseSelect}
      >
        <option value="">Tecnologia</option>
        {tecnologias.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
