"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants/Navbar";
import { IconCalendar, IconCalendarWeekFilled } from "@tabler/icons-react";
import { useState } from "react";
import Option from "../../components/ui/option";

const addHabit = () => {
  const [selected, setselected] = useState(0);

  return (
    <section className="py-10 px-10">
      <FloatingNav navItems={navItems} show={false} />

      <h1 className="text-center text-[3rem] font-bold">Create New Habit</h1>
      <div className="flex justify-evenly mt-10">
        {[
          {
            text: "Regular Habit",
            icon: <IconCalendarWeekFilled color="blue" size={"2rem"} />,
          },
          {
            text: "One-time Task",
            icon: <IconCalendar color="orange" size={"2rem"} />,
          },
        ].map((item, i) => (
          <Option
            text={item.text}
            icon={item.icon}
            index={i}
            selected={selected}
            setselected={setselected}
          />
        ))}
      </div>
    </section>
  );
};

export default addHabit;
