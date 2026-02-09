"use client"

import { useParams } from "next/navigation";
import spaceships from "@/src/data/spaceships.json";
import Link from "next/link";

export default function Page() {
const {category} = useParams();

if(typeof category !== "string") {return null;}
const categoryName = category.replace("_", " ");

const categorySpaceships = spaceships.filter((spaceship) => spaceship.category === categoryName);

  return (
    <main>
      <>
        <h1>{categoryName}</h1>
        <ul>
          {categorySpaceships.map((spaceship) => (
            <li key={spaceship.name}>
              <Link
                className="btn"
                href={`/spaceships/${spaceship.id}`}
              >
                {spaceship.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    </main>
  );
}