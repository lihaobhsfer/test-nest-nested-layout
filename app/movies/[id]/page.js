import { use } from "react";

async function getMovie(id) {
  const res = await fetch(`http://localhost:3001/movies/${id}`);
  return res.json();
}

export default function Page({ params }) {
  const movie = use(getMovie(params.id));
  const { title, year, description } = movie;
  return (
    <>
      <p className="text-3xl">{title}</p>
      <p className="text-xl">{year}</p>
      <p className="text-xl">{description}</p>
    </>
  );
}
