import { Check } from "lucide-react";

function ProcessingSuccess({
  loading = true,
  loadingText = "Creating your account...",
  successText = "Account created successfully!",
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-[90%]
          max-w-sm

          rounded-3xl

          border
          border-[var(--border-color)]

          bg-[var(--bg-primary)]

          p-8

          shadow-xl

          flex
          flex-col
          items-center
        "
      >
        {loading ? (
          <>
            {/* Google Style Loader */}
            <div className="relative w-16 h-16">
              <div
                className="
                  absolute
                  inset-0

                  rounded-full

                  border-[5px]
                  border-green-500
                  border-t-transparent

                  animate-spin
                "
              />
            </div>

            <h3 className="mt-6 text-lg font-medium">
              Processing
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-center
                text-[var(--text-secondary)]
              "
            >
              {loadingText}
            </p>
          </>
        ) : (
          <>
            {/* Success */}
            <div
              className="
                w-16
                h-16

                rounded-full

                bg-green-500

                flex
                items-center
                justify-center

                animate-pulse
              "
            >
              <Check
                size={34}
                className="text-white"
              />
            </div>

            <h3
              className="
                mt-6
                text-lg
                font-semibold
                text-green-500
              "
            >
              Success
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-center
                text-[var(--text-secondary)]
              "
            >
              {successText}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProcessingSuccess;