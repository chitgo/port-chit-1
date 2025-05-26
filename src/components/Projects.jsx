import { useRef } from "react";

import blogProject from "../assets/chit-blog-screen.webp";
import ecomProject from "../assets/chit-ecom-screen.webp";
import cocktailsProject from "../assets/chit-cocktails-screen.webp";
import recipieProject from "../assets/recipie-finder-screen.webp";
import weatherProject from "../assets/weather-app-screen.webp";

function Projects() {
  return (
    <section
      className="px-4 py-8 text-center sm:px-8 md:px-12 lg:px-20 2xl:px-40 text-secondary"
      id="projects"
    >
      <h1 className="mt-8 text-2xl font-bold text-blue-500 uppercase">
        Featured Projects
      </h1>
      <p className="mt-2 mb-12 font-semibold">Here are some of my projects</p>

      <div className="space-y-8">
        {/* Project 1 */}
        <div className="grid place-items-center">
          <div className="grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl">
            <div className="flex justify-center">
              <img
                src={blogProject}
                alt="blog-project"
                className="w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col items-center px-6 space-y-4">
              <h2 className="text-xl font-semibold">Blog Website</h2>
              <p className="max-w-md">
                A dynamic blog platform enabling users to create, edit, and
                manage posts with a responsive UI. Features user authentication
                via Firebase and a dark/light mode toggle for enhanced
                usability.
              </p>

              <p className="w-full pb-2 font-semibold capitalize border-b-2 ">
                Project Info
              </p>
              <p className="w-full pb-2 border-b-2">
                Technologies : React.js, TailwindCSS, Firebase
              </p>
              <div className="flex gap-4">
                <a
                  href="https://chit-blog.web.app/"
                  target="_blank"
                  className="px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/chitgo/chit-blog"
                  target="_blank"
                  className="px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid place-items-center">
          <div className="grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl">
            <div className="flex justify-center">
              <img
                src={recipieProject}
                alt="recipie-project"
                className="w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center order-last px-6 space-y-4 md:order-first">
              <h2 className="text-xl font-semibold">Recipe Finder</h2>
              <p className="max-w-md">
                A user-friendly recipe discovery app with intuitive search and
                browsing features. Built with React and Redux for state
                management, integrating the Edamam API for real-time recipe
                data.
              </p>

              <p className="w-full pb-2 font-semibold capitalize border-b-2 ">
                Project Info
              </p>
              <p className="w-full pb-2 border-b-2">
                Technologies: React.js, TailwindCSS, Redux, Edamam Api
              </p>
              <div className="flex gap-4">
                <a
                  href="https://recipie-finder-chit.vercel.app/"
                  target="_blank"
                  className="px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/chitgo/recipie-finder"
                  target="_blank"
                  className="px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="grid place-items-center">
          <div className="grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl">
            <div className="flex justify-center">
              <img
                src={ecomProject}
                alt="ecom-project"
                className="w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center order-last px-6 space-y-4 ">
              <h2 className="text-xl font-semibold">Simple E-commerce Shop</h2>
              <p className="max-w-md">
                A responsive e-commerce platform for browsing and filtering
                products by category, price, or name. Features a clean UI with
                detailed product views, built with React and TailwindCSS.
              </p>

              <p className="w-full pb-2 font-semibold capitalize border-b-2">
                Project Info
              </p>
              <p className="w-full pb-2 border-b-2">
                Technologies: React.js, TailwindCSS
              </p>
              <div className="flex gap-4">
                <a
                  href="https://chitgo.github.io/ecom-chit/"
                  target="_blank"
                  className="px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/chitgo/ecom-chit"
                  target="_blank"
                  className="px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="grid place-items-center">
          <div className="grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl">
            <div className="flex justify-center">
              <img
                src={cocktailsProject}
                alt="cocktails-project"
                className="w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center px-6 space-y-4 md:order-first">
              <h2 className="text-xl font-semibold">Cocktail Explorer</h2>
              <p className="max-w-md">
                An interactive cocktail discovery app with search and detailed
                recipe views. Integrates TheCocktailDB API for dynamic content,
                styled with a responsive UI using TailwindCSS.
              </p>

              <p className="w-full pb-2 font-semibold capitalize border-b-2 ">
                Project Info
              </p>
              <p className="w-full pb-2 border-b-2">
                Technologies: React.js, TailwindCSS, TheCocktailDB API
              </p>
              <div className="flex gap-4">
                <a
                  href="https://chitgo.github.io/chit-cocktails/"
                  target="_blank"
                  className="px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/chitgo/chit-cocktails"
                  target="_blank"
                  className="px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="grid place-items-center">
          <div className="grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl">
            <div className="flex justify-center">
              <img
                src={weatherProject}
                alt="weather-project"
                className="w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center order-last px-6 space-y-4 ">
              <h2 className="text-xl font-semibold">Weather App</h2>
              <p className="max-w-md">
                A sleek weather app delivering real-time forecasts and
                interactive maps via Leaflet. Integrates the OpenWeather API for
                accurate data, with a responsive design using React and
                TailwindCSS.
              </p>

              <p className="w-full pb-2 font-semibold capitalize border-b-2">
                Project Info
              </p>
              <p className="w-full pb-2 border-b-2">
                Technologies: React.js, TailwindCSS, Leaflet, OpenWeather API
              </p>
              <div className="flex gap-4">
                <a
                  href="https://chitgo.github.io/weather-app/"
                  target="_blank"
                  className="px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/chitgo/weather-app"
                  target="_blank"
                  className="px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
