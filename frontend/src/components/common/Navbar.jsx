import { useEffect, useState } from "react";
import { Menu, Search, Mic, Bell, UserCircle, Sun, Moon } from "lucide-react";
import YoutubeIcon from "../../assets/images/youtube.png";
import ProfileCard from "./ProfileCard";

function Navbar({ setIsSidebarOpen, user, navigate, handleLogout }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50

        h-[var(--navbar-height)]

        bg-[var(--bg-primary)]/95
        backdrop-blur-md

        border-b
        border-[var(--border-color)]

        flex
        items-center

        px-2
        sm:px-4
        lg:px-6
      "
    >
      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-2

          w-auto
          sm:w-[180px]
          shrink-0
        "
      >
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="
            p-2
            rounded-full
            hover:bg-[var(--bg-hover)]
            transition-colors
          "
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-1 cursor-pointer select-none">
          <span className="text-red-600 text-2xl font-bold">
            <img src={YoutubeIcon} alt="youtube" />
          </span>

          <h1 className="hidden sm:block text-xl font-semibold">YouTube</h1>
        </div>
      </div>

      {/* CENTER */}
      <div
        className="
          hidden
          sm:flex

          flex-1
          justify-center
          px-4
        "
      >
        <div
          className="
            flex
            items-center

            w-full
            max-w-[720px]
          "
        >
          <div
            className="
              flex
              flex-1

              overflow-hidden

              rounded-full

              border
              border-[var(--border-color)]
            "
          >
            <input
              type="text"
              placeholder="Search"
              className="
                flex-1
                h-10

                px-4

                bg-[var(--bg-primary)]
                text-[var(--text-primary)]

                placeholder:text-[var(--text-secondary)]

                outline-none
              "
            />

            <button
              className="
                w-16
                h-10

                border-l
                border-[var(--border-color)]

                bg-[var(--bg-secondary)]

                flex
                items-center
                justify-center

                hover:bg-[var(--bg-hover)]

                transition-colors
              "
            >
              <Search size={20} />
            </button>
          </div>

          <button
            className="
              ml-3

              w-10
              h-10

              rounded-full

              bg-[var(--bg-secondary)]

              flex
              items-center
              justify-center

              hover:bg-[var(--bg-hover)]

              transition-colors
            "
          >
            <Mic size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          items-center
          justify-end

          gap-1
          sm:gap-2

          w-auto
          sm:w-[180px]

          shrink-0
        "
      >
        {/* Mobile Search */}
        <button
          className="
            sm:hidden

            p-2
            rounded-full

            hover:bg-[var(--bg-hover)]

            transition-colors
          "
        >
          <Search size={20} />
        </button>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="
            p-2
            rounded-full

            hover:bg-[var(--bg-hover)]

            transition-colors
          "
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {user ? (
          <ProfileCard user={user} handleLogout={handleLogout} />
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="
              flex
              items-center
              gap-2

              px-3
              py-2

              rounded-full

              border
              border-blue-500

              text-blue-500

              hover:bg-blue-500
              hover:text-white

              transition-all
            "
          >
            <UserCircle size={20} />

            <span className="hidden sm:block">Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
