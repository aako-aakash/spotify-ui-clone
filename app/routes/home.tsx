import MusicCard from "../components/MusicCard";
import chillMix from "../assets/images/covers/chill-mix.jpg";
import dailyMix from "../assets/images/covers/daily-mix.jpg";
import topHits from "../assets/images/covers/top-hits.jpg";
import focusFlow from "../assets/images/covers/focus-flow.jpg";
import likedSongs from "../assets/images/covers/liked-songs.jpg";
import discoverWeekly from "../assets/images/covers/discover-weekly.jpg";
import releaseRadar from "../assets/images/covers/release-radar.jpg";
import dailyMix2 from "../assets/images/covers/daily-mix-2.jpg";
import chillHits from "../assets/images/covers/chill-hits.jpg";
import moodBooster from "../assets/images/covers/mood-booster.jpg";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="p-6 space-y-8">
        
        {/* Greeting */}
        <h1 className="text-3xl font-bold">Good evening</h1>

        {/* Recently Played */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Recently Played</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <MusicCard title="Chill Mix" subtitle="Playlist" image={chillMix} />
            <MusicCard title="Top Hits" subtitle="Playlist" image={topHits} />
            <MusicCard title="Daily Mix 1" subtitle="Playlist" image={dailyMix} />
            <MusicCard title="Focus Flow" subtitle="Playlist" image={focusFlow} />
            <MusicCard title="Liked Songs" subtitle="Playlist" image={likedSongs} />
          </div>
        </section>

        {/* Made For You */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Made for You</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <MusicCard
              title="Discover Weekly"
              subtitle="Updated weekly"
              image={discoverWeekly}
            />

            <MusicCard
              title="Release Radar"
              subtitle="New music"
              image={releaseRadar}
            />

            <MusicCard
              title="Daily Mix 2"
              subtitle="Just for you"
              image={dailyMix2}
            />

            <MusicCard
              title="Chill Hits"
              subtitle="Relax & unwind"
              image={chillHits}
            />

            <MusicCard
              title="Mood Booster"
              subtitle="Feel good music"
              image={moodBooster}
            />
          </div>

        </section>
      </div>
      <Footer/>
    </>
  );
}
