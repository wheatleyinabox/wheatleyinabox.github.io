import { AboutMeCard } from "./components/Cards/AboutMeCard";

function App() {
  return (
    <>
      <div className="bg-surfacePrimary text-textPrimary font-B612 p-xl">

        <h1 className="text-headLine1 font-bold">Hello fellow Internet user! :D</h1>
        <h2 className="text-headLine2 font-bold">Welcome to Humble Beginnings!</h2>
        <p className="text-paragraph">
          Just testing basic Tailwind out and starting work on styling!<br/>This website is officially in the development stage!
        </p>

        <br/>

        <div className="flex flex-col p-s">
          <h3 className="text-headLine3 font-bold">Component Building...</h3>
          <h4 className="text-headLine4 font-bold">Blocks</h4>
          <h4 className="text-headLine4 font-bold">Cards</h4>
          <div className="flex flex-row">
            <AboutMeCard/>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
