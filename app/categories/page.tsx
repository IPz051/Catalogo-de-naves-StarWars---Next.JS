import spaceships from "@/src/data/spaceships.json";
import Link from "next/link";
export default function Page() {

    // Cria um conjunto (Set) com as categorias das espaçonaves, removendo duplicatas
    const categoriesSet = new Set(spaceships.map((spaceship) => spaceship.category));

    // Converte o conjunto em um array, removendo duplicatas
    const categoriesArray = Array.from(categoriesSet);
    return (
        <main>
            <>
                <h1>Todas as Categorias</h1>
                <ul>
                    {categoriesArray.map((category) => (
                        <li key={category}>
                            <Link
                                className="btn"
                                href={`/categories/${category.replace(" ", "_")}`}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        </main>
    );
}