import { use } from "react";
import Link from "next/link";

async function getMovies() {
  const res = await fetch("http://localhost:3001/movies");
  return res.json();
}

export default function Layout({ children }) {
  const movies = use(getMovies());

  return (
    <div className="flex">
      <ul className="pr-10 text-sm">
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link href={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <div>{children}</div>
    </div>
  );
}
