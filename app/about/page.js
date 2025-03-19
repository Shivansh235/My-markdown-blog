"use client";

import { motion } from 'framer-motion';


export default function AboutPage() {



  

  return (
    <div className="h-[100vh] bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-6">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About This Blog
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Welcome to our Markdown-powered blog, where we share insights, ideas, and stories on various topics. 
        Built with Next.js and Markdown, this blog is designed for simplicity and readability.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full h-full">
        {[{
          title: 'Why Markdown?',
          description: 'Markdown allows writers to focus on content without worrying about formatting. It’s simple, flexible, and widely used.',
          image: '/R2.webp'
        }, {
          title: 'Next.js Powered',
          description: 'This blog is built using Next.js, ensuring fast performance, SEO optimization, and a great developer experience.',
          image: '/R1.webp'
        }, {
          title: 'Fully Responsive',
          description: 'Designed with Tailwind CSS, our blog adapts to any screen size for a seamless reading experience.',
          image: '/R3.webp'
        }].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center text-center h-[50vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-40 object-cover mb-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
