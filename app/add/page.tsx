"use client";

import { links } from "@/lib/constants/Navbar";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandLinkedinFilled,
  IconCalendar,
  IconCalendarWeekFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import Option from "../../components/ui/option";
import { FloatingDock } from "@/components/ui/floating-dock";

const addHabit = () => {
  const [selected, setselected] = useState(0);
  const [active, setactive] = useState(0);
  const [habitName, setHabitName] = useState("");
  const [repeat, setRepeat] = useState("Daily");
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [endDate, setEndDate] = useState("");

  const handleHabitSubmit = () => {
    // Handle form submission
  };

  const [taskName, setTaskName] = useState("");
  const [reminderTimes, setReminderTimes] = useState([]);

  const handleAddReminder = () => {
    setReminderTimes([...reminderTimes]);
  };

  const handleTaskSubmit = () => {
    // e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-5 px-10">
      <h1 className="text-center text-[3rem] font-bold">Create New Habit</h1>
      <div className="flex justify-evenly mt-5">
        {[
          {
            text: "Regular Habit",
            icon: <IconCalendarWeekFilled color="green" size={"2rem"} />,
          },
          {
            text: "One-time Task",
            icon: <IconCalendar color="orange" size={"2rem"} />,
          },
        ].map((item, i) => (
          <Option
            key={i}
            text={item.text}
            icon={item.icon}
            index={i}
            selected={selected}
            setselected={setselected}
            classChange
            setactive={setactive}
          />
        ))}
      </div>
      <div className="flex items-center justify-center flex-col mt-10">
        <div
          className="container bg-[#001427] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[520px] rounded-[30px]"
          id="container"
        >
          <div
            className={`form-container absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 opacity-0 z-[1] left-0 sign-up ${
              active === 1
                ? "translate-x-full opacity-100 z-[5] animate-[move_0.6s]"
                : ""
            }`}
          >
            <form
              onSubmit={handleTaskSubmit}
              className="bg-[#001427] flex items-center justify-center flex-col h-full px-10 py-0"
            >
              <h1 className="text-[2rem] font-semibold">New Task</h1>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                required
                placeholder="Name your task"
              />

              <div className="mb-6">
                <label className="block mt-4 mb-2 text-lg font-semibold">Date</label>
                <input
                  type="date"
                  defaultValue="2025-02-09"
                  className="w-full p-2 bg-gray-800 rounded"
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                className="bg-darkRed text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
              >
                Save
              </button>
            </form>
          </div>
          <div
            className={`form-container absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 sign-in w-6/12 z-[2] left-0 ${
              active === 1 ? "translate-x-full" : ""
            }`}
          >
            <form
              onSubmit={handleHabitSubmit}
              className="bg-[#001427] flex items-center justify-center flex-col h-full px-10 py-0"
            >
              <h1 className="font-semibold text-[2rem]">New Habit</h1>
              <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 mt-2 px-[15px] py-2.5 rounded-lg border-[none]"
                required
                placeholder="Name your habit"
              />
              <label className="block mt-4 mb-2 text-lg font-semibold">
                Repeat
              </label>
              <div className="flex space-x-4">
                {["Daily", "Weekly", "Monthly"].map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRepeat(item)}
                    className={`p-2 rounded ${
                      repeat === item ? "bg-darkRed" : "bg-gray-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <label className="block mt-4 mb-2 text-lg font-semibold">
                Repeat in the:
              </label>
              <div className="flex space-x-4">
                {["Morning", "Afternoon", "Evening"].map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setTimeOfDay(item)}
                    className={`p-2 rounded ${
                      timeOfDay === item ? "bg-darkRed" : "bg-gray-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <label className="block mt-4 mb-2 text-lg font-semibold">
                Set end date or goal amount
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded"
              />
              <button
                type="submit"
                className="bg-darkRed mt-6 text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer px-[45px] py-2.5 rounded-lg border-solid border-transparent"
              >
                Save
              </button>
            </form>
          </div>
          <div
            className={`toggle-container absolute w-6/12 h-full overflow-hidden transition-all duration-[0.6s] ease-[ease-in-out] z-[1000] left-2/4 top-0 ${
              active === 1
                ? "-translate-x-full rounded-[0_150px_100px_0]"
                : "rounded-[150px_0_0_100px]"
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
                <h1 className="text-[2rem]">Don't Forget!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 my-5">
                  A reminder for all your tasks
                </p>
              </div>
              <div
                className={`toggle-panel absolute w-6/12 h-full flex items-center justify-center flex-col text-center transition-all duration-[0.6s] ease-[ease-in-out] px-[30px] py-0 top-0 right-0 toggle-right ${
                  active === 0 ? "translate-x-0" : "translate-x-[-200%]"
                }`}
              >
                <h1 className="text-[2rem]">Let's Remember!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 my-5">
                  Create new habits and remember all your tasks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-fit self-center mt-5 justify-center bg-transparent sticky bottom-0 z-[111111]">
        <FloatingDock
          // mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    </section>
  );
};

export default addHabit;
