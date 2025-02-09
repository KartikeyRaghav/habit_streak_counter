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
        translateX: innerWidth > 767 ? "-2vw" : "-15.36px",
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
      { translateX: innerWidth > 767 ? "2vw" : "15.36px", delay: 2 }
    );
    tl.to(["#logo-left-small-down", "#logo-left-slant"], {
      scaleY: 0.6,
      translateX: innerWidth > 767 ? "-7.5vw" : "-57.6px",
    });
    right_tl.to(["#logo-right-small-down", "#logo-right-slant"], {
      scaleY: 0.6,
      translateX: innerWidth > 767 ? "7.5vw" : "57.6px",
    });
    tl.to("#logo-left-slant", {
      rotate: -48,
      scaleY: 0.35,
      translateY: innerWidth > 767 ? "8.88vw" : "68.19px",
      translateX: innerWidth > 767 ? "-4.7vw" : "-36px",
    });
    right_tl.to("#logo-right-slant", {
      rotate: 48,
      scaleY: 0.35,
      translateY: innerWidth > 767 ? "8.88vw" : "68.19px",
      translateX: innerWidth > 767 ? "4.7vw" : "36px",
    });
    tl.to(
      [
        "#logo-left-horizontal-up",
        "#logo-left-horizontal-down",
        "#logo-left-small-up",
      ],
      {
        rotate: 90,
        translateY: innerWidth > 767 ? "-11.25vw" : "-86.4px",
        translateX: innerWidth > 767 ? "-7.5vw" : "-57.6px",
      }
    );
    right_tl.to(
      [
        "#logo-right-horizontal-up",
        "#logo-right-horizontal-down",
        "#logo-right-small-up",
      ],
      {
        rotate: 90,
        translateY: innerWidth > 767 ? "-11.25vw" : "-86.4px",
        translateX: innerWidth > 767 ? "7.5vw" : "57.6px",
      }
    );
    tl.to(["#logo-left-small-up", "#logo-left-horizontal-up"], {
      scaleY: 0.25,
      translateX: innerWidth > 767 ? "-12.5vw" : "-96px",
      translateY: innerWidth > 767 ? "-13.15vw" : "-100.992",
      rotate: 0,
    });
    right_tl.to(["#logo-right-small-up", "#logo-right-horizontal-up"], {
      scaleY: 0.25,
      translateX: innerWidth > 767 ? "12.5vw" : "96px",
      translateY: innerWidth > 767 ? "-13.15vw" : "-100.992",
      rotate: 0,
    });
    tl.to(["#logo-left-horizontal-up"], {
      rotate: 90,
      scaleY: 0.5,
      translateY: innerWidth > 767 ? "-15vw" : "-115.2px",
      translateX: innerWidth > 767 ? "-7.5vw" : "-57.6px",
    });
    right_tl.to(["#logo-right-horizontal-up"], {
      rotate: 90,
      scaleY: 0.5,
      translateY: innerWidth > 767 ? "-15vw" : "-115.2px",
      translateX: innerWidth > 767 ? "7.5vw" : "57.6px",
    });
    if (innerWidth > 767) {
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
    } else {
      tl.to("#logo", {
        scale: 0.85,
        delay: 0.5,
        duration: 0.8,
      });
    }
  }, {});
  return (
    <div id="hero" className="flex items-center justify-center opacity-0">
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
                minWidth: "19.175px",
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
