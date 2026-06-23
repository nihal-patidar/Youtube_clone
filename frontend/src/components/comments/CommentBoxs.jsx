import { Send } from "lucide-react";

const comments = [
  {
    id: 1,
    name: "Rahul Sharma",
    comment: "Amazing tutorial 🔥",
  },
  {
    id: 2,
    name: "Aman Singh",
    comment: "Best MERN explanation on YouTube.",
  },
  {
    id: 3,
    name: "Priya",
    comment: "Waiting for backend part.",
  },
];

export default function CommentBox() {
  return (
    <section className="mt-8">
      <h2 className="mb-6 text-lg font-semibold">
        {comments.length} Comments
      </h2>

      {/* ADD COMMENT */}
      <div className="flex gap-3">
        <img
          src="https://i.pravatar.cc/50"
          alt=""
          className="h-10 w-10 rounded-full"
        />

        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            className="
              w-full
              border-b
              border-[var(--border-color)]
              bg-transparent
              py-2
              outline-none
            "
          />

          <div className="mt-3 flex justify-end">
            <button
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-[var(--yt-red)]
                px-4
                py-2
                text-white
              "
            >
              <Send size={16} />
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* COMMENTS */}
      <div className="mt-8 space-y-6">
        {comments.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={`https://i.pravatar.cc/150?u=${item.id}`}
              alt=""
              className="h-10 w-10 rounded-full"
            />

            <div>
              <h4 className="font-medium">{item.name}</h4>

              <p className="mt-1 text-[var(--text-secondary)]">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}