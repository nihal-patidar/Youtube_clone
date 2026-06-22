import { NavLink } from "react-router-dom";
import {
  sidebarItems,
  exploreItems,
  libraryItems,
} from "./sidebarData";

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const isCollapsed = !isSidebarOpen;

  const renderLinks = (
    items,
    showSectionLabels = true
  ) =>
    items.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => {
            if (window.innerWidth < 768) {
              setIsSidebarOpen(false);
            }
          }}
          className={({ isActive }) =>
            `
            group
            flex

            ${
              isCollapsed
                ? `
                  flex-col
                  justify-center
                  items-center
                  gap-1
                  h-[74px]
                `
                : `
                  items-center
                  gap-6
                  px-3
                  py-3
                `
            }

            rounded-xl
            transition-all
            duration-200

            ${
              isActive
                ? "bg-[var(--bg-hover)] font-medium"
                : "hover:bg-[var(--bg-hover)]"
            }
          `
          }
        >
          <Icon
            size={isCollapsed ? 22 : 20}
          />

          <span
            className={
              isCollapsed
                ? "text-[10px] text-center leading-tight"
                : "text-sm"
            }
          >
            {item.name}
          </span>
        </NavLink>
      );
    });

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="
            md:hidden
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
          "
          onClick={() =>
            setIsSidebarOpen(false)
          }
        />
      )}

      <aside
        className={`
          fixed
          top-[var(--navbar-height)]
          left-0

          z-50

          h-[calc(100vh-var(--navbar-height))]

          bg-[var(--bg-primary)]

          border-r
          border-[var(--border-color)]

          overflow-y-auto

          transition-all
          duration-300

          scrollbar-thin

          ${
            isSidebarOpen
              ? `
                w-[240px]
                translate-x-0
              `
              : `
                w-[72px]
                -translate-x-full
                md:translate-x-0
              `
          }
        `}
      >
        <nav
          className={`
            p-2
            ${
              isCollapsed
                ? "space-y-1"
                : "space-y-2"
            }
          `}
        >
          {/* MAIN */}
          <div>
            {renderLinks(sidebarItems)}
          </div>

          {!isCollapsed && (
            <>
              <hr className="my-4 border-[var(--border-color)]" />

              {/* EXPLORE */}
              <h3
                className="
                  px-3
                  mb-2
                  text-xs
                  font-semibold
                  text-[var(--text-secondary)]
                  uppercase
                "
              >
                Explore
              </h3>

              <div>
                {renderLinks(
                  exploreItems,
                  true
                )}
              </div>

              <hr className="my-4 border-[var(--border-color)]" />

              {/* LIBRARY */}
              <div>
                {renderLinks(
                  libraryItems,
                  true
                )}
              </div>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;