import { InfiniteSlider } from '../components/ui/infinite-slider'
import { ProgressiveBlur } from '../components/ui/progressive-blur'

export default function LogoCloud() {
  return (
    <section className="bg-[#060A13] overflow-hidden py-5">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          
          {/* Text Section */}
          <div className="w-full md:max-w-44 md:border-r md:pr-6">
            <p className="text-left text-2xl font-bold text-white md:text-left">
              12,000+
              <span className="block">Businesses trusted</span>
            </p>
          </div>

          {/* Slider Section */}
          <div className="relative w-full py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {[
                'nvidia',
                'column',
                'github',
                'nike',
                'lemonsqueezy',
                'laravel',
                'lilly',
                'openai',
              ].map((name) => (
                <div key={name} className="flex">
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src={`https://html.tailus.io/blocks/customers/${name}.svg`}
                    alt={`${name} Logo`}
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Blur Effects */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060A13]"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060A13]"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
