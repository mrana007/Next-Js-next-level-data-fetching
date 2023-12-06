const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    next: {
        revalidate: 5,
    }
  });
  const posts = await res.json();
  // console.log(posts);
  return (
    <div className="w-full">
      <h1 className="text-2xl">Total Posts: {posts.length}</h1>
      {posts.map((post) => (
        <div key={post.id} className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likesCount}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
