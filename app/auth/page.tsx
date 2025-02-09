"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants/Navbar";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandLinkedinFilled,
  IconLogin2,
  IconUserPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import Option from "../../components/ui/option";
const Auth = () => {
  const [selected, setselected] = useState(0);
  const [active, setactive] = useState(0);

  return (
    <section className="py-5 px-10 flex flex-col">
      <FloatingNav navItems={navItems} show={false} />

      <h1 className="text-center text-[3rem] font-bold">
        {selected === 0 ? "Welcome Back!" : "Welcome User!"}
      </h1>
      <div className="flex justify-evenly mt-5">
        {[
          {
            text: "Sign-in",
            icon: <IconLogin2 color="green" size={"2rem"} />,
          },
          {
            text: "Sign-up",
            icon: <IconUserPlus color="orange" size={"2rem"} />,
          },
        ].map((item, i) => (
          <Option
            key={i}
            index={i}
            icon={item.icon}
            text={item.text}
            selected={selected}
            setselected={setselected}
            setactive={setactive}
            classChange
          />
        ))}
      </div>
      <div className="flex items-center justify-center flex-col mt-10">
        <div
          className="container bg-[#001427] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[30px]"
          id="container"
        >
          <div
            className={`form-container absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 opacity-0 z-[1] left-0 sign-up ${
              active === 1
                ? "translate-x-full opacity-100 z-[5] animate-[move_0.6s]"
                : ""
            }`}
          >
            <form className="bg-[#001427] flex items-center justify-center flex-col h-full px-10 py-0">
              <h1 className="text-[2rem] font-semibold">Create Account</h1>
              <div className="social-icons mx-0 my-5">
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandGoogleFilled />
                </a>
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandFacebookFilled />
                </a>
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandGithubFilled />
                </a>
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandLinkedinFilled />
                </a>
              </div>
              <span className="text-xs">
                or use your email for registeration
              </span>
              <input
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-[#eee] text-[#000]  text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                type="password"
                placeholder="Password"
              />
              <button className="bg-darkRed text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent">
                Sign Up
              </button>
            </form>
          </div>
          <div
            className={`form-container absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 sign-in w-6/12 z-[2] left-0 ${
              active === 1 ? "translate-x-full" : ""
            }`}
          >
            <form className="bg-[#001427] flex items-center justify-center flex-col h-full px-10 py-0">
              <h1 className="font-semibold text-[2rem]">Sign In</h1>
              <div className="social-icons mx-0 my-5">
                <a
                  className="text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandGoogleFilled />
                </a>
                <a
                  className="text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandFacebookFilled />
                </a>
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandGithubFilled />
                </a>
                <a
                  className=" text-[13px] no-underline mt-[15px] mb-2.5 icon border inline-flex justify-center items-center w-10 h-10 mx-[3px] my-0 rounded-[20%] border-solid border-[#ccc]"
                  href="#"
                >
                  <IconBrandLinkedinFilled />
                </a>
              </div>
              <span className="text-xs">or use your email password</span>
              <input
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                type="password"
                placeholder="Password"
              />
              <a
                className=" text-[13px] no-underline mt-[15px] mb-2.5 mx-0"
                href="#"
              >
                Forget Your Password?
              </a>
              <button className="bg-darkRed text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent">
                Sign In
              </button>
            </form>
          </div>
          <div
            className={`toggle-container absolute w-6/12 h-full overflow-hidden transition-all duration-[0.6s] ease-[ease-in-out] z-[1000] rounded-[150px_0_0_100px] left-2/4 top-0 ${
              active === 1 ? "-translate-x-full rounded-[0_150px_100px_0]" : ""
            }`}
          >
            <div
              className={`toggle bg-darkRed text-white relative h-full w-[200%] translate-x-0 transition-all duration-[0.6s] ease-[ease-in-out] -left-full ${
                active === 1 ? "translate-x-2/4" : ""
              }`}
            >
              <div
                className={`toggle-panel absolute w-6/12 h-full flex items-center justify-center flex-col text-center transition-all duration-[0.6s] ease-[ease-in-out] px-[30px] py-0 top-0 toggle-left ${
                  active === 1 ? "translate-x-0" : "translate-x-[200%]"
                }`}
              >
                <h1 className="text-[2rem]">Hello, Friend!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 my-5">
                  Register with your personal details to use all of site
                  features
                </p>
              </div>
              <div
                className={`toggle-panel absolute w-6/12 h-full flex items-center justify-center flex-col text-center transition-all duration-[0.6s] ease-[ease-in-out] px-[30px] py-0 top-0 right-0 toggle-right ${
                  active === 0 ? "translate-x-0" : "translate-x-[-200%]"
                }`}
              >
                <h1 className="text-[2rem]">Welcome Back!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 my-5">
                  Enter your personal details to use all of site features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
