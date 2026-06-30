import { useState } from "react";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreateChannel() {
  const [channelData, setChannelData] = useState({
    channelName: "",
    handle: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // console.log("")

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        image: "Only image files are allowed.",
      }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "Image size should be less than 2 MB.",
      }));
      return;
    }

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));

    setChannelData((prev) => ({
      ...prev,
      image: file,
    }));

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setChannelData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = {};

    if (!channelData.channelName.trim()) {
      validationErrors.channelName = "Channel name is required.";
    }

    if (!channelData.handle.trim()) {
      validationErrors.handle = "Handle is required.";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("channelName", channelData.channelName);
      formData.append("handle", channelData.handle);
      formData.append("description", channelData.description);

      if (channelData.image) {
        formData.append("image", channelData.image);
      }

      console.log("FormData", channelData, formData);

      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await api.post("/channel/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      navigate(-1);
    } catch (err) {
      console.log("Create channel", err);
      if (err.response?.status === 409) {
        setErrors({
          handle: "This handle already exists.",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  // if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-2xl
          bg-[var(--bg-primary)]
          shadow-2xl
          border border-[var(--border-color)]
        "
      >
        {/* HEADER */}
        <div className="px-6 py-5">
          <h2 className="text-2xl font-semibold">How you'll appear</h2>
        </div>

        {/* BODY */}
        <div className="px-6 pb-6">
          {/* IMAGE */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="channel-image"
              className="
                relative
                cursor-pointer
                group
              "
            >
              <div
                className="
                  h-32
                  w-32
                  overflow-hidden
                  rounded-full
                  bg-[var(--bg-secondary)]
                  border
                  border-[var(--border-color)]
                "
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="channel"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                    "
                  >
                    <Camera
                      size={40}
                      className="text-[var(--text-secondary)]"
                    />
                  </div>
                )}
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  rounded-full
                  bg-[var(--yt-red)]
                  p-2
                  text-white
                "
              >
                <Camera size={16} />
              </div>
            </label>

            <input
              id="channel-image"
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />

            <span
              className="
                mt-3
                text-sm
                font-medium
                text-blue-500
                cursor-pointer
              "
            >
              Select picture
            </span>
          </div>

          {/* FORM */}
          <div className="mt-8 space-y-4">
            <div>
              <label
                className="
                  mb-1
                  block
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                Name
              </label>

              <input
                type="text"
                name="channelName"
                value={channelData.channelName}
                onChange={handleChange}
                placeholder="Enter channel name"
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
            </div>

            <div>
              <label
                className="
                  mb-1
                  block
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                Handle
              </label>

              <input
                type="text"
                name="handle"
                value={channelData.handle}
                onChange={handleChange}
                placeholder="@yourhandle"
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
            </div>
          </div>

          <div>
            <label
              className="
                  mb-1
                  block
                  text-sm
                  text-[var(--text-secondary)]
                "
            >
              Description
            </label>

            <textarea
              rows={4}
              maxLength={500}
              name="description"
              value={channelData.description}
              onChange={handleChange}
              placeholder="Tell viewers about your channel..."
              className="
      w-full
      rounded-xl
      border
      border-[var(--border-color)]
      bg-transparent
      px-4
      py-3
      outline-none
      resize-none
      focus:border-blue-500
  "
            />

            <div className="mt-1 text-right text-xs text-[var(--text-secondary)]">
              {channelData.description.length}/500
            </div>
          </div>

          {/* TERMS */}
          <p
            className="
              mt-6
              text-xs
              leading-6
              text-[var(--text-secondary)]
            "
          >
            By clicking Create Channel you agree to the YouTube Terms of
            Service. Changes made to your name and profile picture are visible
            only on YouTube and not other Google services.
          </p>

          {/* ACTIONS */}
          <div
            className="
              mt-8
              flex
              justify-end
              gap-4
            "
          >
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="
                rounded-full
                px-5
                py-2
                font-medium
                hover:bg-[var(--bg-hover)]
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="
                rounded-full
                px-5
                py-2
                font-medium
                text-blue-500
                hover:bg-blue-500/10
              "
            >
              Create Channel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
