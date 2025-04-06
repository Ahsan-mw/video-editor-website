import icon from '../assets/icons/blue-tick-icon.svg'
import img1 from '../assets/images/img-1.webp'
import NavBar from './NavBar'

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="home-bg min-h-screen bg-no-repeat bg-cover pt-50">
        

<div className='flex flex-col xl:flex-row'>
<div className='flex flex-col items-center justify-center  container'>
       <div className=' px-3 text-center'>
   <div className='flex flex-col items-center gap-4'>
   <h1 className="text-5xl font-inter font-[700] leading-tight">
              Expert social media management from
              only $99/mo
            </h1>
            <ul className="flex flex-col space-y-2 mt-4 text-left">
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                <span className="font-bold">Premium</span> content with your
                branding
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                <span className="font-bold">80% cheaper</span> than alternatives
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="" className="w-5 h-5 mt-1" />
                Made by real people - <span className="font-bold">not AI</span>
              </li>
            </ul>
            <div className="mt-5 px-18 py-3 bg-blue-700 rounded-lg cursor-pointer">
              <p className="text-white text-[16px] font-[500]">
                Schedule a free demo call
              </p>
            </div>
            <div className="mt-3">
              <p className="text-[16px] text-gray-400">
                Trusted by <span className="text-dark font-bold">12,000+</span> businesses. Cancel anytime.
              </p>
            </div>
   </div>
       </div>
        </div>

        {/* Video Section */}
        <div className="flex flex-row justify-center gap-4 mt-8">
  {/* Video 1 */}
  <div className="flex flex-col items-center">
    <video className="w-[300px] h-[auto]" controls>
      <source src="path_to_video_1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Video 1</p>
  </div>

  {/* Video 2 */}
  <div className="flex flex-col items-center">
    <video className="w-[300px] h-[auto]" controls>
      <source src="path_to_video_2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Video 2</p>
  </div>
</div>
</div>

      </div>
    </>
  )
}


