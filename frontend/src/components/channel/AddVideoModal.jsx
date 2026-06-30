import { useEffect, useState } from "react";
import { Upload, ImagePlus, X } from "lucide-react";
import api from "../../services/api";

const categories = [
  "Programming",
  "Education",
  "Gaming",
  "Music",
  "Sports",
  "News",
];

export default function AddVideoModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: null,
    video: null,
  });

  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (thumbnailPreview) {
        URL.revokeObjectURL(thumbnailPreview);
      }
    };
  }, [thumbnailPreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleThumbnail = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        thumbnail: "Please select an image.",
      }));
      return;
    }

    if (thumbnailPreview) {
      URL.revokeObjectURL(thumbnailPreview);
    }

    setThumbnailPreview(URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      thumbnail: file,
    }));

    setErrors((prev) => ({
      ...prev,
      thumbnail: "",
    }));
  };

  const handleVideo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setErrors((prev) => ({
        ...prev,
        video: "Please select a video.",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      video: file,
    }));

    setErrors((prev) => ({
      ...prev,
      video: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = "Title is required.";

    if (!form.category) newErrors.category = "Select a category.";

    if (!form.thumbnail) newErrors.thumbnail = "Thumbnail is required.";

    if (!form.video) newErrors.video = "Video is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);

      formData.append("thumbnail", form.thumbnail);
      formData.append("video", form.video);

      await api.post("/videos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onSuccess();
    } catch (err) {
      console.error(err);

      alert("Unable to upload video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-xl
          border
          border-[var(--border-color)]
          bg-[var(--bg-primary)]
          shadow-xl
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border-color)]
            px-6
            py-5
          "
        >
          <div>
            <h2 className="text-2xl font-semibold">Upload Video</h2>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Upload a new video to your channel.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-2
              hover:bg-[var(--bg-hover)]
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          {/* Thumbnail */}

          <div>
            <label className="mb-2 block font-medium">Thumbnail *</label>

            <label
              htmlFor="thumbnail"
              className="
                flex
                h-48
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border-2
                border-dashed
                border-[var(--border-color)]
                bg-[var(--bg-secondary)]
              "
            >
              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
                  alt="thumbnail"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <ImagePlus className="mx-auto mb-3" size={42} />

                  <p>Select Thumbnail</p>
                </div>
              )}
            </label>

            <input
              id="thumbnail"
              hidden
              type="file"
              accept="image/*"
              onChange={handleThumbnail}
            />

            {errors.thumbnail && (
              <p className="mt-2 text-sm text-red-500">{errors.thumbnail}</p>
            )}
          </div>

          {/* Video */}

          <div>
            <label className="mb-2 block font-medium">Video *</label>

            <label
              htmlFor="video"
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-xl
                border
                border-[var(--border-color)]
                bg-[var(--bg-secondary)]
                px-4
                py-4
              "
            >
              <Upload size={22} />

              <span>{form.video ? form.video.name : "Choose Video"}</span>
            </label>

            <input
              id="video"
              hidden
              type="file"
              accept="video/*"
              onChange={handleVideo}
            />

            {errors.video && (
              <p className="mt-2 text-sm text-red-500">{errors.video}</p>
            )}
          </div>

          {/* Title */}

          <div>
            <label className="mb-2 block font-medium">Title *</label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter video title"
              className="
                w-full
                rounded-xl
                border
                border-[var(--border-color)]
                bg-transparent
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />

            {errors.title && (
              <p className="mt-2 text-sm text-red-500">{errors.title}</p>
            )}
          </div>
          {/* Description */}

          <div>
            <label className="mb-2 block font-medium">Description</label>

            <textarea
              rows={4}
              maxLength={500}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Tell viewers about your video..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[var(--border-color)]
                bg-transparent
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />

            <div
              className="
                mt-1
                text-right
                text-xs
                text-[var(--text-secondary)]
              "
            >
              {form.description.length}/500
            </div>
          </div>

          {/* Category */}

          <div>
            <label className="mb-2 block font-medium">Category *</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-[var(--border-color)]
                bg-[var(--bg-primary)]
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="mt-2 text-sm text-red-500">{errors.category}</p>
            )}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            flex
            justify-end
            gap-3
            border-t
            border-[var(--border-color)]
            px-6
            py-5
          "
        >
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              rounded-lg
              border
              border-[var(--border-color)]
              px-5
              py-2.5
              transition
              hover:bg-[var(--bg-hover)]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="
              rounded-lg
              bg-blue-600
              px-6
              py-2.5
              font-medium
              text-white
              transition
              hover:bg-blue-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      </div>
    </div>
  );
}
