import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Volume2,
  Heart,
} from "lucide-react";

export default function PlayerBar() {
  return (
    <footer className="h-22.5 bg-[#181818] border-t border-neutral-800 px-4">
      <div className="h-full flex items-center justify-between">

        {/* LEFT — Song Info */}
        <div className="flex items-center gap-4 w-[30%]">
          <div className="w-14 h-14 bg-neutral-700 rounded" />

          <div className="flex flex-col text-sm">
            <span className="font-medium">Daily Mix 1</span>
            <span className="text-neutral-400 text-xs">
              Spotify
            </span>
          </div>

          <button className="cursor-pointer text-neutral-400 hover:text-white">
            <Heart size={18} />
          </button>
        </div>

        {/* CENTER — Controls */}
        <div className="flex flex-col items-center gap-2">
          
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="cursor-pointer text-neutral-400 hover:text-white">
              <Shuffle size={18} />
            </button>

            <button className="cursor-pointer text-neutral-400 hover:text-white">
              <SkipBack size={20} />
            </button>

            <button
              className="
                w-10 h-10
                rounded-full
                bg-white
                flex items-center justify-center
                hover:scale-105
                transition
                cursor-pointer
              "
            >
              <Play size={18} fill="black" />
            </button>

            <button className="text-neutral-400 hover:text-white">
              <SkipForward size={20} />
            </button>

            <button className="text-neutral-400 hover:text-white cursor-pointer">
              <Repeat size={18} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>0:42</span>
            <div className="w-80 h-1 bg-neutral-600 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full" />
            </div>
            <span>3:21</span>
          </div>
        </div>

        {/* RIGHT — Volume */}
        <div className="flex items-center gap-3 w-[30%] justify-end">
          <Volume2 size={18} className="text-neutral-400" />
          <div className="w-24 h-1 bg-neutral-600 rounded-full">
            <div className="w-1/2 h-full bg-white rounded-full" />
          </div>
        </div>

      </div>
    </footer>
  );
}
