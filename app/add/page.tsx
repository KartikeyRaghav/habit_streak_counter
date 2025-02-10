import { ToastContainer } from "react-toastify";
import Dock from "@/components/ui/Dock";
import Footer from "@/components/sections/Footer";
import AddTask from "./AddTask";
import PreDefinedTasks from "./PreDefinedTasks";

const addHabit = () => {
  return (
    <section className="py-5 px-5 md:px-10 flex flex-col min-h-[100vh]">
      <h1 className="text-center text-[3rem] font-bold">Create New Habit</h1>
      <AddTask />
      <PreDefinedTasks />
      <Footer />
      <Dock />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default addHabit;
