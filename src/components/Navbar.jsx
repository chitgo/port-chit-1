import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeNavLink, setActiveNavLink] = useState('Home')
  const navLinks = ['Home', 'About', 'Projects', 'Contact']

  useEffect(() => {
    setActiveNavLink('Home')
  }, [])

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}`
    const handleClickNav = () => {
      if (scrollToId === 'home') {
        scrollTo(0, 0)
        setIsOpen(false)
      } else {
        const section = document.getElementById(scrollToId)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
          setIsOpen(false)
        }
      }
      setActiveNavLink(content)
    }

    return (
      <ul
        key={content}
        className="flex flex-col items-center gap-10 sm:gap-4 sm:flex-row"
      >
        <li
          className={`px-2 mt-8 text-4xl font-bold transition duration-300 sm:text-2xl hover:text-blue-500 sm:mt-0 ${
            activeNavLink === content ? 'text-blue-500' : ''
          }`}
        >
          <button
            className={`relative before:content-[' '] before:absolute before:h-[4px] before:w-full before:bg-primary before:left-0 before:bottom-[-5px] before:scale-0 before:hover:scale-100 before:transition before:duration-300 before:origin-left ${
              activeNavLink === content ? 'before:scale-100' : ''
            }`}
            onClick={handleClickNav}
          >
            {content}
          </button>
        </li>
      </ul>
    )
  }

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoClick = () => {
    setActiveNavLink('Home')
    scrollTo(0, 0)
  }

  return (
    <section className="sticky top-0 flex items-center justify-between px-4 mx-auto overflow-hidden bg-white sm:px-8 md:px-12 lg:px-20 2xl:px-40 py-7 text-secondary">
      <a onClick={handleLogoClick} className="cursor-pointer">
        <h2 className="text-3xl font-bold ">Chit.dev</h2>
      </a>

      <div className="flex items-center ">
        <div
          onClick={handleMenu}
          className="transition duration-300 cursor-pointer sm:hidden hover:text-primary"
        >
          <AiOutlineMenu className="text-2xl " />
        </div>
        <div className="hidden sm:flex">
          {navLinks.map((nav) => renderNavLink(nav))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 z-10 w-screen h-screen transition duration-1000 bg-white sm:hidden"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
          >
            <div className="flex flex-col gap-8 mt-24">
              <AiOutlineClose
                className="absolute text-2xl transition duration-300 cursor-pointer right-8 top-9 hover:text-primary"
                onClick={handleMenu}
              />
              {navLinks.map((nav) => renderNavLink(nav))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Navbar
