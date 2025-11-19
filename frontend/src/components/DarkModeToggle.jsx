export default function DarkModeToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDark}
      className="fixed bottom-5 right-5 z-50 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-medium text-slate-100 shadow-lg hover:bg-slate-800"
    >
      🌙 / ☀️
    </button>
  );
}
