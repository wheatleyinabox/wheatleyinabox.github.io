import { AboutMeCard } from "./components/Cards/AboutMeCard";
import { BioDescCard } from "./components/Cards/BioDescCard";
import { SkillsCard } from "./components/Cards/SkillsCard";

function App() {
  return (
    <>
      <div className="bg-surfacePrimary text-textPrimary font-B612 p-xl">

        <div className="flex flex-col p-s">

          <div className="flex flex-row gap-x-5">
            <AboutMeCard/>
            <div className="flex flex-col gap-y-5 h-full">
                <BioDescCard/>
                <SkillsCard/>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
