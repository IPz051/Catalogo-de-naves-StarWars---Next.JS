"use client"

import { useParams } from "next/navigation";
import spacechips from "@/src/data/spaceships.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { id } = useParams();

  if (!id || typeof id !== "string") {
    return null;
  }
  
  const spacechip = spacechips.find((s) => s.id === +id);

  if (!spacechip) {
    return (
      <div className="content-container text-center">
        <h1>Nave não encontrada</h1>
        <Link href="/spaceships" className="btn">Voltar para a Frota</Link>
      </div>
    );
  }

  return (
    <div className="content-container">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <div className="glass-card p-8 rounded-2xl border border-sw-blue/20 bg-sw-blue/5 backdrop-blur-sm">
            <Image
              src={spacechip.imageUrl}
              alt={spacechip.name}
              width={800}
              height={400}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(75,213,238,0.4)]"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <span className="text-sw-blue font-orbitron tracking-tighter text-sm uppercase">Especificações Técnicas</span>
          <h1 className="mt-2 mb-6">{spacechip.name}</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="block text-xs text-white/40 uppercase mb-1">Modelo</span>
              <span className="font-orbitron text-sm">{spacechip.model}</span>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="block text-xs text-white/40 uppercase mb-1">Classe</span>
              <span className="font-orbitron text-sm">{spacechip.category}</span>
            </div>
          </div>

          <div className="prose prose-invert">
            <h3 className="text-sw-yellow font-orbitron text-lg mb-2">Relatório de Inteligência</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              {spacechip.description}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center justify-between border-t border-white/10 pt-8">
            <Link className="btn text-sm" href={"/spaceships"}>
              ← Voltar para a Frota
            </Link>

            <div className="flex gap-4">
              {+id > 1 && (
                <Link href={`/spaceships/${+id - 1}`} className="btn text-sm" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  Anterior
                </Link>
              )}
              {+id < spacechips.length && (
                <Link href={`/spaceships/${+id + 1}`} className="btn text-sm" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  Próxima
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
