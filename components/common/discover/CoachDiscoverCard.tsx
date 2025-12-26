import Image from "next/image";
interface CoachDiscoverCardProps {
  isHovered?: boolean;
}

const CoachDiscoverCard = ({ isHovered = false }: CoachDiscoverCardProps) => {
  return (
    <div
      className={`relative h-[350px] sm:h-[530px] rounded-3xl transition-all duration-1000 ease-in-out`}
    >
      <Image
        src={"/images/woman-coach-placeholder.webp"}
        alt="coach-name"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-3xl brightness-50"
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isHovered ? "items-end justify-start" : ""
      }`}>
        <div className={`${isHovered ? "p-5 w-full" : ""}`}>
          {/* Name with rotation animation */}
          <h2
            className={`text-h5 leading-h5 font-bold text-neutral-50 transition-all duration-1000 ease-in-out whitespace-nowrap ${
              isHovered ? "rotate-360 opacity-100" : "rotate-270 opacity-80"
            }`}
            style={{
              transformOrigin: "center center",
            }}
          >
            Mia Brown
          </h2>

          {/* Other content with fade and slide animation */}
          <div
            className={`transition-all duration-1200  ${
              isHovered
                ? "opacity-100 translate-y-0 max-h-96"
                : "opacity-0 translate-y-8 max-h-0"
            }`}
          >
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
      </div>
    </div>
  );
};

export default CoachDiscoverCard;