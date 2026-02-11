import spaceships from "@/src/data/spaceships.json";
import Link from "next/link";

export default function Page() {
  const categoriesSet = new Set(spaceships.map((spaceship) => spaceship.category));
  const categoriesArray = Array.from(categoriesSet);

  return (
    <div className="content-container">
      <h1 className="text-center mb-12">Categorias de Naves</h1>
      
      <div className="card-grid">
        {categoriesArray.map((category) => (
          <Link
            key={category}
            href={`/categories/${category.replace(" ", "_")}`}
            className="sw-card group flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-sw-blue/5 to-sw-blue/10 border-sw-blue/20 hover:border-sw-blue"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-sw-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg 
                className="w-8 h-8 text-sw-blue" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-sw-blue group-hover:text-sw-yellow transition-colors">{category}</h3>
            <p className="text-xs text-white/40 mt-2 font-mono uppercase tracking-widest">
              {spaceships.filter(s => s.category === category).length} naves catalogadas
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
