import { links } from "@/lib/constants/Navbar";
import { FloatingDock } from "./floating-dock";

const Dock = () => {
  return (
    <div className="flex items-center mt-5 w-fit self-center justify-center bg-transparent sticky bottom-0 z-[111111]">
      <FloatingDock
        items={links}
      />
    </div>
  );
};

export default Dock;
