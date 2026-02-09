 "use client"

import { useParams } from "next/navigation";
import spacechips from "@/src/data/spaceships.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
const {id} = useParams();

if(!id || typeof id !== "string") {
  return null;
}
const spacechip = spacechips.find((spacechip) => spacechip.id === +id);

if(!spacechip) {
  return null;
}

  return (
    <main>
      <>
        <h1>{spacechip.name}</h1>
        <p>
            <Image
                src={spacechip.imageUrl}
                alt={spacechip.name}
                width={432}
                height={216}
            />
        </p>
        <p>
            <strong>Modelo:</strong> {spacechip.model}
        </p>
        <p>
            <strong>Categoria:</strong> {spacechip.category}
        </p>
        <p>
            <strong>Descrição:</strong> {spacechip.description}
        </p>

        <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
            <Link className="btn" href={"/spaceships"}>Voltar para todas as espaçonaves</Link>

            <div style={{ display: "flex", gap: "1rem", }}>
                <Link
                 href={`/spaceships/${+id - 1 }`}
                 className="btn"
                 style={{display: +id === 1 ? "none" : "block"}}>
                    Anterior
                 </Link>
                 <Link
                 href={`/spaceships/${+id + 1}`}
                 className="btn"
                 style={{display: +id === spacechips.length ? "none" : "block"}}>
                    Próximo
                 </Link>

            </div>
        </div>
      </>
    </main>
  );
}