import GenreCard from "../components/GenreCard";
import Footer from "../components/Footer";

const genres = [
  { title: "Pop", color: "#8D67AB" },
  { title: "Hip-Hop", color: "#BA5D07" },
  { title: "Rock", color: "#E61E32" },
  { title: "Jazz", color: "#0D73EC" },
  { title: "Workout", color: "#777777" },
  { title: "Chill", color: "#1DB954" },
  { title: "Focus", color: "#503750" },
  { title: "Party", color: "#AF2896" },
];

export default function Search() {
  return (
    <>
      <div className="p-6 space-y-8">
        
        {/* Search Input */}
        <div className="max-w-md">
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="
              w-full px-4 py-2
              rounded-full
              bg-white text-black
              placeholder:text-neutral-500
              focus:outline-none
            "
          />
        </div>

        {/* Browse */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Browse all</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {genres.map((genre) => (
              <GenreCard
                key={genre.title}
                title={genre.title}
                color={genre.color}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
