
import Image from "next/image";

import WeatherGrid from "@/components/v1/WeatherGrid";
import WeatherCard from "@/components/WeatherCard";
import DigitalClock from "@/components/DigitalClock";

export default async function Home() {
  const currentCity = "Kathmandu";
  const timezone = "Asia/Kathmandu";

  return (
    <section className={`h-[100vh] w-full bg-transparent flex overflow-y-scroll overflow-x-clip px-4`}>

      <Image src={"/images/sunny.jpg"} alt="Sunny" fill className=" -z-10 object-cover object-right"/>


      <div className="flex flex-col h-full w-full text-black ">
             <div>
                <h1 className={`text-6xl py-8 max-md:text-right max-md:text-4xl text-wrap`}>Hello <span className={`font-semibold text-accent max-md:text-4xl text-wrap`}>{currentCity}</span></h1>
             </div>

            <WeatherGrid currentCity={currentCity} />

            <WeatherCard
              currentCity={currentCity}
              extraClasses='h-fit w-fit bg-gradient-to-b from-white/10 to-white/20 backdrop-blur-md shadow-lg shadow-black/20 absolute xl:top-10 right-10 max-lg:bottom-10'
              children={
                <DigitalClock timezone={timezone}/>
              }
              />
       

      </div>
    </section>
  )
}