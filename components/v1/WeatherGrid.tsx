import React from 'react'
import WeatherCard from '../WeatherCard'
import { getWeatherDetails, getWeatherForecast } from '@/api/api';
import { ForecastResponse } from '@/types/forecast';
import { Sun } from 'lucide-react';
import { getRelativeWeekday, getWeatherIconUrl } from '@/lib/utils';
import Image from 'next/image';


const WeatherGrid = async ({ currentCity }: { currentCity: string }) => {


    const WeatherDetails = await getWeatherDetails(currentCity);
    const ForecastDetails = await getWeatherForecast(currentCity);

    return (
        <div>
            <div className={`grid gap-5 max-md:flex-col grid-cols-4 max-md:grid-cols-1 max-xl:grid-cols-2 w-full h-full max-h-[500px]`}>
                <WeatherCard
                    currentCity={currentCity}
                    extraClasses='bg-gradient-to-b from-white/10 to-white/20 backdrop-blur-md shadow-lg shadow-black/20 max-lg:col-span-2 h-full'
                    children={
                        <div className={`flex items-center justify-between gap-5 w-full h-full`}>
                            <div className={`gap-5 flex flex-col max-md:w-full`}>
                                <div className={`flex gap-1 items-end`}>
                                    <h1 className={`text-3xl font-semibold`}>{WeatherDetails.location.name}</h1>
                                    <p className={`text-lg text-black/60`}>{WeatherDetails.location.country}</p>
                                </div>

                                <h2 className={`text-8xl font-bold lg:text-white max-lg:bg-gradient-to-r max-lg:from-primary max-lg:to-danger max-lg:bg-clip-text max-lg:text-transparent`}>{Math.round(WeatherDetails.current.temp_c)}°C</h2>
                                <p className={`text-xl text-black/60`}>Feels like {Math.round(WeatherDetails.current.feelslike_c)}°C</p>

                            </div>
                            {/* //Fix for 1280 - 1800px */}
                            <div className={`flex items-center justify-center w-1/2 max-sm:hidden max-[1800px]:min-[1200px]:hidden`}>
                                <Image
                                    src={getWeatherIconUrl(WeatherDetails.current.condition.icon)}
                                    alt={WeatherDetails.current.condition.text}
                                    width={100}
                                    height={100}
                                    className={`w-24 h-24`}
                                />
                            </div>
                        </div>
                    } />


                <WeatherCard
                    currentCity={currentCity}
                    extraClasses='h-full px-4 bg-transparent backdrop-blur-none shadow-none p-0 max-lg:col-span-2 col-span-3'
                    children={
                        <div className={`bg-gradient-to-b from-white/10 p-5 to-white/20 backdrop-blur-md shadow-lg shadow-black/20 md:col-span-2 flex flex-col justify-center items-center h-full w-full rounded-2xl`}>
                            <div className={`gap-5 flex flex-col w-full`}>
                                <div className={`flex gap-1 w-full`}>
                                    <h1 className={`text-3xl font-semibold`}>Weather Forecast</h1>
                                </div>

                                <div className={`grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 w-full h-full items-center justify-center rounded-2xl`}>

                                    {ForecastDetails.forecast.forecastday.map((day, index) => (
                                        <div key={index}  className={`bg-white/10 backdrop-blur-md p-5 rounded-lg shadow-lg w-full xl:aspect-square h-full flex justify-between`}>
                                            <div className="flex flex-col">
                                                <h3 className="text-lg font-semibold min-xl:text-2xl">{getRelativeWeekday(new Date(day.date))}</h3>
                                                <p className="text-md min-xl:text-xl">{day.day.condition.text}</p>
                                                <p className="text-md min-xl:text-xl">{Math.round(day.day.maxtemp_c)}°C / {Math.round(day.day.mintemp_c)}°C</p>

                                                {/* 1482 - 1280 hidden */}

                                            </div>

                                            <div className={`min-md:absolute min-md:bottom-2 right-2 flex items-center justify-center aspect-square`}>
                                                <Image
                                                    src={getWeatherIconUrl(day.day.condition.icon)}
                                                    alt={day.day.condition.text}
                                                    width={100}
                                                    height={100}
                                                    className={`w-20 h-20`}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    } />
            </div>
        </div>
    )
}

export default WeatherGrid