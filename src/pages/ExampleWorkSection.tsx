import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  import video1 from "../assets/videos/Before.mp4"
  import { useRef } from "react"
  
  const videoList = [video1, video1, video1, video1]
  
  export default function ExampleWorkSection() {
    // Create a ref array for all videos
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
    const handlePauseAll = () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause()
      })
    }
  
    return (
      <section className="flex flex-col gap-8 py-20 px-4 md:px-10 bg-[#F5F7FE]">
        {/* Header */}
        <div className="text-center w-full mx-auto mb-8">
          <h2 className="text-5xl font-bold text-dark mb-8 leading-tight">Examples of Our Work</h2>
          <p className=" mt-4 text-[16px] text-gray-900   max-w-xl mx-auto">
            
            Reliable video editing & marketing — without the drama. 
            Forget flaky freelancers and hidden fees. 
            Pay one flat monthly rate. No contracts. No surprises. Just results.
          </p>
        </div>
  
        {/* Carousel */}
        <div className="relative">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videoList.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/4"
                >
                  <div className="rounded-xl overflow-hidden ">
                    <div className="relative max-w-[90vh] bg-red-900 aspect-[9/16] max-h-[80vh] mx-auto">
                    <video
  ref={(el) => (videoRefs.current[index] = el)}
  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
  controls
  onPlay={() => {
    videoRefs.current.forEach((v, i) => {
      if (i !== index && v && !v.paused) {
        v.pause();
      }
    });
  }}
>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
  
            {/* Navigation */}
            <CarouselPrevious
              onMouseEnter={handlePauseAll}
              className="bg-black absolute left-15 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-gray-100"
            />
            <CarouselNext
              onMouseEnter={handlePauseAll}
              className="absolute right-15 top-1/2 z-10 -translate-y-1/2 bg-white text-black hover:bg-gray-100"
            />
          </Carousel>
        </div>
      </section>
    )
  }
  