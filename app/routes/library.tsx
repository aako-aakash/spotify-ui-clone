import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import MusicCard from "../components/MusicCard";
import dailyMix from "../assets/images/covers/daily-mix.jpg";
import chillMix from "../assets/images/covers/chill-mix.jpg";
import topHits from "../assets/images/covers/top-hits.jpg";
import focusFlow from "../assets/images/covers/focus-flow.jpg";


import Footer from "../components/Footer";

const items = [
  {
    id: 1,
    title: "Daily Mix 1",
    type: "Playlist",
    image: dailyMix,
  },
  {
    id: 2,
    title: "Chill Mix",
    type: "Playlist",
    image: chillMix,
  },
  {
    id: 3,
    title: "Top Hits",
    type: "Playlist",
    image: topHits,
  },
  {
    id: 4,
    title: "Focus Flow",
    type: "Playlist",
    image: focusFlow,
  },
];

const filters = ["Playlists", "Artists", "Albums"] as const;

export default function Library() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Playlists");

  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className="p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Library</h1>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded
                ${view === "grid"
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white"}`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded
                ${view === "list"
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white"}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-1.5 rounded-full text-sm
                transition
                ${
                  activeFilter === filter
                    ? "bg-white text-black font-medium"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Content */}
        {view === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {items.map((item) => (
              <MusicCard
                key={item.id}
                title={item.title}
                subtitle={item.type}
                image={item.image}
              />

            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between
                          px-4 py-3 rounded
                          hover:bg-white/10 cursor-pointer"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-neutral-400">{item.type}</p>
                </div>
                <span className="text-sm text-neutral-400">Playlist</span>
              </div>
            ))}
          </div>
        )}
    
      </div>
      <Footer/>
    </>
  );
}
