import PricingPlans from "@/components/app-component/PricingCard";
import { GrGallery } from "react-icons/gr";


export default function PricingSection() {
  return (
    <section className="flex flex-col gap-8 py-20 px-4 md:px-10 bg-white">
    {/* Header */}
    <div className="text-center w-full mx-auto mb-8">
      <h2 className="text-4xl font-bold text-dark mb-8 leading-tight">All Services</h2>
      <p className=" mt-4 text-[16px] text-gray-900   max-w-xl mx-auto">
        
        Reliable video editing & marketing — without the drama. 
        Forget flaky freelancers and hidden fees. 
        Pay one flat monthly rate. No contracts. No surprises. Just results.
      </p>
    </div>
    <PricingPlans/>

  <div className="bg-red-600 felx ">
    <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
        <GrGallery />
        <p className="p-1 bg-gray-600 text-black rounded-sm">SOCIAL MEDIA</p>

        </div>

    </div>



  </div>
    </section>
  )
}
