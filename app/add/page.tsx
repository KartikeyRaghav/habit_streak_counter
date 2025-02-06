"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants/Navbar";
import { IconCalendar, IconCalendarWeekFilled } from "@tabler/icons-react";
import { useState } from "react";

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
          <button
            key={i}
            onClick={() => {
              setselected(i);
            }}
          >
            <div
              className={`flex items-center bg-slate-900 p-5 ${
                selected === i ? "border-2" : ""
              } rounded-3xl`}
            >
              <div>{item.icon}</div>
              <div className="ml-2">
                <p className="text-[2rem]">{item.text}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default addHabit;
