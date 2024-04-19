import linkedInIcon from '../assets/linkedIn-icon.svg'
import githubIcon from '../assets/github-icon.svg'

function Footer() {
  return (
    <footer className="text-center  py-16   text-[27px] font-bold items-center flex flex-col gap-2 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-40 text-secondary">
      <p>Copyright © 2024. All rights are reserved</p>
      <div className="flex items-center gap-4">
        <a href="https://www.github.com/chitgo" target="_blank">
          <img
            src={githubIcon}
            alt="github icon"
            className="transition duration-500 cursor-pointer hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/konstantinos-chitos"
          target="_blank"
        >
          <img
            src={linkedInIcon}
            alt="linkedin icon"
            className="transition duration-500 cursor-pointer hover:scale-125"
          />
        </a>
      </div>
    </footer>
  )
}
export default Footer
