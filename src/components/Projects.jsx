import { useRef } from 'react'

import blogProject from '../assets/chit-blog-screen.webp'
import ecomProject from '../assets/chit-ecom-screen.webp'
import cocktailsProject from '../assets/chit-cocktails-screen.webp'
import kofeeProject from '../assets/chit-kofee-screen.webp'
import recipieProject from '../assets/recipie-finder-screen.webp'

function Projects() {
  return (
    <section
      className='px-4 py-8 text-center sm:px-8 md:px-12 lg:px-20 2xl:px-40 text-secondary'
      id='projects'
    >
      <h1 className='mt-8 text-2xl font-bold text-blue-500 uppercase'>
        Featured Projects
      </h1>
      <p className='mt-2 mb-12 font-semibold'>Here are some of my projects</p>

      <div className='space-y-8'>
        {/* Project 1 */}
        <div className='grid place-items-center'>
          <div className='grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl'>
            <div className='flex justify-center'>
              <img
                src={blogProject}
                alt='blog-project'
                className='w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer transition-transform duration-300'
              />
            </div>

            <div className='flex flex-col items-center px-6 space-y-4'>
              <h2 className='text-xl font-semibold'>Blog Website</h2>
              <p className='max-w-md'>
                This web application empowers users to engage with a
                comprehensive suite of blog management features. Users can
                seamlessly read, create, edit, and delete blog posts. They have
                the option to register for an account to unlock the ability to
                create their own posts or log in if they're existing users.
                Additionally, the application offers a convenient toggle option
                for switching between dark and light modes to enhance the
                reading experience.
              </p>

              <p className='w-full pb-2 capitalize border-b-2'>Project Info</p>
              <p className='w-full pb-2 border-b-2'>
                Technologies : React.js, TailwindCSS, Firebase
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://chit-blog.web.app/'
                  target='_blank'
                  className='px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent'
                >
                  Live Demo
                </a>
                <a
                  href='https://github.com/chitgo/chit-blog'
                  target='_blank'
                  className='px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='grid place-items-center'>
          <div className='grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl'>
            <div className='flex justify-center'>
              <img
                src={recipieProject}
                alt='recipie-project'
                className='w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer'
              />
            </div>
            <div className='flex flex-col items-center order-last px-6 space-y-4 md:order-first'>
              <h2 className='text-xl font-semibold'>Recipie Finder</h2>
              <p className='max-w-md'>
                The Recipie Finder is a user-friendly web app designed to
                simplify the discovery and exploration of food recipes.
                Featuring intuitive search functionality, users can effortlessly
                find recipes, explore cuisines, and enjoy a seamless browsing
                experience.
              </p>

              <p className='w-full pb-2 capitalize border-b-2'>Project Info</p>
              <p className='w-full pb-2 border-b-2'>
                Technologies: React.js, TailwindCSS, Redux, Edamam Api
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://recipie-finder-chit.vercel.app/'
                  target='_blank'
                  className='px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent'
                >
                  Live Demo
                </a>
                <a
                  href='https://github.com/chitgo/recipie-finder'
                  target='_blank'
                  className='px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className='grid place-items-center'>
          <div className='grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl'>
            <div className='flex justify-center'>
              <img
                src={ecomProject}
                alt='ecom-project'
                className='w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer'
              />
            </div>

            <div className='flex flex-col items-center order-last px-6 space-y-4 '>
              <h2 className='text-xl font-semibold'>Simple E-commerce Shop</h2>
              <p className='max-w-md'>
                A basic e-commerce platform where users can browse and purchase
                items. Users have the ability to filter items alphabetically or
                by price, as well as by category. They can view individual
                product details, adjust item quantities, and explore upcoming
                features.
              </p>

              <p className='w-full pb-2 capitalize border-b-2'>Project Info</p>
              <p className='w-full pb-2 border-b-2'>
                Technologies: React.js, TailwindCSS
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://chitgo.github.io/ecom-chit/'
                  target='_blank'
                  className='px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent'
                >
                  Live Demo
                </a>
                <a
                  href='https://github.com/chitgo/ecom-chit'
                  target='_blank'
                  className='px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className='grid place-items-center'>
          <div className='grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl'>
            <div className='flex justify-center'>
              <img
                src={cocktailsProject}
                alt='cocktails-project'
                className='w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer'
              />
            </div>

            <div className='flex flex-col items-center px-6 space-y-4 md:order-first'>
              <h2 className='text-xl font-semibold'>Cocktail Explorer</h2>
              <p className='max-w-md'>
                An interactive cocktail website that allows users to explore a
                wide variety of cocktails sourced from an API. Users can search
                for cocktails and browse through the available options. Each
                cocktail displays detailed information including its name,
                category, description, ingredients, and instructions on how to
                prepare it. Users can click on a cocktail to view its recipe and
                learn more about its ingredients and preparation method.
              </p>

              <p className='w-full pb-2 capitalize border-b-2'>Project Info</p>
              <p className='w-full pb-2 border-b-2'>
                Technologies: React.js, TailwindCSS, Cocktail API Integration
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://chitgo.github.io/chit-cocktails/'
                  target='_blank'
                  className='px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent'
                >
                  Live Demo
                </a>
                <a
                  href='https://github.com/chitgo/chit-cocktails'
                  target='_blank'
                  className='px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className='grid place-items-center'>
          <div className='grid items-center max-w-5xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-2 rounded-xl'>
            <div className='flex justify-center'>
              <img
                src={kofeeProject}
                alt='kofee-project'
                className='w-[90%] max-h-[400px] object-top object-cover rounded-xl cursor-pointer'
              />
            </div>

            <div className='flex flex-col items-center order-last px-6 space-y-4 '>
              <h2 className='text-xl font-semibold'>Coffee Shop Website</h2>
              <p className='max-w-md'>
                A visually appealing coffee shop website designed to showcase
                the ambiance and menu of a fictional coffee shop. The website
                features a clean and elegant design with high-quality photos of
                the coffee shop's interior, exterior, and menu items. Users can
                browse through the different sections of the website to explore
                the menu offerings and view captivating images of the coffee
                shop.
              </p>

              <p className='w-full pb-2 capitalize border-b-2'>Project Info</p>
              <p className='w-full pb-2 border-b-2'>
                Technologies: React.js, TailwindCSS
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://chitgo.github.io/coff-chit-1/'
                  target='_blank'
                  className='px-6 py-2 font-medium text-white transition duration-300 border rounded-md border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary hover:text-blue hover:bg-transparent'
                >
                  Live Demo
                </a>
                <a
                  href='https://github.com/chitgo/coff-chit-1'
                  target='_blank'
                  className='px-6 py-2 font-medium transition duration-300 bg-transparent border rounded-md border-primary hover:bg-primary hover:border-primary text-primary hover:text-white'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
