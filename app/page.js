"use client";

import Image from "next/image";
import Typed from 'typed.js';
import React,{useRef, useEffect} from 'react';


    const HeroSection = () => {


      const el = useRef(null);

      useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['Coding', 'Web development','App development','DSA','Competitive Programming','Digital Marketing',],
            typeSpeed: 50,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
      return (
        <main>
          <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
            <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
              <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
                A <span className="font-semibold">free repository</span> for community
                <br className="hidden lg:block" /> components using{" "}
                <span className="font-semibold underline decoration-primary">
                <span ref={el} />
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Open source Tailwind UI components and templates to
                <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
              </p>
              <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
                <form
                  action="https://www.creative-tim.com/twcomponents/search"
                  className="flex flex-wrap justify-between md:flex-row"
                >
                  <input
                    type="search"
                    name="query"
                    placeholder="Search Components"
                    required
                    className="flex-1 z-10 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
              <img
                src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                alt="tailwind css components"
                className="w-full h-full max-w-md mx-auto"
              />
            </div>
          </section>

          <section className="py-16 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
      Choose Your Plan
    </h2>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
      Choose the best plan that suits your blogging needs. Whether you are starting out or need advanced features, we have the perfect plan for you.
    </p>

    <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {/* Basic Plan */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 hover:scale-90 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Basic Plan
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Perfect for new bloggers looking to start their journey.
        </p>
        <div className="mt-6">
          <span className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            $9
          </span>
          <span className="text-lg text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul className="mt-6 space-y-4 text-left text-gray-600 dark:text-gray-300">
          <li>1 Blog</li>
          <li>Basic Customization</li>
          <li>Standard Support</li>
          <li>Priority Support</li>

          <li>24/7 Support</li>

        </ul>
        <button className="mt-6 w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Choose plan
        </button>
      </div>

      {/* Standard Plan - Bestseller */}
      <div className="bg-white dark:bg-gray-800   dark:border-gray-700 rounded-lg shadow-lg p-6 hover:scale-90 transition-transform duration-300 border-3 border-blue-600">
        {/* Bestseller Badge */}
   


        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Standard Plan
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Ideal for growing blogs with more customization and content features.
        </p>
        <div className="mt-6">
          <span className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            $29
          </span>
          <span className="text-lg text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul className="mt-6 space-y-4 text-left text-gray-600 dark:text-gray-300">
          <li>5 Blogs</li>
          <li>Advanced Customization</li>
          <li>Blog Analytics</li>
          <li>Priority Support</li>
          <li>24/7 Support</li>

        </ul>
        <button className="mt-6 w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Choose plan
         
        </button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 hover:scale-90 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Premium Plan
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          For experienced bloggers or businesses looking for the full suite of features.
        </p>
        <div className="mt-6">
          <span className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            $59
          </span>
          <span className="text-lg text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul className="mt-6 space-y-4 text-left text-gray-600 dark:text-gray-300">
          <li>Unlimited Blogs</li>
          <li>Full Customization</li>
          <li>Advanced Analytics</li>
          <li>Monetization Features</li>
          <li>24/7 Support</li>
        </ul>
        <button className="mt-6 w-full py-2 px-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Choose plan
    
        </button>
      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-100 dark:bg-gray-950 dark:text-white">
  <div className="container mx-auto px-4 text-center md:text-left">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
      <div className="w-full md:w-1/2 animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl md:text-4xl font-bold  leading-tight mb-4 ">Transform Your Business Today</h2>
        <p className="text-lg  mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Unlock the power of modern solutions designed to elevate your business to the next level. Let us get started!
        </p>
        <a href="#contact" className="inline-block text-white bg-blue-600  px-8 py-3 rounded-lg shadow-md transform   transition-all duration-300 hover:scale-105 hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-3s ">
          Get Started
        </a>
      </div>
      <div className="w-full md:w-1/2 animate__animated animate__fadeIn animate__delay-2s ">
        <img src="https://cdn.prod.website-files.com/65bb7884c67879aa0d84f24e/65c0eb6c2af54f6df960d5fb_Blogging-for-Business-7-Benefits-You-Need-To-Know.jpeg" alt="Business Image" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
</section>

<section className="py-10 dark:bg-gray-900 bg-slate-50">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Top Blogs</h2>

    <h4 className="text-xl font-normal text-center mb-6 dark:text-white">Check out our most popular blogpost</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Blog Card 1 */}
      <div className="bg-white dark:bg-gray-800  p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="/Typescript.webp" alt="Blog Title 1" className="w-full h-56 object-cover rounded-t-lg" />
        <h3 className="text-xl font-semibold mt-3 text-gray-800 dark:text-white truncate">Smart Blog Title 1 with Long Name</h3>
        <p className="text-gray-600 darK:text-gray-200 text-sm mt-2">A brief description of Typescript Explore insights and tips on growing your Knowledge about typescript.</p>
        <a href="link-to-blog1.html" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">Read More</a>
      </div>
      {/* Blog Card 2 */}
      <div className="bg-white dark:bg-gray-800  p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="/Next.webp" alt="Blog Title 2" className="w-full h-56 object-cover rounded-t-lg" />
        <h3 className="text-xl font-semibold mt-3 text-gray-800 dark:text-white truncate">Engaging and Smart Blog Post</h3>
        <p className="text-gray-600 darK:text-gray-200 text-sm mt-2">A brief description of Nextjs Discover creative ways to boost engagement with your audience.</p>
        <a href="link-to-blog2.html" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">Read More</a>
      </div>
      {/* Blog Card 3 */}
      <div className="bg-white dark:bg-gray-800  p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="/React.webp" alt="Blog Title 3" className="w-full h-56 object-cover rounded-t-lg" />
        <h3 className="text-xl font-semibold mt-3 text-gray-800 dark:text-white truncate">How to Stay Updated with the Latest Trends</h3>
        <p className="text-gray-600 darK:text-gray-200 text-sm mt-2">A brief description of Reactjs Learn how to keep up with the ever-changing blogosphere related to react.</p>
        <a href="link-to-blog3.html" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">Read More</a>
      </div>
    </div>
  </div>
</section>




        </main>
      );
    };
    
    export default HeroSection;
    
 