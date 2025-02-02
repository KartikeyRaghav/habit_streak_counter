import { useGSAP } from "@gsap/react";
import Logo from "../ui/logo";
import { Vortex } from "../ui/vortex";
import gsap from "gsap";

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
      translateY: innerWidth > 767 ? "8vh" : '80px',
      display: "inline-flex",
      delay: 7.8,
    });
  }, {});
  return (
    <div className="w-[calc(100%)] rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-2 w-full h-full"
      >
        <div id="home" className="flex justify-center items-center flex-col">
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
      </Vortex>
    </div>
  );
};

export default Hero;
