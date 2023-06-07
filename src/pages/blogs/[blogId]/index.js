import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();

  const blogId = router.query.blogId;

  return <h1>details about blog {blogId}</h1>;
};

export default BlogDetail;
