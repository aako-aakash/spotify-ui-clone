type GenreCardProps = {
  title: string;
  color: string;
};

export default function GenreCard({ title, color }: GenreCardProps) {
  return (
    <div
      className="
        relative h-40 rounded-lg overflow-hidden
        cursor-pointer
        transition-transform duration-200
        hover:scale-[1.03]
      "
      style={{ backgroundColor: color }}
    >
      <h3 className="absolute bottom-4 left-4 text-xl font-bold">
        {title}
      </h3>
    </div>
  );
}
