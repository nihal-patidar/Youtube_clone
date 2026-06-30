import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import api from "../services/api";
import AddVideoModal from "../components/channel/AddVideoModal";
import VideoCard from "../components/channel/VedioCard";
import { useParams } from "react-router-dom";

export default function MyChannel() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openUpload, setOpenUpload] = useState(false);

  const { channelId } = useParams;

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/channel/${channelId}/videos`);

      console.log("response data", response.data);

      setVideos(response.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleVideoUploaded = () => {
    setOpenUpload(false);
    fetchVideos();
  };

  const handleDelete = async (videoId) => {
    try {
      await api.delete(`/video/${videoId}`);

      fetchVideos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Channel</h1>

              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Manage your uploaded videos.
              </p>
            </div>

            <button
              onClick={() => setOpenUpload(true)}
              className="
                flex items-center gap-2
                rounded-lg
                bg-blue-600
                px-5
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <Plus size={18} />
              Upload Video
            </button>
          </div>

          {/* Stats */}
          <div
            className="
              mb-8
              rounded-xl
              border
              border-[var(--border-color)]
              bg-[var(--bg-secondary)]
              p-5
            "
          >
            <h2 className="text-xl font-semibold">Total Videos</h2>

            <p className="mt-2 text-4xl font-bold">{videos.length}</p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="py-20 text-center text-[var(--text-secondary)]">
              Loading videos...
            </div>
          )}

          {/* Empty */}
          {!loading && videos.length === 0 && (
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-[var(--border-color)]
                py-20
              "
            >
              <h2 className="text-2xl font-semibold">No videos uploaded</h2>

              <p className="mt-2 text-[var(--text-secondary)]">
                Upload your first video to get started.
              </p>

              <button
                onClick={() => setOpenUpload(true)}
                className="
                  mt-6
                  rounded-lg
                  bg-blue-600
                  px-5
                  py-3
                  text-white
                  hover:bg-blue-700
                "
              >
                Upload Video
              </button>
            </div>
          )}

          {/* Grid */}
          {!loading && videos.length > 0 && (
            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {videos.map((video) => (
                <VideoCard
                  key={video._id}
                  video={video}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {openUpload && (
        <AddVideoModal
          onClose={() => setOpenUpload(false)}
          onSuccess={handleVideoUploaded}
        />
      )}
    </>
  );
}
