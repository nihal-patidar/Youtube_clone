// import VideoRender from "./VideoRender";
// import VideoSuggestionBox from "./VideoSuggestionBox";
// import CommentBox from "./CommentBox";

export default function VideoPage() {
  return (
    <div className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div
        className="
          max-w-[1800px]
          mx-auto
          px-4
          py-6
          grid
          gap-6
          lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]
        "
      >
        {/* LEFT SIDE */}
        <div className="min-w-0">
          {/* <VideoRender /> */}
          {/* <CommentBox /> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="min-w-0">
          {/* <VideoSuggestionBox /> */}
        </div>
      </div>
    </div>
  );
}