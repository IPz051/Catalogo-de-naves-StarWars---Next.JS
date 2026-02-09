import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main>
       <h1>Conheça as naves do universo starwars</h1>
       <p><Link className="btn" href={"/spaceships"}>Veja todas as espaçonaves</Link></p>
      </main>
    </div>
  );
}
