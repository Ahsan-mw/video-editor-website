import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  const pricingData = [
    {
      icon: "/icons/social.png",
      tag: "SOCIAL MEDIA",
      title: "Social Media Posts",
      description: "Branded social media content created & posted monthly to your channels.",
      price: "$99",
      options: [
        "10 posts - $99/mo",
        "20 posts - $179/mo",
        "30 posts - $249/mo",
      ],
    },
    {
      icon: "/icons/video.png",
      tag: "SOCIAL MEDIA",
      title: "Short-Form Videos",
      description: "Simple 15–60 second videos for TikTok, Reels, and Shorts.",
      price: "$99",
      options: [
        "4 videos - $99/mo",
        "8 videos - $179/mo",
        "12 videos - $249/mo",
      ],
    },
    {
      icon: "/icons/email.png",
      tag: "EMAIL MARKETING",
      title: "Email Design",
      description: "Custom emails for your campaigns & flows. Works with any email platform.",
      price: "$149",
      options: [
        "2 emails - $149/mo",
        "4 emails - $249/mo",
        "6 emails - $329/mo",
      ],
    },
  ];
export default function PricingCard() {
  return (
   
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto ">
    <Carousel>
   <CarouselContent>
     {
        pricingData.map((item,index)=>(
            <CarouselItem key={index} className="w-full  md:basis-1/2 lg:basis-1/3">
                 <div className="border rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between h-full">
                  <div>
                   <div className="flex justify-between items-center">
                   <div className="bg-gray-100 p-2 rounded-md w-fit mb-3">
                      <img src={item.icon} alt={`${item.title} Icon`} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                   </div>
                    <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    <p className="text-3xl font-bold mt-4">{item.price}</p>
                    <p className="text-sm text-gray-500">Pricing from</p>
                    <select className="w-full mt-4 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {item.options.map((option, i) => (
                        <option key={i}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition">
                      Checkout →
                    </button>
                    <div className="text-center mt-2">
                      <button className="text-sm text-blue-600 hover:underline">
                        Learn more ℹ️
                      </button>
                    </div>
                  </div>
                </div>
            </CarouselItem>
        ))
     }
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
 </Carousel>
 
    </div>

  </section>
  )
}
