import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'

const Sidebar = () => {
    const MenuLinkClassNames = "w-full bg-transparent outline-none shadow-none items-center flex justify-start text-black hover:bg-gray-100 transition-colors duration-100 ease-in-out";


    return (
        <Sheet>
            <SheetTrigger>
                <Button className={`absolute top-3 right-3 z-10`}>Sidebar</Button>
            </SheetTrigger>
            <SheetContent className={``}>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className={``}>
                        <div className={`flex flex-col gap-4`}>
                            <Button className={MenuLinkClassNames}>Home</Button>
                            <Button className={MenuLinkClassNames}>About</Button>
                            <Button className={MenuLinkClassNames}>Services</Button>
                            <Button className={MenuLinkClassNames}>Contact</Button>

                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar