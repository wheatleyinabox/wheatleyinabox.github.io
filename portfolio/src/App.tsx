import { AboutMeCard } from "./components/Cards/AboutMeCard";
import { BioDescCard } from "./components/Cards/BioDescCard";
import { SkillsCard } from "./components/Cards/SkillsCard";

function App() {
  return (
    <>
      <div className="bg-surfacePrimary text-textPrimary font-B612 p-xl">

        <h1 className="text-headLine1 font-bold">Hello fellow Internet user! :D</h1>
        <h2 className="text-headLine2 font-bold">Welcome to Humble Beginnings!</h2>
        <p className="text-paragraph">
          This website is officially in the development stage!
        </p>

        <br/>

        <div className="flex flex-col p-s">

          <h3 className="text-headLine3 font-bold">Component Building...</h3>
          <h4 className="text-headLine4 font-bold">Cards</h4>

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
