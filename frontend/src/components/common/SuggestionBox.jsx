const suggestions = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Build YouTube Clone Part ${i + 1}`,
  channel: "CodeWithNihal",
  views: "120K views",
  thumbnail: `https://picsum.photos/400/225?random=${i}`,
}));

export default function VideoSuggestionBox() {
  return (
    <aside className="flex flex-col gap-4">
      {suggestions.map((video) => (
        <div
          key={video.id}
          className="
            flex
            gap-3
            cursor-pointer
            rounded-xl
            p-2
            transition
            hover:bg-[var(--bg-hover)]
          "
        >
          <img
            src={video.thumbnail}
            alt=""
            className="
              w-40
              shrink-0
              rounded-xl
              aspect-video
              object-cover
            "
          />

          <div>
            <h3 className="line-clamp-2 text-sm font-medium">
              {video.title}
            </h3>

            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              {video.channel}
            </p>

            <p className="text-xs text-[var(--text-secondary)]">
              {video.views}
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
}