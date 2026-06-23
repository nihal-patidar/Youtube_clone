import { MoreVertical } from "lucide-react";

function VideoCard({ video }) {
  return (
    <article
      className="
        youtube-card
        cursor-pointer
      "
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="
            w-full
            aspect-video
            object-cover
            rounded-xl
          "
        />

        <span
          className="
            absolute
            bottom-2
            right-2

            bg-black/80
            text-white

            text-xs
            px-1.5
            py-0.5

            rounded
          "
        >
          {video.duration}
        </span>
      </div>

      {/* Details */}
      <div className="flex gap-3 mt-3">
        <img
          src={video.avatar}
          alt={video.channel}
          className="
            w-9
            h-9
            rounded-full
            object-cover
            shrink-0
          "
        />

        <div className="flex-1 min-w-0">
          <h3
            className="
              text-sm
              font-medium
              line-clamp-2
              text-[var(--text-primary)]
            "
          >
            {video.title}
          </h3>

          <p
            className="
              text-sm
              text-[var(--text-secondary)]
              mt-1
            "
          >
            {video.channel}
          </p>

          <p
            className="
              text-xs
              text-[var(--text-secondary)]
            "
          >
            {video.views} • {video.uploaded}
          </p>
        </div>

        <button
          className="
            self-start
            p-1
            rounded-full
            hover:bg-[var(--bg-hover)]
          "
        >
          <MoreVertical size={18} />
        </button>
      </div>
    </article>
  );
}

export default VideoCard;