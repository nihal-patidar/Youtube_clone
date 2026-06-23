import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  Bell,
} from "lucide-react";

export default function VideoPlayer() {
  return (
    <section className="w-full">
      {/* VIDEO */}
      <div className="overflow-hidden rounded-2xl bg-black">
        <video
          controls
          autoPlay={false}
          preload="metadata"
          poster="https://picsum.photos/1200/675"
          className="w-full aspect-video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* TITLE */}
      <h1 className="mt-4 text-xl md:text-2xl font-semibold">
        MERN Stack YouTube Clone Full Tutorial
      </h1>

      {/* CHANNEL + ACTIONS */}
      <div className="mt-4 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* CHANNEL */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="h-11 w-11 rounded-full"
          />

          <div>
            <h3 className="font-medium">CodeWithNihal</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              120K subscribers
            </p>
          </div>

          <button
            className="
            ml-2
            rounded-full
            bg-[var(--text-primary)]
            text-[var(--bg-primary)]
            px-4
            py-2
            font-medium
            hover:opacity-90
          "
          >
            Subscribe
          </button>

          <Bell size={18} />
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-2">
          <button className="filter-btn flex items-center gap-2">
            <ThumbsUp size={18} />
            24K
          </button>

          <button className="filter-btn">
            <ThumbsDown size={18} />
          </button>

          <button className="filter-btn flex items-center gap-2">
            <Share2 size={18} />
            Share
          </button>

          <button className="filter-btn flex items-center gap-2">
            <Download size={18} />
            Download
          </button>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          mt-4
          rounded-xl
          bg-[var(--bg-secondary)]
          p-4
        "
      >
        <p className="font-medium mb-2">2.1M views • 2 weeks ago</p>

        <p className="text-[var(--text-secondary)] leading-7">
          Complete MERN Stack YouTube Clone tutorial including
          Authentication, Video Upload, Comments, Likes,
          Subscription System and Responsive UI.
        </p>
      </div>
    </section>
  );
}