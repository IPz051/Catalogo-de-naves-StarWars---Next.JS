import spacechips from "@/src/data/spaceships.json";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <>
        <h1>Todas as Espaçonaves</h1>
        <ul>
          {spacechips.map((spacechip) => (
            <li key={spacechip.id}>
                <Link className="btn" href={`/spaceships/${spacechip.id}`}>
                    {spacechip.name}
                </Link>
            </li>
          ))}
        </ul>
      </>
    </main>
  );
}