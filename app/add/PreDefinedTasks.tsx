import { HoverEffect } from "@/components/ui/card-hover-effect.tsx";
import { pre_defined } from "../../lib/constants/Pre-Defined";

const PreDefinedTasks = () => {
  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center font-bold text-[2rem]">OR CHOOSE FROM</h1>
        <HoverEffect items={pre_defined} />
      </div>
    </section>
  );
};

export default PreDefinedTasks;
