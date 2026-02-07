import { Play } from "lucide-react";
import { Link } from "react-router";

type MusicCardProps = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function MusicCard({
  title,
  subtitle,
  image,
}: MusicCardProps) {

  return (
    <Link to="/playlist/1" className="group">
        <div
        className="
            group relative
            bg-[#181818] rounded-lg p-4
            transition-all duration-200 ease-out
            hover:bg-[#282828]
            hover:-translate-y-1
            hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]

            cursor-pointer
        "
        >
        
        <div className="relative">
            <img
                src={image  ?? "/placeholder.jpg"}
                alt={title}
                className="w-full aspect-square object-cover rounded-md"
            />
            {/* Play Button */}
            <button
            className="
                absolute bottom-4 right-2
                w-12 h-12
                bg-[#1DB954]
                rounded-full
                flex items-center justify-center
                shadow-[0_8px_24px_rgba(0,0,0,0.6)]
                opacity-0 translate-y-2
                transition-all duration-200 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
                hover:scale-105
            "
            >
            <Play size={20} fill="black" className="ml-0.5" />
            </button>
        </div>

        {/* Text */}
        <div className="mt-4">
            <h3 className="font-semibold text-sm truncate">{title}</h3>
            <p className="text-xs text-neutral-400 mt-1 truncate">
            {subtitle}
            </p>
        </div>
        </div>
    </Link>
  );
}
