import { NavLink } from "react-router";
import SpotifyLogo from "./SpotifyLogo";

import {
  Home,
  Search,
  Library,
  Heart,
  Music2,
} from "lucide-react";

const mainNav = [
  { name: "Home", path: "/", icon: Home },
  { name: "Search", path: "/search", icon: Search },
  { name: "Your Library", path: "/library", icon: Library },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-[#121212] px-3 py-4 flex flex-col gap-6 text-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2 px-3">
        <SpotifyLogo />
        <span className="text-lg font-semibold tracking-tight w-7 h-7 translate-y-px">
            Spotify
        </span>
    </div>


      {/* Main Navigation */}
      <nav className="flex flex-col gap-1">
        {mainNav.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-4 px-3 py-2 rounded-md
              transition-colors duration-200
              ${
                isActive
                  ? "bg-[#1f1f1f] text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }
            `
            }
          >
            <Icon size={22} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-t border-neutral-800 mx-3" />

      {/* Playlists */}
      <div className="flex flex-col gap-2 px-3 text-neutral-400">
        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Heart size={18} />
          <span>Liked Songs</span>
        </div>

        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Music2 size={18} />
          <span>My Playlist</span>
        </div>

        <div className="hover:text-white cursor-pointer pl-7">
          Chill Mix
        </div>
      </div>
    </aside>
  );
}
