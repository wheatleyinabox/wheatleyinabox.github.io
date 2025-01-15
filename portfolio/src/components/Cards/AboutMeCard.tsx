import { IconSquare } from "../IconSquare";
import SelfImage from "./../../assets/images/itsme.jpg";
import { profile } from "./../../info.ts"

export const AboutMeCard = () => {
  return (
    <div className="flex flex-col gap-y-4 bg-surfacePrimary shadow-md p-l">
      <img
        className="object-cover object-[center_center] w-full h-[200px] rounded"
        src={SelfImage}
        alt="Image"
      />
      <h2 className="font-bold text-headLine2">{profile.name}</h2>
      <p className="text-paragraph text-textSecondary">{profile.role}<br />{profile.location}</p>
      <div className="flex flex-row flex-wrap justify-between">
        <IconSquare
          icon="github"
          href={profile.links.github}
          className="stroke-iconColorPrimary"
        />
        <IconSquare
          icon="email"
          href={profile.links.email}
          className="stroke-iconColorPrimary"
        />
        <IconSquare
          icon="linkedin"
          href={profile.links.linkedin}
          className="stroke-iconColorPrimary"
        />
        <IconSquare
          icon="resume"
          href={profile.links.resume}
          className="stroke-iconColorPrimary"
        />
      </div>
    </div>
  );
};
