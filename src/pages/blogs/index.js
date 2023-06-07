const Blogs = () => {
  const hola = ["Blog1", "Blog2"];

  return hola.map((el) => <h1 key={hola.indexOf(el)}>{el}</h1>);
};

export default Blogs;
