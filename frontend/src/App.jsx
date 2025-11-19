import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Card from "./components/Card";
import ProfileModal from "./components/ProfileModal";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    async function loadProfiles() {
      try {
        const response = await fetch("http://localhost:3001/profiles");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Erro ao carregar perfis:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProfiles();
  }, []);

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      p.nome.toLowerCase().includes(search.toLowerCase()) ||
      p.cargo.toLowerCase().includes(search.toLowerCase());

    const matchesArea = area ? p.area === area : true;
    const matchesCidade = cidade ? p.localizacao === cidade : true;
    const matchesTecnologia = tecnologia
      ? p.habilidadesTecnicas.includes(tecnologia)
      : true;

    return matchesSearch && matchesArea && matchesCidade && matchesTecnologia;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
        <p className="text-lg animate-pulse">Carregando perfis...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* HEADER */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Futuro do Trabalho
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-300 max-w-xl">
              Conecte profissionais, competências e propósito em uma plataforma
              colaborativa inspirada no LinkedIn.
            </p>
          </div>
        </header>

        {/* BUSCA + FILTROS */}
        <section className="space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <Filters
            area={area}
            cidade={cidade}
            tecnologia={tecnologia}
            setArea={setArea}
            setCidade={setCidade}
            setTecnologia={setTecnologia}
          />
        </section>

        {/* GRID DE CARDS */}
        <section className="mt-4">
          {filteredProfiles.length === 0 ? (
            <p className="text-center text-slate-300">
              Nenhum profissional encontrado com esses filtros.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProfiles.map((p) => (
                <Card
                  key={p.id}
                  profile={p}
                  onClick={() => setSelectedProfile(p)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />

      <DarkModeToggle />
    </div>
  );
}
