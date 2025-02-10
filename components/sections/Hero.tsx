import { useGSAP } from "@gsap/react";
import Logo from "../ui/logo";
import gsap from "gsap";
import Aurora from "../ui/Hero-Background";
import Hyperspeed from "../ui/Hero-Background";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.to("#tagline", {
      marginTop: innerWidth > 767 ? "2vh" : "140px",
      opacity: 1,
      duration: 1,
      delay: 7.3,
    });
    gsap.to("#button", {
      translateY: innerWidth > 767 ? "8vh" : "80px",
      display: "inline-flex",
      delay: 7.8,
    });
  }, {});
  return (
    <div className=" flex flex-col justify-center w-[calc(100%)] h-screen overflow-hidden">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />
      <div
        id="home"
        className="flex px-2 md:px-10 py-2 justify-center items-center flex-col"
      >
        <Logo />
        <p
          id="tagline"
          className="z-10 text-[3vw] text-xl md:text-3xl lg:text-4xl tracking-widest opacity-0 px-20 text-center"
        >
          Small Habits, <span className="whitespace-nowrap">Big Impact</span>
        </p>

        <a href="#english">
          <button
            id="button"
            className="hidden translate-y-[45vh] h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-450 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
