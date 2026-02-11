"use client"

import { useParams } from "next/navigation";
import spaceships from "@/src/data/spaceships.json";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { category } = useParams();

  if (typeof category !== "string") { return null; }
  const categoryName = category.replace("_", " ");

  const categorySpaceships = spaceships.filter((spaceship) => spaceship.category === categoryName);

  return (
    <div className="content-container">
      <div className="flex justify-between items-center mb-12">
        <h1>{categoryName}</h1>
        <Link href="/categories" className="text-sw-blue hover:text-sw-yellow transition-colors font-orbitron text-sm">
          ← Todas as Categorias
        </Link>
      </div>
      
      <div className="card-grid">
        {categorySpaceships.map((spaceship) => (
          <Link 
            key={spaceship.id} 
            href={`/spaceships/${spaceship.id}`}
            className="sw-card"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={spaceship.imageUrl}
                alt={spaceship.name}
                fill
                style={{ objectFit: "contain" }}
                className="hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3>{spaceship.name}</h3>
            <p className="text-sw-blue/60 text-xs mb-2 font-mono uppercase tracking-widest">
              {spaceship.model}
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              {spaceship.description}
            </p>
            <div className="mt-auto pt-4 flex justify-end">
              <span className="text-sw-yellow text-sm font-bold">DETALHES →</span>
            </div>
          </Link>
        ))}
      </div>

      {categorySpaceships.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/50 italic">Nenhuma nave encontrada nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
