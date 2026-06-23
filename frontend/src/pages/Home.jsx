import VideoGrid from "../components/video/VideoGrid";
import { dummyVideos } from "../data/dummyVideos";

function Home() {
  return (
    <section
      className="
        p-4
        sm:p-6
        lg:p-8
      "
    >
      <VideoGrid videos={dummyVideos} />
    </section>
  );
}

export default Home;