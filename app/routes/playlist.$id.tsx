import { Play, Clock3, Heart, MoreHorizontal } from "lucide-react";
import playlistCover from "../assets/images/playlist-cover.jpg";
import Footer from "../components/Footer";

const tracks = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: 2, title: "As It Was", artist: "Harry Styles", duration: "2:47" },
  { id: 3, title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
  { id: 4, title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { id: 5, title: "Heat Waves", artist: "Glass Animals", duration: "3:58" },
];

export default function PlaylistDetail() {
  return (
    <>
      <div className="pb-32">

        {/* HERO */}
        <section className="flex items-end gap-6 px-6 pt-20 pb-6
                            bg-linear-to-b from-[#535353] to-[#121212]">
          
          <img
            src={playlistCover}
            alt="Playlist cover"
            className="w-56 h-56 object-cover rounded shadow-2xl"
          />

          <div className="w-56 h-56 bg-neutral-700 rounded shadow-[0_8px_24px_rgba(0,0,0,0.6)]
  " />

          {/* Info */}
          <div className="flex flex-col gap-4">
            <span className="uppercase text-xs tracking-widest">
              Playlist
            </span>

            <h1 className="text-6xl font-extrabold tracking-tight">
              Daily Mix 1
            </h1>

            <p className="text-neutral-300 max-w-xl">
              A mix of your favorite tracks. Updated daily.
            </p>

            <div className="text-sm text-neutral-300">
              <span className="font-semibold text-white">Spotify</span>
              <span className="mx-1">•</span>
              <span>50 songs</span>
              <span className="mx-1">•</span>
              <span>3 hr 12 min</span>
            </div>
          </div>
        </section>

        {/* ACTION BAR */}
        <section className="px-6 py-6 flex items-center gap-6">
          <button
            className="
              w-14 h-14 rounded-full
              bg-[#1DB954]
              flex items-center justify-center
              hover:scale-105 transition
            "
          >
            <Play size={24} fill="black" className="ml-1" />
          </button>

          <button className="text-neutral-400 hover:text-white">
            <Heart size={24} />
          </button>

          <button className="text-neutral-400 hover:text-white">
            <MoreHorizontal size={24} />
          </button>
        </section>

        {/* TRACK LIST */}
        <section className="px-6">
          {/* Header */}
          <div className="grid grid-cols-[40px_1fr_120px] gap-4
                          px-4 py-2 text-neutral-400 text-sm
                          border-b border-neutral-800">
            <span>#</span>
            <span>Title</span>
            <Clock3 size={16} />
          </div>

          {/* Rows */}
          <div className="divide-y divide-neutral-800">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="
                  group grid grid-cols-[40px_1fr_120px] gap-4
                  px-4 py-3 text-sm
                  hover:bg-white/10 rounded
                  cursor-pointer
                "
              >
                {/* Index / Play */}
                <div className="flex items-center text-neutral-400">
                  <span className="group-hover:hidden">
                    {index + 1}
                  </span>
                  <Play
                    size={14}
                    className="hidden group-hover:block"
                  />
                </div>

                {/* Title */}
                <div className="flex flex-col">
                  <span className="font-medium">{track.title}</span>
                  <span className="text-neutral-400 text-xs">
                    {track.artist}
                  </span>
                </div>

                {/* Duration */}
                <span className="text-neutral-400 text-right">
                  {track.duration}
                </span>
              </div>
            ))}
          </div>
        </section>
    
      </div>
      <Footer/>
    </>
  );
}
