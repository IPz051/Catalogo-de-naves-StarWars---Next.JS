import spacechips from "@/src/data/spaceships.json";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="content-container">
      <h1 className="text-center mb-12">Frota Imperial & Rebelde</h1>
      
      <div className="card-grid">
        {spacechips.map((spacechip) => (
          <Link 
            key={spacechip.id} 
            href={`/spaceships/${spacechip.id}`}
            className="sw-card"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={spacechip.imageUrl}
                alt={spacechip.name}
                fill
                style={{ objectFit: "contain" }}
                className="hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3>{spacechip.name}</h3>
            <p className="text-sw-blue/60 text-xs mb-2 font-mono uppercase tracking-widest">
              {spacechip.model}
            </p>
            <p className="line-clamp-3">
              {spacechip.description}
            </p>
            <div className="mt-auto pt-4 flex justify-between items-center">
              <span className="text-[10px] bg-sw-blue/10 text-sw-blue px-2 py-1 rounded border border-sw-blue/20">
                {spacechip.category}
              </span>
              <span className="text-sw-yellow text-sm font-bold">DETALHES →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
