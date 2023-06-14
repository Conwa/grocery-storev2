import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((el) => {
        return (
          <div key={el.id}>
            {" "}
            <Link href={`/posts/${el.id}`} passHref>
              {" "}
              <h2>
                {el.id} {el.title}
              </h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return { props: { posts: data } };
}

export default PostList;
