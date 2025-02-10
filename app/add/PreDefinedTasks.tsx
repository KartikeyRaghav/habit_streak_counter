import { HoverEffect } from "@/components/ui/card-hover-effect.tsx";
import { pre_defined } from "../../lib/constants/Pre-Defined";

const PreDefinedTasks = () => {
  return (
    <section className="mt-5">
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={pre_defined} />
      </div>
    </section>
  );
};

export default PreDefinedTasks;
