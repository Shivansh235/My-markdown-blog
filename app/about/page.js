import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/my-photo1.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                <p>
                  Hello, I am Shivansh Kasaudhan, a second-year B.Tech student
                  at the Indian Institute of Information Technology (IIIT)
                  Ranchi, specializing in Electronics and Communication
                  Engineering (ECE).
                </p>
                <p>
                  I am deeply passionate about coding and programming. Over
                  time, I have honed my skills and currently work as a
                  full-stack developer specializing in the MERN stack.
                  Additionally, I have proficiency in programming languages such
                  as C, C++, and Python.
                </p>
                <p>
                  My ultimate goal is to evolve into a highly skilled developer,
                  whether in web, app, or game development. I am committed to
                  continuous learning and self-improvement, ensuring that by the
                  end of my B.Tech journey, I will have established myself as an
                  expert in my field.
                  Let us explore the world of coding together!
                </p>
              </p>
          
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
             Shivansh journey as a coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to fullstack developer, here is how Shivansh
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/processed_image.jpg"
                  alt="Harry as a beginner"
                  className="w-[50vh] h-[50vh] rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                My coding journey began in my first year of college, driven by my curiosity to build websites, apps, and solve coding problems. However, my true developer journey started in my second year when I delved into web development and began building projects. Along the way, I encountered numerous challenges, but I made a promise to myself—to become a full-stack developer. This motivation fuels my determination and gives me the courage to keep pushing forward.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img
                  src="/diving.webp"
                  alt="Harry learning new skills"
                  className=" w-[50vh] h-[50vh] rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                As I dive deeper into the world of development, I have mastered various technologies, including React, Next.js, Node.js, Express, and databases like MongoDB. Additionally, I have a strong foundation in frontend technologies such as HTML, CSS, and JavaScript. Beyond web development, I am eager to explore mobile app development and deepen my knowledge of Data Structures and Algorithms (DSA) to enhance my problem-solving skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/challenge.webp"
                  alt="Harry working on a big project"
                  className="w-[50vh] h-[50vh] rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Sometimes, the journey felt overwhelming. There were moments when I doubted myself, feeling like I was forgetting what I had learned or struggling to implement concepts. For instance, when I first encountered React hooks, I was baffled and unsure how to use them effectively. But I persevered, kept learning, and practiced consistently. Over time, I became comfortable using hooks in my projects. This journey has taught me that hard work and persistence always pay off, and every challenge is an opportunity to grow.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img
                  src="/oppotunity.webp"
                  alt="Harry mentoring others"
                  className="w-[50vh] h-[50vh] rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                 Finding opportunities
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Now, I am ready to find opportunities in this field. I have built several important projects and my portfolio website, which have been instrumental in helping me secure internships and create an impressive resume. Additionally, I have starting to taking on freelance projects, further enhancing my skills and experience in web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
