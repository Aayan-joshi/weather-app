import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const WeatherCard = async ({currentCity, children, extraClasses}: {currentCity: string, children: ReactNode,  extraClasses?: string}) => {

  
  return (
    <section className={cn(`h-fit w-full bg-white/30 backdrop-blur-2xl rounded-2xl shadow-lg flex flex-col justify-center items-center p-5`, extraClasses)}>
        {children}
    </section>
  )
}

export default WeatherCard