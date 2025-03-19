"use client";
// components/Navbar.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { ModeToggle } from "../theme-btn";
import { useLoadingBar } from "react-top-loading-bar";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
  
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    setProgress(20);

    setTimeout(() => {
      setProgress(40)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 400);
    
  }, [pathname]);

  useEffect(() => {
   setTimeout(() => {
    setProgress(0)
   }, 50);
  }, []);

  

  return (
    <nav className="  p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
        <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container flex justify-between  items-center mx-auto">
        <Link href={"/"}>
          {" "}
          <div className="text-lg font-bold">ShivanshBlog</div>
        </Link>
     
        <ul
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } absolute md:static  w-full md:w-auto `}
        >
          <li className="py-2 md:py-0">
            <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/">Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/contactUs">Contact Us</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/blog">Blog</Link>
          </li>

          <li className="py-2 md:py-0">
            <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/about">About</Link>
          </li>
          <div className="space-x-2 flex items-center">
            <Button variant="outline">Log in</Button>
            <Button variant="outline">Sign up</Button>
            <ModeToggle />
          </div>
        </ul>

        <div className="md:hidden" onClick={toggleMenu}>
        <Sheet>
  <SheetTrigger>
  


      
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </SheetTrigger>

          <span className="mx-4">
          <ModeToggle />
          </span>
          <SheetContent>
    <SheetHeader>
      <SheetTitle className="font-bold mt-4 mx-auto">ShivanshBlog</SheetTitle>
      <SheetDescription className="flex flex-col items-center space-y-4"> 
      <ul
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } absolute md:static  w-full text-center md:w-auto`}
        >
          <li className="py-2 md:py-0">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/contactUs">Contact Us</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/blog">Blog</Link>
          </li>

          <li className="py-2 md:py-0">
            <Link href="/about">About</Link>
          </li>
          <div className="space-x-3">
            <Button className="text-xs" variant="outline">Log in</Button>
            <Button className="text-xs" variant="outline">Sign up</Button>
          </div>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
