import { IconSquare } from "../IconSquare"
import SelfImage from "./../../assets/images/itsme.jpg"

export const AboutMeCard = () => {
  return (
    <div className="flex flex-col gap-y-4 bg-surfacePrimary shadow-md p-l">
        <img className="object-cover object-[center_center] w-full h-[200px] rounded" src={SelfImage} alt="Image" />
        <h2 className="font-bold text-headLine2">Valen DeLeon</h2>
        <p className="text-paragraph text-textSecondary">Frontend Developer <br/> Riverside, CA</p>
        <div className="flex flex-row flex-wrap justify-between">
            <IconSquare
              icon="github"
              href="https://github.com/wheatleyinabox"
              className="stroke-iconColorPrimary"
            />
            <IconSquare
              icon="email"
              href="mailto:valeriedeleon4521@gmail.com"
              className="stroke-iconColorPrimary"
            />
            <IconSquare
              icon="linkedin"
              href="https://www.linkedin.com/in/vdeleon-ca/"
              className="stroke-iconColorPrimary"
            />
            <IconSquare
              icon="resume"
              href="https://github.com/wheatleyinabox/portfolio/raw/main/PDF/Valen-DeLeon-Resume.pdf"
              className="stroke-iconColorPrimary"
            />
        </div>
    </div>
  )
}
