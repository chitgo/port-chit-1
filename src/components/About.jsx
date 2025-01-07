import laptopImg from '../assets/laptop-2.jpg'
import cvPdf from '../assets/KonstantinosChitos.pdf'

function About() {
  return (
    <section
      className='grid grid-cols-1 px-4 py-24 mx-auto text-center place-items-center lg:grid-cols-2 sm:px-8 md:px-12 lg:px-20 2xl:px-40 text-secondary max-w-screen-2xl'
      id='about'
    >
      <div className='max-w-xl px-4 lg:px-0'>
        <img
          src={laptopImg}
          alt='laptop Image'
          className='object-cover w-[410px] h-[350px] rounded-3xl mb-8 lg:mb-0'
        />
      </div>

      <div className='flex flex-col justify-center max-w-xl'>
        <h2 className='mt-8 text-xl font-bold text-blue-500 uppercase'>
          About Me
        </h2>

        <p className='mt-4 text-[27px] font-bold '>
          Front-end Developer
          <br /> based in Greece
        </p>
        <p className='max-w-xl mt-8 text-xl font-medium text-gray-500 '>
          Hey, I'm Konstantinos, a passionate Frontend Developer. My focus is on
          crafting clean UI/UX experiences. Using my main stack of React.js with
          Tailwind CSS.
          <br />
          <br />
          I’m currently learning Next.js and TypeScript to further enhance my
          skills. Feel free to explore my work below.
          <br />
        </p>

        <div className='mt-12'>
          <a
            href={cvPdf}
            download='Chitos_CV.pdf'
            className='px-6 py-3 text-lg font-medium text-white transition duration-300 border rounded-md border-primary hover:bg-blue-600 hover:border-blue-600 bg-primary'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
