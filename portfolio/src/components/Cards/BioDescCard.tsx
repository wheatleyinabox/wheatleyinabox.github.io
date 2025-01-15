import Keyboard from './../../assets/images/keyboard.jpg';
import { blurb } from "./../../info.ts"

// Not totally dynamic and it hurts me but from looking at my figam, I will be using a combination to make this work WAHHHHHHHHHH

export const BioDescCard = () => {
  return (
    <div className="flex flex-row flex-wrap gap-y-4 bg-surfacePrimary shadow-md">
        <div className='flex flex-col gap-5 p-xl w-[400px] justify-center'>
            <p className="text-paragraph">{blurb.bio}</p>
            <p className="text-paragraph">{blurb.description}</p>
        </div>
        <img
            className="object-cover w-[196.5px] h-auto"
            src={Keyboard}
            alt="Image"
        />
    </div>
  )
}
