'use client';
''
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ si tu es dans app/

export default function Recherche() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const sections = [
    { id: "home", keywords: ["home", "home"] },
    { id: "apropos", keywords: ["apropos", "apropos"] },
    { id: "services", keywords: ["services", "services"] },
    { id: "projects", keywords: ["projet", "projects"] },
    { id: "contact", keywords: ["contact", "contact" ] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const text = query.toLowerCase();
    const found = sections.find((sec) =>
      sec.keywords.some((k) => text.includes(k))
    );

    if (found) {
      const el = document.getElementById(found.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${found.id}`);
      }
      setQuery("");
    } else {
      alert("Section non trouvée !");
    }
  };

  return (
    <nav className="navba">
      <div onSubmit={handleSearch} style={{ marginLeft: "auto" }}>
        <input
          type="text"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 6, borderRadius: 4 }}
        />
      </div>
    </nav>
  );
}
