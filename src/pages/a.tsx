<div className="flex flex-col text-center items-center justify-center mx-auto px-4 max-w-full">
          <div className="mt-6 px-6 py-1 shadow-lg rounded-full bg-white">
            <p className="text-[13px] uppercase font-[600] tracking-wider">
              Top 1% of global creative talent
            </p>
          </div>

          <div className="mt-4 w-full"> {/* Ensures full width for the heading */}
            <h1 className="text-3xl font-inter font-[700] leading-tight">
              Expert social media management from <br />
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

            <div className="mt-5 px-4 py-3 bg-primary rounded-lg cursor-pointer">
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

          <div className="mt-6 w-full"> {/* Ensures full width for the images section */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <img src={img1} className="rounded-lg h-[150px]" alt="" />
                <img src={img1} className="rounded-lg h-[150px]" alt="" />
              </div>
              <div className="row-span-2 bg-red-500 flex items-center justify-center h-[310px] rounded-lg">
                image-3
              </div>
            </div>
          </div>
        </div>