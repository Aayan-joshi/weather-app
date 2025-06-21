import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react';

const Sidebar = () => {
    const MenuLinkClassNames = "w-full bg-transparent outline-none shadow-none items-center flex justify-start text-black hover:bg-gray-100 transition-colors duration-100 ease-in-out";


    return (
        <Sheet>
            <SheetTrigger className={`absolute top-10 right-10 z-50 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in-out`}>
                <Menu />
            </SheetTrigger>
            <SheetContent className={``}>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className={`flex flex-col gap-4 my-4`}>

                            <Button className={MenuLinkClassNames}>Home</Button>
                            <Button className={MenuLinkClassNames}>About</Button>
                            <Button className={MenuLinkClassNames}>Services</Button>
                            <Button className={MenuLinkClassNames}>Contact</Button>

                    </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                    <Button className={MenuLinkClassNames}>Change Region 🌐</Button>
                    <Button className={MenuLinkClassNames}>Logout</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar