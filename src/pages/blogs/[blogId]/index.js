import Link from "next/link";
import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();

  const blogId = router.query.blogId;

  return (
    <>
      <h1>details about Blog {blogId}</h1>
      <Link href={"/blogs"}>
        {" "}
        <p>BlogList</p>{" "}
      </Link>
    </>
  );
};

export default BlogDetail;
