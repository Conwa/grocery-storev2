import { useRouter } from "next/router";

const ReviewDetail = () => {
  const router = useRouter();
  const { blogId, reviewId } = router.query;
  return (
    <h1>
      this is review number {reviewId} from blog number {blogId}
    </h1>
  );
};

export default ReviewDetail;
