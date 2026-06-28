import { useEffect, useState } from "react";
import VideoGrid from "../components/video/VideoGrid";
import { dummyVideos } from "../data/dummyVideos";
import api from "../services/api";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideo() {
      const response = await api.get("/videos/all");

      const fetchedVideos = response.data.data.videos;

      console.log("fetched Videos", fetchedVideos);

      setVideos(fetchedVideos);
    }
    getVideo();
  }, []);
  return (
    <section
      className="
        p-4
        sm:p-6
        lg:p-8
      "
    >
      <VideoGrid videos={videos} />
    </section>
  );
}

export default Home;
