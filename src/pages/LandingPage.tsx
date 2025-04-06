import icon from '../assets/icons/blue-tick-icon.svg'
import NavBar from './NavBar'

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="home-bg min-h-screen bg-no-repeat bg-cover pt-32">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-center xl:text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* Video 1 */}
            <div className="flex flex-col items-center">
              <video className="w-full rounded-lg" controls>
                <source src="path_to_video_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2">Video 1</p>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col items-center">
              <video className="w-full rounded-lg" controls>
                <source src="path_to_video_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2">Video 2</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
