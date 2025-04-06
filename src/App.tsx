import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-pink-500'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>

        <p className='text-black'>AHsan Mushtaq</p>
      </Button>
      <Carousel>
      <CarouselContent className="relative">
        <CarouselItem className="bg-blue-500 text-white flex items-center justify-center h-64">
          Item 1
        </CarouselItem>
        <CarouselItem className="bg-green-500 text-white flex items-center justify-center h-64">
          Item 2
        </CarouselItem>
        <CarouselItem className="bg-red-500 text-white flex items-center justify-center h-64">
          Item 3
        </CarouselItem>
      </CarouselContent>

      {/* Custom Previous Button */}
      <CarouselPrevious
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      />

      {/* Custom Next Button */}
      <CarouselNext
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      />
    </Carousel>

    </>
  )
}

export default App
