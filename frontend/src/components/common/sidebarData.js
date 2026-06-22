import {
  House,
  Flame,
  Music2,
  Gamepad2,
  Newspaper,
  Trophy,
  PlaySquare,
  Users,
  History,
  Library,
} from "lucide-react";

export const sidebarItems = [
  {
    name: "Home",
    path: "/",
    icon: House,
  },
  {
    name: "Shorts",
    path: "/shorts",
    icon: PlaySquare,
  },
  {
    name: "Subscriptions",
    path: "/subscriptions",
    icon: Users,
  },
];

export const exploreItems = [
  {
    name: "Trending",
    path: "/trending",
    icon: Flame,
  },
  {
    name: "Music",
    path: "/music",
    icon: Music2,
  },
  {
    name: "Gaming",
    path: "/gaming",
    icon: Gamepad2,
  },
  {
    name: "News",
    path: "/news",
    icon: Newspaper,
  },
  {
    name: "Sports",
    path: "/sports",
    icon: Trophy,
  },
];

export const libraryItems = [
  {
    name: "History",
    path: "/history",
    icon: History,
  },
  {
    name: "Library",
    path: "/library",
    icon: Library,
  },
];