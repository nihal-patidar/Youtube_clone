import { Bell, UserCircle, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ user, handleLogout }) {
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 relative">
      <button className="p-2 rounded-full hover:bg-[var(--bg-hover)] transition-colors">
        <Bell size={20} />
      </button>

      <button
        onClick={() => setShowProfile((prev) => !prev)}
        className="
          flex
          items-center
          gap-2
          p-1
          rounded-full
          hover:bg-[var(--bg-hover)]
          transition-colors
        "
      >
        <UserCircle size={34} />

        <span className="hidden lg:block font-medium">
          {user.username.split(" ")[0]}
        </span>

        <ChevronDown size={18} />
      </button>

      {showProfile && (
        <div
          className="
            absolute
            right-0
            top-14
            w-72

            rounded-xl

            border
            border-[var(--border-color)]

            bg-[var(--bg-secondary)]

            shadow-2xl

            overflow-hidden

            animate-in
            fade-in
            zoom-in-95
            duration-150

            z-50
          "
        >
          <div className="p-5 flex items-center gap-4">
            <UserCircle size={54} className="text-[var(--primary)]" />

            <div>
              <h3 className="font-semibold text-base">{user.username}</h3>

              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)]" />
          {user.channel && (
            <button
              onClick={handleLogout}
              className="
              w-full

              flex
              items-center
              gap-3

              px-5
              py-3


              hover:bg-red-500/10

              transition-colors
            "
            >
              <LogOut size={18} />
              My Channel
            </button>
          )}
          {!user.channel && (
            <button
              onClick={() => {
                navigate("/channel/create");
              }}
              className="
              w-full

              flex
              items-center
              gap-3

              px-5
              py-3

          

              hover:bg-red-500/10

              transition-colors
            "
            >
              <LogOut size={18} />
              Create Channel
            </button>
          )}
          <button
            onClick={() => {
              navigate(`/channel/${user.channel._id}`);
            }}
            className="
              w-full

              flex
              items-center
              gap-3

              px-5
              py-3

              text-red-400

              hover:bg-red-500/10

              transition-colors
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
