import Link from "next/link";

export default function Page() {
  return (
    <div className="hero">
      <h1 className="animate-pulse">
        Explore a Frota <br />
        <span style={{ color: "white" }}>da Galáxia</span>
      </h1>
      <p style={{ maxWidth: "600px", fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }}>
        De interceptadores leves a cruzadores estelares massivos. 
        Descubra a tecnologia que moldou o destino de sistemas inteiros.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
        <Link className="btn" href={"/spaceships"}>
          Ver Espaçonaves
        </Link>
        <Link className="btn" href={"/categories"} style={{ borderColor: "var(--sw-blue)", color: "var(--sw-blue)" }}>
          Categorias
        </Link>
      </div>
    </div>
  );
}
