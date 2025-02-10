"use client";

import { IconCalendar, IconCalendarWeekFilled } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "react-toastify";
import Option from "../../components/ui/option";

const AddTask = () => {
  const [selected, setselected] = useState(0);
  const [active, setactive] = useState(0);
  const [habitName, setHabitName] = useState("");
  const [repeat, setRepeat] = useState("Daily");
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [endDate, setEndDate] = useState("");

  const [taskName, setTaskName] = useState("");

  const notify = () => {
    toast.info("Feature Under Development!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
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
          className="container bg-[#001427] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[600px] md:min-h-[480px] rounded-[30px]"
          id="container"
        >
          <div
            className={`form-container absolute h-3/4 translate-y-[32%] md:translate-y-0 md:h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-full md:w-6/12 opacity-0 z-[1] left-0 sign-up ${
              innerWidth > 767
                ? active === 1
                  ? "translate-x-full opacity-100 z-[5] animate-[move_0.6s]"
                  : ""
                : active === 1
                ? "translate-x-0 opacity-100 z-[5] animate-[move_0.6s]"
                : "-translate-x-full"
            }`}
          >
            <form className="bg-[#001427] flex items-center justify-center flex-col h-full px-8 md:px-10 py-0">
              <h1 className="text-[2rem] my-5 md:my-0 font-semibold">
                New Task
              </h1>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="bg-[#eee] text-[#000] text-[13px] w-full mx-0 my-5 md:my-2 px-[15px] py-2.5 rounded-lg border-[none]"
                required
                placeholder="Name your task"
              />

              <div className="mb-6">
                <label className="block mt-4 mb-2 text-lg font-semibold">
                  Date
                </label>
                <input
                  type="date"
                  defaultValue="2025-02-09"
                  className="w-full p-2 bg-gray-800 rounded"
                  suppressHydrationWarning
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  notify();
                }}
                className="bg-darkRed text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-5 md:mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
              >
                Save
              </button>
            </form>
          </div>
          <div
            className={`form-container absolute h-3/4 translate-y-[45%] md:-translate-y-1/4 md:h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 sign-in w-full md:w-6/12 z-[2] left-0 ${
              active === 1 ? "translate-x-full" : ""
            }`}
          >
            <form className="bg-[#001427] flex items-center justify-center flex-col h-3/4 md:translate-y-1/4 md:h-full px-10 py-0">
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
                onClick={(e) => {
                  e.preventDefault();
                  notify();
                }}
                className="bg-darkRed mt-6 text-white text-xs border font-semibold tracking-[0.5px] uppercase cursor-pointer px-[45px] py-2.5 rounded-lg border-solid border-transparent"
              >
                Save
              </button>
            </form>
          </div>
          <div
            className={`toggle-container absolute w-full md:w-6/12 h-1/4 md:h-full overflow-hidden transition-all duration-[0.6s] ease-[ease-in-out] z-[1000] left-2/4 top-0 ${
              innerWidth > 767
                ? active === 1
                  ? "-translate-x-full rounded-[0_150px_100px_0]"
                  : "rounded-[150px_0_0_100px]"
                : "-translate-x-1/2 rounded-[30px_30px_0_0]"
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
                <h1 className="text-[2rem]">Remember!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 md:my-5">
                  Create new task and we will remind you to do them
                </p>
              </div>
              <div
                className={`toggle-panel absolute w-6/12 h-full flex items-center justify-center flex-col text-center transition-all duration-[0.6s] ease-[ease-in-out] px-[30px] py-0 top-0 right-0 toggle-right ${
                  active === 0 ? "translate-x-0" : "translate-x-[-200%]"
                }`}
              >
                <h1 className="text-[2rem]">Make Habits!</h1>
                <p className="text-lg leading-5 tracking-[0.3px] mx-0 md:my-5">
                  A good habit to start and end the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
