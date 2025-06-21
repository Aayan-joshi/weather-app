
import Image from "next/image";

import WeatherGrid from "@/components/v2/WeatherGridv2";
import WeatherCard from "@/components/WeatherCard";
import DigitalClock from "@/components/DigitalClock";
import Sidebar from "@/components/Navigation/Sidebar";



export default async function Home() {
  const currentCity = "Arlington TX";
  // const timezone = "Asia/Kathmandu";
  const timezone = "US/Central";

  return (
    <section className={`h-[100vh] w-full bg-blue-400 flex overflow-y-scroll overflow-x-clip px-4`}>


      <div className="flex flex-col h-full w-full text-black ">
             <div>
                <h1 className={`text-6xl py-8 max-md:text-right max-md:text-4xl text-wrap`}>Hello <span className={`font-semibold text-accent max-md:text-4xl text-wrap`}>{currentCity}</span></h1>
             </div>

            <WeatherGrid currentCity={currentCity} timezone={timezone} />



            

            {/* <WeatherCard
              currentCity={currentCity}
              extraClasses='h-fit w-fit bg-gradient-to-b from-white/10 to-white/20 backdrop-blur-md shadow-lg shadow-black/20 absolute xl:top-10 right-10 max-lg:bottom-10'
              children={
                <DigitalClock timezone={timezone}/>
              }
              /> */}

            <Sidebar />

       

      </div>
    </section>
  )
}