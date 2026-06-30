import { Pencil, Trash2, Eye } from "lucide-react";

export default function VideoCard({ video, onEdit, onDelete }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-primary)]
        shadow-sm
        transition
        hover:shadow-lg
      "
    >
      {/* Thumbnail */}

      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="
          h-52
          w-full
          object-cover
        "
      />

      {/* Content */}

      <div className="space-y-3 p-4">
        {/* Title */}

        <h2
          className="
            line-clamp-2
            text-lg
            font-semibold
          "
        >
          {video.title}
        </h2>

        {/* Category */}

        <span
          className="
            inline-block
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-xs
            font-medium
            text-blue-700

            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          {video.category}
        </span>

        {/* Stats */}

        <div
          className="
            flex
            items-center
            justify-between
            text-sm
            text-[var(--text-secondary)]
          "
        >
          <div className="flex items-center gap-1">
            <Eye size={16} />

            <span>{video.views?.toLocaleString() || 0} Views</span>
          </div>

          <span>{new Date(video.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Buttons */}

        <div
          className="
            flex
            gap-3
            pt-2
          "
        >
          <button
            onClick={() => onEdit(video)}
            className="
              flex-1
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <span className="flex items-center justify-center gap-2">
              <Pencil size={16} />
              Edit
            </span>
          </button>

          <button
            onClick={() => onDelete(video._id)}
            className="
              flex-1
              rounded-lg
              bg-red-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-red-700
            "
          >
            <span className="flex items-center justify-center gap-2">
              <Trash2 size={16} />
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
