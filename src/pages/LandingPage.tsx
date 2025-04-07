import icon from '../assets/icons/blue-tick-icon.svg'
import NavBar from './NavBar'
import video1 from "../assets/videos/After.mp4"
import crossicon from '../assets/icons/icons8-cross.svg'

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="home-bg min-h-screen bg-no-repeat bg-cover pt-32 pb-32">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-center xl:text-left max-w-xl">
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Expert social media management from only $99/mo
            </h1>

            <ul className="flex flex-col gap-2 mt-6 text-left">
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                <span className="font-bold">Premium</span> content with your branding
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                <span className="font-bold">80% cheaper</span> than alternatives
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                Made by real people – <span className="font-bold">not AI</span>
              </li>
            </ul>

            <div className="mt-6">
              <div className="inline-block bg-blue-700 px-6 py-3 rounded-lg cursor-pointer">
                <p className="text-white text-[16px] font-medium">
                  Schedule a free demo call
                </p>
              </div>
              <p className="text-[16px] text-gray-400 mt-3">
                Trusted by <span className="text-dark font-bold">12,000+</span> businesses. Cancel anytime.
              </p>
            </div>
          </div>

          {/* Right Videos */}
          <div className="grid grid-cols-2 gap-4   w-full mb-40">
            {/* Video 1 */}
            <div className="relative flex flex-col items-start  rounded-xl  h-[50vh]   ">
              <video className="w-auto rounded-xl h-[60vh] " controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="absolute -top-4 left-10 mt-2 text-[18px] font-medium tracking-wider bg-amber-400 px-4 py-1 rounded-lg text-white">Before</p>       
              <ul className="mt-4 space-y-2 text-sm text-left text-gray-700">
  <li className="flex items-start gap-2">
    <img src={crossicon} alt="cross icon" className="w-4 h-4 mt-[2px]" />
    <span>Inconsistent branding </span>
  </li>
  <li className="flex items-start gap-2">
  <img src={crossicon} alt="cross icon" className="w-4 h-4 mt-[2px]" />
  <span>lacking uniqueness</span>
  </li>
  <li className="flex items-start gap-2">
  <img src={crossicon} alt="cross icon" className="w-4 h-4 mt-[2px]" />
  <span>Repetitive content formats</span>
  </li>
  <li className="flex items-start gap-2">
  <img src={crossicon} alt="cross icon" className="w-4 h-4 mt-[2px]" />
  <span>poor viewer retention</span>
  </li>
</ul>

                   </div>

            {/* Video 2 */}
            <div className="relative flex flex-col items-center md:items-start h-[50vh]">
              <video className="w-auto h-[60vh] rounded-xl" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="absolute -top-4 left-5 mt-2 text-[18px] font-medium tracking-wider bg-blue-700 px-4 py-1 rounded-lg text-white">After</p>
              <ul className="mt-4 space-y-2 text-[14px] text-left text-gray-700">
  <li className="flex items-start gap-2">
    <img src={icon} alt="" className="w-[16px] h-[16px] mt-1" />
    <span>consistent brand visuals</span>
  </li>
  <li className="flex items-start gap-2">
  <img src={icon} alt="" className="w-[16px] h-[16px] mt-1" />    <span>Custom-edited creativity</span>
  </li>
  <li className="flex items-start gap-2">
  <img src={icon} alt="" className="w-[16px] h-[16px] mt-1" />    <span>dynamic video formats</span>
  </li>
  <li className="flex items-start gap-2">
  <img src={icon} alt="" className="w-[16px] h-[16px] mt-1" />    <span>Strategic storytelling </span>
  </li>
</ul>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
