import Link from "next/link";

const DetailPage = async ({ params }) => {
  // console.log(params.id);
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
//   console.log(post);
  return (
    <div>
      <div
        key={post.id}
        className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Likes: {post.likesCount}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn btn-accent">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
