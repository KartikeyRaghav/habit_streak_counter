import { useOutsideClick } from "@/lib/hooks/use-outside-click";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "../ui/Close-Icon";
import { habits } from "../../lib/constants/Habits";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconExclamationCircleFilled,
} from "@tabler/icons-react";
import { toast } from "react-toastify";

const Habits = () => {
  const [active, setActive] = useState<
    (typeof habits)[number] | boolean | null
  >(null);
  const id = useId();

  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

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

  const ref = useOutsideClick(() => setActive(null));
  return (
    <section id="habit" className="pt-10 md:pt-20 lg:px-32 px-5 md:px-20">
      <p className="lg:text-6xl xl:text-7xl md:text-5xl text-4xl text-center md:text-left mb-8 font-bold">
        Your Habits
      </p>
      <div>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] p-8 h-fit rounded-3xl flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center"
                  layoutId={`image-${active.title}-${id}`}
                >
                  <div className="md:mr-3">
                    {active.done ? (
                      <IconCircleCheckFilled
                        color="green"
                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top text-green-500"
                      />
                    ) : (
                      <IconExclamationCircleFilled
                        color="blue"
                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                      />
                    )}
                  </div>
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold mt-4 md:mt-0 text-[2rem] text-center md:text-left text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </motion.div>

                <div>
                  <div className="relative flex flex-col items-center justify-center">
                    <motion.div
                      layoutId={`repeat-${active.title}-${id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 text-[1.5rem] pb-5"
                    >
                      {active.repeat}
                    </motion.div>
                    <div className="flex justify-between items-start p-4">
                      <motion.button
                        layoutId={`button-${active.title}-${id}`}
                        onClick={() => {
                          if (!active.done) {
                            active.done = true;
                            setrefresh(!refresh);
                          }
                        }}
                        className={`px-4 py-3 text-md rounded-full tracking-wide font-bold ${
                          active.done ? "bg-green-500" : "bg-blue-900"
                        } text-white`}
                      >
                        {active.done ? "Done" : "Mark as Done"}
                      </motion.button>
                      <motion.button
                        layout
                        onClick={(e) => {
                          e.preventDefault();
                          notify();
                        }}
                        className={`px-4 py-3 text-md rounded-full tracking-wide font-bold ${
                          active.done ? "bg-green-500 cursor-not-allowed" : "bg-blue-900"
                        } text-white`}
                        disabled={active.done}
                      >
                        Skip
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-7xl mx-auto w-full gap-4">
          {habits.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col border-2 my-10 md:border-none md:my-0 md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 self-center flex-col md:flex-row items-center justify-center">
                <motion.div
                  className="flex items-center justify-center"
                  layoutId={`image-${card.title}-${id}`}
                >
                  {card.done ? (
                    <IconCircleCheckFilled
                      color="green"
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  ) : (
                    <IconExclamationCircleFilled
                      color="blue"
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  )}
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-[1.5rem] text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`repeat-${card.title}-${id}`}
                    className="mt-4 md:mt-0 text-[0.75rem] text-center md:text-left text-neutral-200"
                  >
                    {card.repeat}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className={`ml-0 md:ml-10 px-4 py-2 text-sm rounded-full font-bold tracking-wide hover:bg-gray-100 ${
                  card.done ? "bg-green text-white" : "text-red bg-white"
                } transition-colors hover:text-black mt-4 md:mt-0`}
              >
                {card.done ? "Done" : "Do"}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Habits;
