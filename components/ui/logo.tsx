import { logo_ids } from "@/lib/constants/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Logo = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    const right_tl = gsap.timeline();
    gsap.to("#logo", { scale: 0.7, duration: 0.1 });
    tl.to("#hero", { opacity: 1, duration: 1 });
    tl.to(
      [
        "#logo-left-vertical",
        "#logo-left-horizontal-up",
        "#logo-left-horizontal-down",
        "#logo-left-slant",
        "#logo-left-small-up",
        "#logo-left-small-down",
        "#logo-right-vertical",
        "#logo-right-horizontal-up",
        "#logo-right-horizontal-down",
        "#logo-right-slant",
        "#logo-right-small-up",
        "#logo-right-small-down",
      ],
      {
        opacity: 1,
        duration: 1,
      }
    );
    gsap.to(
      [
        "#logo-left-horizontal-up",
        "#logo-left-horizontal-down",
        "#logo-right-horizontal-up",
        "#logo-right-horizontal-down",
        "#logo-left-small-up",
        "#logo-right-small-up",
      ],
      {
        scaleY: 0.5,
      }
    );
    tl.to(
      [
        "#logo-left-vertical",
        "#logo-left-horizontal-up",
        "#logo-left-horizontal-down",
        "#logo-left-slant",
        "#logo-left-small-up",
        "#logo-left-small-down",
      ],
      {
        translateX: "-2vw",
      }
    );
    right_tl.to(
      [
        "#logo-right-vertical",
        "#logo-right-horizontal-up",
        "#logo-right-horizontal-down",
        "#logo-right-slant",
        "#logo-right-small-up",
        "#logo-right-small-down",
      ],
      { translateX: "2vw", delay: 2 }
    );
    tl.to(["#logo-left-small-down", "#logo-left-slant"], {
      scaleY: 0.6,
      translateX: "-7.5vw",
    });
    right_tl.to(["#logo-right-small-down", "#logo-right-slant"], {
      scaleY: 0.6,
      translateX: "7.5vw",
    });
    tl.to("#logo-left-slant", {
      rotate: -48,
      scaleY: 0.35,
      translateY: "8.88vw",
      translateX: "-4.7vw",
    });
    right_tl.to("#logo-right-slant", {
      rotate: 48,
      scaleY: 0.35,
      translateY: "8.88vw",
      translateX: "4.7vw",
    });
    tl.to(
      [
        "#logo-left-horizontal-up",
        "#logo-left-horizontal-down",
        "#logo-left-small-up",
      ],
      {
        rotate: 90,
        translateY: "-11.25vw",
        translateX: "-7.5vw",
      }
    );
    right_tl.to(
      [
        "#logo-right-horizontal-up",
        "#logo-right-horizontal-down",
        "#logo-right-small-up",
      ],
      { rotate: 90, translateY: "-11.25vw", translateX: "7.5vw" }
    );
    tl.to(["#logo-left-small-up", "#logo-left-horizontal-up"], {
      scaleY: 0.25,
      translateX: "-12.5vw",
      translateY: "-13.15vw",
      rotate: 0,
    });
    right_tl.to(["#logo-right-small-up", "#logo-right-horizontal-up"], {
      scaleY: 0.25,
      translateX: "12.5vw",
      translateY: "-13.15vw",
      rotate: 0,
    });
    tl.to(["#logo-left-horizontal-up"], {
      rotate: 90,
      scaleY: 0.5,
      translateY: "-15vw",
      translateX: "-7.5vw",
    });
    right_tl.to(["#logo-right-horizontal-up"], {
      rotate: 90,
      scaleY: 0.5,
      translateY: "-15vw",
      translateX: "7.5vw",
    });
    tl.to("#inner_logo", {
      translateX: "-30vw",
      duration: 1.5,
      delay: 0.7,
    });
    right_tl.to("#name", {
      translateX: "42vw",
      delay: 1,
      duration: 1.2,
      opacity: 1,
    });
  }, {});
  return (
    <div id="hero" className="flex items-center mt-20 justify-center opacity-0">
      <div id="logo">
        <div
          id="inner_logo"
          className="relative flex items-center justify-center"
        >
          {logo_ids.map((item, i) => (
            <div
              id={item}
              key={i}
              className="absolute opacity-0 bg-white"
              style={{
                width: "2.5vw",
                minWidth: "11px",
                height: "25vw",
                minHeight: "192px",
                borderRadius: "1.1vw",
              }}
            ></div>
          ))}
          <p
            id="name"
            className="opacity-0 translate-y-[5vw] font-bold text-[12vw] font-serif hidden md:block "
          >
            RACK BIT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
