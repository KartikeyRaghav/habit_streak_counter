"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants/Navbar";
import {
  IconCalendar,
  IconCalendarWeekFilled,
  IconLogin2,
  IconUserPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import Option from "../../components/ui/option";

const Auth = () => {
  const [selected, setselected] = useState(0);

  return (
    <section className="py-10 px-10">
      <FloatingNav navItems={navItems} show={false} />

      <h1 className="text-center text-[3rem] font-bold">
        {selected === 0 ? "Welcome Back!" : "Welcome User!"}
      </h1>
      <div className="flex justify-evenly mt-10">
        {[
          {
            text: "Login",
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
          />
        ))}
      </div>
    </section>
  );
};

export default Auth;
