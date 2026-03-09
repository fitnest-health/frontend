import Image from "next/image";
interface CoachDiscoverCardProps {
  isExpanded?: boolean;
  onClick?: () => void;
}

const CoachDiscoverCard = ({ isExpanded = false, onClick }: CoachDiscoverCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative h-[350px] sm:h-[530px] rounded-3xl transition-all duration-1000 ease-in-out cursor-pointer`}
    >
      <Image
        src={"/images/woman-coach-placeholder.webp"}
        alt="coach-name"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-3xl brightness-50"
      />
      {/* Name with rotation and position animation */}
      <div className={`absolute transition-all duration-1000 ease-in-out ${
        isExpanded 
          ? "top-[45%]   left-5" 
          : "top-[45%] left-1/2 -translate-x-1/2"
      }`}>
        <h2
          className={`text-h5 leading-h5 font-bold text-neutral-50 transition-all duration-1000 ease-in-out whitespace-nowrap ${
            isExpanded ? "rotate-0 opacity-100" : "rotate-[-90deg] opacity-80"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          Mia Brown
        </h2>
      </div>

      {/* Other content with fade and slide animation */}
      <div className={`absolute bottom-5 left-5 right-5 transition-all duration-1200 ${
        isExpanded
          ? "opacity-100 translate-y-0 max-h-96"
          : "opacity-0 translate-y-8 max-h-0 pointer-events-none"
      }`}>
        <p className="text-primary-700 text-s2 leading-s2 font-medium mt-1">
          Gym Coach
        </p>
        <p className="font-bold text-s2 leading-s2 text-neutral-50 mt-2">
          Günü sakit bitirmək üçün 10 dəqiqəlik yoga
        </p>
        <p className="text-b1 leading-b1 text-neutral-50 mt-2">
          Yoga bədəni gücləndirdiyi qədər zehni də sakitləşdirir. Pozalara
          tələsmə — hərəkətlərin arasında nəfəsini izləyərək gərginliyin necə
          azaldığını hiss et. Bədənini zorlamadan, yavaşca axına uyğun hərəkət
          et. Gündə cəmi bir neçə dəqiqə uzanma və dərin nəfəs məşqləri belə,
          stressi azaldır və günün ritmini daha balanslı edir.
        </p>
      </div>
    </div>
  );
};

export default CoachDiscoverCard;