import { IconSquare } from "../IconSquare"
import SelfImage from "./../../assets/keyboard.jpg"

export const AboutMeCard = () => {
  return (
    <div className="flex flex-wrap flex-col justify-between bg-surfacePrimary shadow-md p-l">
        <img className="object-fill rounded" src={SelfImage} alt="Image" />
        <h2 className="font-bold text-headLine2">Valen DeLeon</h2>
        <p className="text-paragraph text-textSecondary">Frontend Developer <br/> Riverside, CA</p>

        <div className="flex flex-row flex-wrap justify-between">
            <IconSquare/>
            <IconSquare/>
            <IconSquare/>
            <IconSquare/>
        </div>
    </div>
  )
}
