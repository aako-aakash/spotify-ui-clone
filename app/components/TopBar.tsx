import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main");

    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;

      // Spotify-style fade range
      const newOpacity = Math.min(scrollTop / 200, 1);
      setOpacity(newOpacity);
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20">
      <div
        className="h-16 px-6 flex items-center justify-between
                   backdrop-blur transition-colors duration-300"
        style={{
          backgroundColor: `rgba(18, 18, 18, ${opacity})`,
        }}
      >
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center
                             rounded-full bg-black/70 hover:bg-black">
            <ChevronLeft size={18} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center
                             rounded-full bg-black/40 cursor-not-allowed">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 px-2 py-1
                        rounded-full bg-black/70 hover:bg-black cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-sm font-semibold">Aakash</span>
        </div>
      </div>
    </header>
  );
}
