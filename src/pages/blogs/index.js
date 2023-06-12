import Link from "next/link";

const Blogs = () => {
  const hola = ["Blog1", "Blog2"];

  return hola.map((el) => (
    <>
      <h1 key={hola.indexOf(el)}>{el}</h1>
      <Link href={`/blogs/${hola.indexOf(el)}`}>
        <p>this redirects to BLogDetail with id {hola.indexOf(el)}</p>{" "}
      </Link>
    </>
  ));
};

export default Blogs;
