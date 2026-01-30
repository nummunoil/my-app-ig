export type Post = {
  id: number;
  image: string;
};

type PostsGridProps = {
  posts?: Post[];
};

const ProfilePostsGrid = ({
  posts = [
    { id: 1, image: "bg-zinc-200" },
    { id: 2, image: "bg-blue-200" },
    { id: 3, image: "bg-green-200" },
    { id: 4, image: "bg-yellow-200" },
    { id: 5, image: "bg-purple-200" },
    { id: 6, image: "bg-pink-200" },
    { id: 7, image: "bg-red-200" },
    { id: 8, image: "bg-orange-200" },
    { id: 9, image: "bg-gray-200" },
  ],
}: PostsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {posts.map((post) => (
        <div key={post.id} className={`aspect-square ${post.image}`}></div>
      ))}
    </div>
  );
};

export default ProfilePostsGrid;
