"use client";
import React, { useState, useEffect, useRef } from 'react';
// import { motion } from "motion/react"
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaTwitter, FaPencilRuler, FaBezierCurve, FaSlack, FaAngleRight, FaCalendarPlus, FaRegCalendar, FaPenNib, FaEnvelope } from "react-icons/fa";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { MdArrowOutward,MdCall,MdPerson } from "react-icons/md";
import { FaBarsStaggered, FaGgCircle, FaRegEnvelope, FaRegLightbulb, FaUpwork, FaMedium, FaBuildingColumns, FaLocationDot } from "react-icons/fa6";
import { SiAmazon,  SiAsana, SiFramer, SiNotion } from "react-icons/si";


const skillBars = [
  { name: "PHOTOSHOT", level: "100%" },
  { name: "FIGMA", level: "95%" },
  { name: "ADOBE XD", level: "60%" },
  { name: "ADOBE ILLUSTRATOR", level: "70%" },
];


const skillBars2 = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "95%" },
  { name: "Javascript", level: "60%" },
  { name: "Wordpress", level: "70%" },
];


function useCount(to, duration = 1500) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const from = 0;
    const diff = to - from;
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOut
      setCount(Math.floor(from + diff * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [to, duration]);
  return count;
}


// const years = useCount(25, 1200);
// const projects = useCount(20000, 1500);
// const products = useCount(10000, 1500);
// const reviews = useCount(200, 1300);
// const clients = useCount(1000, 1300);


const NavbarComponent = () => {


const years = useCount(25, 100);
const projects = useCount(20000, 1500);
const products = useCount(10000, 1500);
const reviews = useCount(200, 1300);
const clients = useCount(1000, 1300);

    return (
        <>
            {/* Header */}
            <div className='bg-[url(https://inversweb.com/product/html/reeni/assets/images/banner/banner-background-one.jpg)]  bg-cover no-bg-no-repeat  h-auto bg-center justify-center items-center    '>
                <header className='shadow-md  bg-black backdrop-blur-none '>
                    <div className='m-auto max-w-[1250px] px-4  '>
                        <div className='flex items-center justify-between gap-4 h-20 '>
                            <div className='flex items-center'>
                                <a href="#">
                                    <img src="https://inversweb.com/product/html/reeni/assets/images/logo/white-logo-reeni.png" alt="" />
                                </a>
                            </div>

                            <nav className='flex items-center nav-menu'>
                                <ul className='flex items-center gap-7'>
                                    <li>
                                        <a href="#" className='text-white font-bold hover:text-red-600 hover:transform scale-150'>Home</a>
                                    </li>
                                    <li><a href="#" className='text-white font-bold hover:text-red-600'>About</a></li>
                                    <li className=''>
                                        <a href="#" className='flex items-center text-white font-bold hover:text-red-600'>Services<RxCaretDown /></a>
                                        <ul className='sub-menu absolute mt-6 left-0 h-auto w-[200px] bg-black items-start z-50 rounded-xl hover: flex flex-col'>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold  px-4 py-2 w-full hover:text-red-600'>Service <RxCaretRight /></a></li>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold  px-4 py-2 w-full hover:text-red-600'>Service Details<RxCaretRight /></a></li>
                                        </ul>
                                    </li>
                                    <li className=''>
                                        <a href="#" className='flex items-center text-white font-bold hover:text-red-600'>Blog<RxCaretDown /></a>
                                        <ul className='sub-menu absolute mt-6 left-0 h-auto w-[200px] bg-black items-start z-50 rounded-xl hover: flex flex-col'>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold  px-4 py-2 w-full hover:text-red-600'>Blog Classic<RxCaretRight /></a></li>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold  px-4 py-2 w-full hover:text-red-600'>Blog Column 3<RxCaretRight /></a></li>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold  px-4 py-2 w-full hover:text-red-600'>Blog Details<RxCaretRight /></a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="#" className='flex items-center text-white font-bold hover:text-red-600'>Project<RxCaretDown /></a>
                                        <ul className='sub-menu absolute mt-6 left-0 h-auto w-[200px] bg-black items-start z-50 rounded-xl hover: flex flex-col'>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold block px-4 py-2 w-full hover:text-red-600'>Project<RxCaretRight /></a></li>
                                            <li><a href="" className='flex justify-between items-center text-white font-bold block px-4 py-2 w-full hover:text-red-600'>Project Style 2<RxCaretRight /></a></li>
                                            <li><a href="" className='text-white flex justify-between items-center font-bold block px-4 py-2 w-full hover:text-red-600'>Project Style 3<RxCaretRight /></a></li>
                                            <li><a href="" className='text-white flex justify-between items-center font-bold block px-4 py-2 w-full hover:text-red-600'>Project Details<RxCaretRight /></a></li>
                                        </ul>
                                    </li>

                                    <li><a href="" className='text-white font-bold hover:text-red-600'>Contact</a></li>

                                </ul>
                            </nav>

                            <div className='flex flex-wrap gap-2 items-center'>
                                <a href=""><FaInstagram className='bg-gray-700 w-10 h-10 rounded-full p-3 text-white hover:bg-red-600' /></a>
                                <a href=""><FaLinkedinIn className='bg-gray-700 w-10 h-10 rounded-full p-3.5 text-white hover:bg-red-600' /></a>
                                <a href=""><FaTwitter className='bg-gray-700 w-10 h-10 rounded-full p-3 text-white hover:bg-red-600' /></a>
                                <a href=""><FaFacebookF className='bg-gray-700 w-10 h-10 rounded-full p-3 text-white hover:bg-red-600' /></a>
                                <a href=""><FaBarsStaggered className='bg-red-600 w-12 h-12 rounded-full p-3 text-white hover:text-red-600 hover:bg-black border-red-600 border-2' /></a>
                            </div>

                        </div>

                    </div>
                </header>

                <div className='m-auto max-w-[1250px] flex items-center p-5'>
                    <div className='col-lg-6 order-1'>
                        <div className='flex flex-col  items-start  p-3'>
                            <h1 className='text-white font-extrabold text-xl pb-2'>HELLO</h1>
                            <h1 className='text-white font-extrabold  text-4xl pb-2'>i'm Jane Cooper a <span className='auto-type text-yellow-600'>Programmer</span>


                            </h1>
                            <p className='text-gray-500 font-semibold text-lg pb-2'>A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as</p>

                            <button className='text-white rounded-3xl font-bold text-lg bg-red-700 p-3 '><span className='flex items-center gap-2'>View Portfolio<FaArrowRight /></span></button>
                        </div>
                    </div>

                    <div className='col-lg-6 order-2'>
                        <div className="">
                            <div className='relative z-1 flex flex-col flex-wrap justify-end max-w-[600px] h-auto '>
                                <div className='object-cover'>
                                    <img className='pl-15' src="https://inversweb.com/product/html/reeni/assets/images/banner/banner-user-image-one.png" alt="" />
                                </div>
                                <h1 className=' text-white text-4xl absolute mb-0 top-[25%] -z-1 flex items-center justify-center w-full animate-bounce  delay-150 font-bold '>Web Designer</h1>
                                <h1 className='font-bold bottom-4 absolute left-0 text-4xl  justify-center items-center w-full flex flex-wrap animate-bounce outline-text '>Web Designer</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Home */}
            <div className='bg-black h-screen'>
                <div className='m-auto max-w-[1250px]  p-5 '>

                    <div className='flex  justify-between items-center gap-2 mt-15'>

                        <div className='border-[.5px] border-red-900 rounded-xl w-[250px] h-[200px] flex flex-col justify-center items-center bg-black'>
                            <FaPencilRuler className='font-lg text-5xl  text-red-700 mb-4' />
                            <h1 className='font-bold text-white mb-2 text-xl'>Web Design</h1>
                            <h3 className='text-gray-500 text-lg'>120 Projects</h3>
                        </div>

                        <div className='border-[.5px] border-red-900 rounded-xl w-[250px] h-[200px] flex flex-col justify-center items-center bg-black'>
                            <FaBezierCurve className='font-bold text-5xl  text-red-700 mb-4' />
                            <h1 className='font-bold text-white mb-2 text-xl'>Ui/Ux Design</h1>
                            <h3 className='text-gray-500 text-lg'>241 Projects</h3>
                        </div>

                        <div className='border-[.5px] border-red-900 rounded-xl w-[250px] h-[200px] flex flex-col justify-center items-center bg-black '>
                            <FaRegLightbulb className='font-bold text-5xl  text-red-700 mb-4' />
                            <h1 className='font-bold text-white mb-2 text-xl'>Web Research</h1>
                            <h3 className='text-gray-500 text-lg'>240 Projects</h3>
                        </div>

                        <div className='border-[.5px] border-red-900 rounded-xl w-[250px] h-[200px] flex flex-col justify-center items-center bg-black'>
                            <FaRegEnvelope className='font-bold text-5xl  text-red-700 mb-4' />
                            <h1 className='font-bold text-white mb-2 text-xl'>Marketing</h1>
                            <h3 className='text-gray-500 text-lg'>331 Projects</h3>
                        </div>

                    </div>


                     {/* count section */}
   Only the changed lines are shown — keep your existing classes and content.
*/

<motion.div
  className="flex items-center justify-around gap-2 mt-5"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.18 } },
  }}
>
  <motion.div
    className="order-1 w-[580px] h-auto rounded-xl bg-linear-65 from-red-950 to-red-800 flex flex-col p-15"
    variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 12 } } }}
  >
    <div className="flex justify-between ">
      <span className="text-4xl text-red-600 font-bold">{years}</span>
      <p className="text-2xl font-bold">Years of <br/> Experience</p>
    </div>

    <div className="text-white text-sm pt-4">
      Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
    </div>
  </motion.div>

  <motion.div
    className="w-[50%] order-2 flex flex-wrap items-center justify-evenly gap-4"
    variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
  >
    <motion.div className="bg-gray-900 rounded-xl w-[230px] h-auto items-center flex flex-col p-8"
      variants={{ hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
    >
      <span className="text-white font-bold text-4xl">{Math.floor(projects).toLocaleString()}</span>
      <p className="text-gray-500 text-lg">Our Project</p>
    </motion.div>

    <motion.div className="bg-gray-900 rounded-xl w-[230px] h-auto items-center flex flex-col p-8"
      variants={{ hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.04 } } }}
    >
      <span className="text-white font-bold text-4xl">{Math.floor(products).toLocaleString()}</span>
      <p className="text-gray-500 text-lg">Our  Products</p>
    </motion.div>

    <motion.div className="bg-gray-900 rounded-xl w-[230px] h-auto items-center flex flex-col p-8"
      variants={{ hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.08 } } }}
    >
      <span className="text-white font-bold text-4xl">{reviews}</span>
      <p className="text-gray-500 text-lg">Clients Reviews</p>
    </motion.div>

    <motion.div className="bg-gray-900 rounded-xl w-[230px] h-auto items-center flex flex-col p-8"
      variants={{ hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.12 } } }}
    >
      <span className="text-white font-bold text-4xl">{clients}</span>
      <p className="text-gray-500 text-lg">Our Satisfied Clients</p>
    </motion.div>
  </motion.div>
</motion.div>


                    {/* parcentage section */}


                    <div className="grid grid-cols-12 gap-8 items-start mt-15 ">

                        <div className="col-span-12 md:col-span-6">
                            <div className="flex items-center mb-6">
                                <h2 className="text-3xl font-extrabold mr-4 text-white">Design Skill</h2>
                                <div>
                                    <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
                                </div>
                            </div>

                             <div className="space-y-6">
      {skillBars.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>

          <div className="w-full rounded-full h-2 bg-gray-900 overflow-hidden">
            <motion.div
              className="rounded-full h-2 bg-red-700"
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <div className="flex items-center mb-6">
                                <h2 className="text-3xl font-extrabold mr-4 text-white">Development Skill</h2>
                                <div>
                                    <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
                                </div>
                            </div>

                            <div className="space-y-6">
      {skillBars2.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>

          <div className="w-full rounded-full h-2 bg-gray-900 overflow-hidden">
            <motion.div
              className="rounded-full h-2 bg-red-700"
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
                        </div>


                    </div>

                </div >
            </div >


            {/* latest Service */}
<motion.div
  className="bg-black h-screen"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.25 } }
  }}
>
  <motion.div
    className="m-auto max-w-[1250px] p-5 mt-20"
    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
  >
    <motion.div
      className="max-w-6xl mx-auto px-6 py-24 text-white mt-15"
      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
    >
      <motion.div
        className="text-center mb-12"
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="text-red-900 tracking-widest text-sm">LATEST SERVICE</div>
        <h2 className="mt-4 text-4xl font-extrabold">Inspiring The World One Project</h2>
        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          Business consulting consultants provide expert advice and guidance to help them improve their performance, efficiency, and organizational.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
        >
          <motion.div
            className="rounded-xl bg-gray-900/60 p-6 shadow-lg"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="flex items-start gap-6">
              <div className="text-white font-extrabold text-lg">01.</div>
              <div>
                <h3 className="text-xl font-semibold">A Portfolio of Creativity</h3>
                <p className="mt-3 text-sm text-gray-400 max-w-xl">
                  Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl bg-gray-900/60 p-6 shadow-lg"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="flex items-start gap-6">
              <div className="text-white font-extrabold text-lg">02.</div>
              <div>
                <h3 className="text-xl font-semibold">My Portfolio of Innovation</h3>
                <p className="mt-3 text-sm text-gray-400 max-w-xl">
                  My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl bg-gray-900/60 p-6 shadow-lg"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="flex items-start gap-6">
              <div className="text-white font-extrabold text-lg">03.</div>
              <div>
                <h3 className="text-xl font-semibold">A Showcase of My Projects</h3>
                <p className="mt-3 text-sm text-gray-400 max-w-xl">
                  In this portfolio, you'll find a curated selection of projects that highlight my skills in [Main Areas], e.g., responsive web design
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        >
          <div className="p-5">
            <img
              src="https://inversweb.com/product/html/reeni/assets/images/services/latest-services-user-image.png"
              alt="person"
              className="transform translate-y-6"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</motion.div>




            {/* Education section */}

<motion.div
  className="bg-black mt-36"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.18 }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.12 } }
  }}
>
  <motion.div className="m-auto  max-w-[1250px] p-5" variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
    <motion.div className="max-w-6xl mx-auto px-6 py-20 text-white" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
      <motion.div className="text-center mb-12" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
        <motion.div className="text-red-700 tracking-widest text-sm">EDUCATION & EXPERIENCE</motion.div>
        <motion.h2 className="mt-4 text-4xl  font-extrabold">Empowering Creativity through</motion.h2>
        <motion.p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</motion.p>
      </motion.div>

      <motion.div className="mb-8" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold">Education</h3>
          <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
        </div>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
        <motion.div className="rounded-xl bg-gray-900/60 p-8" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <div className="text-sm text-red-700 font-medium mb-3">Trainer Marketing</div>
          <div className="font-semibold text-white mb-4">2005-2009</div>
          <p className="text-sm text-gray-400">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
        </motion.div>

        <motion.div className="rounded-xl bg-gray-900/60 p-8" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <div className="text-sm text-red-700 font-medium mb-3">Assistant Director</div>
          <div className="font-semibold text-white mb-4">2010-2014</div>
          <p className="text-sm text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.</p>
        </motion.div>

        <motion.div className="rounded-xl bg-gray-900/60 p-8" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <div className="text-sm text-red-700 font-medium mb-3">Design Assistant</div>
          <div className="font-semibold text-white mb-4">2008-2012</div>
          <p className="text-sm text-gray-400">I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.</p>
        </motion.div>

        <motion.div className="rounded-xl bg-gray-900/60 p-8" variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <div className="text-sm text-red-700 font-medium mb-3">Design Assistant</div>
          <div className="font-semibold text-white mb-4">2008-2012</div>
          <p className="text-sm text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs a personal.</p>
        </motion.div>
      </motion.div>
    </motion.div>

    <motion.div className="mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}>
      <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">Experiences</h3>
            <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
          </div>
        </div>

        <motion.div className="mb-10 text-white" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
          <p className="text-red-700  text-sm font-semibold">experience</p>
          <h3 className="text-xl font-bold mb-1">Soft Tech (2 Years)</h3>
          <p className="text-sm mb-3 text-gray-200">UI/UX Designer</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            desi dolore eu fugiat nulla pariatur Duis aute irure.
          </p>
        </motion.div>

        <motion.div className="text-white" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
          <p className="text-red-700 text-sm font-semibold">experience</p>
          <h3 className="text-xl font-bold mb-1">ModernTech (3 Years)</h3>
          <p className="text-sm mb-3 text-gray-200">App Developer</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            In this portfolio, you'll find a curated selection of projects that
            highlight my skills in [Main Areas, e.g., responsive web design.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="flex justify-center" variants={{ hidden: { opacity: 0, y: 18, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }}>
        <img
          src="https://inversweb.com/product/html/reeni/assets/images/experiences/expert-img.jpg"
          alt="developer working"
          className="rounded-2xl w-full object-cover"
        />
      </motion.div>
    </motion.div>

    <motion.div className="container mx-auto px-6 py-6 mt-20" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-gray-400" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }}>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><FaGgCircle className='text-3xl  font-semibold' /></span>Linear</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><SiFramer className='text-3xl  font-semibold' /></span>Framer</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><SiNotion className='text-3xl  font-semibold' /></span>Notion</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><FaSlack className='text-3xl  font-semibold' /></span>Slack</motion.div>
        <motion.div className="border border-gray-700 p-10 flex items-center justify-center text-2xl font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><FaMedium className='text-3xl  font-semibold' /></span>Medium</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-0" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><FaUpwork className='text-4xl  font-bold items-center pt-2' /></span>work</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold " variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><SiAmazon className='text-3xl  font-semibold pt-2' /></span>mazon</motion.div>
        <motion.div className="border border-gray-700  p-10 flex items-center justify-center text-lg font-semibold gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><span><SiAsana className='text-3xl  font-semibold' /></span>Asana</motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>



         
 <div className='bg-black '>
                <div className='m-auto max-w-[1250px] p-5 '>
    {/*portfolio Header */}
    <div className="text-center max-w-2xl mx-auto mt-15 mb-12">
      <p className="text-red-700 text-sm font-semibold uppercase tracking-widest mb-3">Latest Portfolio</p>
      <h2 className="text-4xl font-extrabold leading-tight text-white">
        Transforming Ideas into<br className="hidden sm:inline" /> Exceptional
      </h2>
      <p className="text-gray-400 text-sm mt-4">
        Business consulting consultants provide expert advice and guidance to help them improve their performance, efficiency, and organizational.
      </p>
    </div>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#0b0b0b] to-[#111014] p-6 shadow-lg">
          <div className="rounded-xl bg-black/40 ">
            <img src="https://inversweb.com/product/html/reeni/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="project 1" className="w-full h-full object-cover rounded-lg shadow-inner" />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold hover:text-red-700 hover:underline ">Digital Transformation Advisors</h3>
            <p className="text-gray-500 text-sm mt-1">Development Coaches</p>
          </div>
          <button className="ml-4 flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-gray-300 hover:bg-red-600">
            <MdArrowOutward className='text-2xl'/>
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#0b0b0b] to-[#111014] p-6 shadow-lg">
          <div className="rounded-xl bg-black/40 ">
            <img src="https://inversweb.com/product/html/reeni/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="project 2" className="w-full h-full object-cover rounded-lg shadow-inner" />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold hover:text-red-700 hover:underline">My work is driven by the belief that thoughtful.</h3>
            <p className="text-gray-500 text-sm mt-1">Development App</p>
          </div>
          <button className="ml-4 flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-gray-300 hover:bg-red-600">
            <MdArrowOutward className='text-2xl'/>
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#0b0b0b] to-[#111014] p-6 shadow-lg">
          <div className="rounded-xl bg-black/40 ">
            <img src="https://inversweb.com/product/html/reeni/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="project 3" className="w-full h-full object-cover rounded-lg shadow-inner" />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold hover:text-red-700 hover:underline">In this portfolio, you’ll find a curated selection</h3>
            <p className="text-gray-500 text-sm mt-1">Web Design</p>
          </div>
          <button className="ml-4 flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-gray-300 hover:bg-red-600">
            <MdArrowOutward className='text-2xl'/>
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#0b0b0b] to-[#111014] p-6 shadow-lg">
          <div className="rounded-xl bg-black/40 ">
            <img src="https://inversweb.com/product/html/reeni/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="project 4" className="w-full h-full object-cover rounded-lg shadow-inner" />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold hover:text-red-700 hover:underline ">I’ve had the privilege of working with various</h3>
            <p className="text-gray-500 text-sm mt-1">App Development</p>
          </div>
           <button className="ml-4 flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md text-gray-300 hover:bg-red-600">
            <MdArrowOutward className='text-2xl'/>
          </button>
        </div>
      </div>
    </div>

{/* skill section */}

    {/* Heading */}
    <div className="mb-8 mt-15">
      <p className="text-red-700 text-sm font-semibold uppercase tracking-widest">My Skill</p>
      <h2 className="text-3xl text-white font-extrabold mt-3 mb-3 leading-tight">
        Elevated Designs Personalized<br  /> the best Experiences
      </h2>
    </div>

    {/* Services List */}
    <div className="space-y-4 mb-12">
      {/* Service Item - active */}
      <div className="flex items-center gap-6 border-t border-gray-800   py-6">
       
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/20 border-2">
          {/* icon placeholder */}
         <FaBuildingColumns className='text-2xl text-gray-300'/>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-white">Ui/Visual Design</h3>
          <p className="text-sm text-gray-400">21 Done</p>
        </div>
        <div className="hidden md:block w-1/2 text-sm text-gray-400">
         My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands
        </div>
         <div className="ml-4 text-sm text-white">READ MORE ❯</div>
      </div>

      {/* Service Item - normal */}
      <div className="flex items-center gap-6 border-t border-gray-800 pt-6 pb-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/20 border-2">
          {/* icon placeholder */}
         <FaRegCalendar className='text-2xl text-gray-300'/>
        </div>
        <div className="flex-1 text-white">
          <h3 className="font-bold ">Ui/Visual Design</h3>
          <p className="text-sm text-gray-400 ">21 Demo</p>
        </div>
        <div className="hidden md:block w-1/2 text-sm text-gray-400">
          In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design.
        </div>
        <div className="ml-4 text-sm text-white">READ MORE ❯</div>
      </div>

      {/* Service Item - normal */}
      <div className="flex items-center gap-6 border-t border-gray-800 pt-6 pb-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/20 border-2">
          {/* icon placeholder */}
         <FaPenNib className='text-2xl text-gray-300'/>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">Motion Design</h3>
          <p className="text-sm text-gray-500 mt-1">20 Demo</p>
        </div>
        <div className="hidden md:block w-1/2 text-sm text-gray-400">
          Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.
        </div>
        <div className="ml-4 text-sm text-white">READ MORE ❯</div>
      </div>
    </div>

    


    <div className="bg-[#070707] text-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch bg-right">
    
    <div className=''>
        <div
      className="mt-5 relative rounded-lg overflow-hidden p-8 min-h-auto bg-black bg-[url('https://inversweb.com/product/html/reeni/assets/images/testimonial/bg-image-1png.png')] bg-no-repeat bg-right bg-size-[auto_100%] "
     
    >
      <div className="max-w-[55%]
      ">
        <h3 className="text-2xl  font-bold leading-tight  text-justify">
          Working With Themespark Was An Absolute Pleasure! They Understood My Vision
          Immediately And Brought It
          To Life Even Better Than I'd
          Imagined.
        </h3>

        <div className="mt-8">
          <div className="font-semibold">Cameron Williamson</div>
          <div className="text-sm text-gray-400 mt-1">Ui/Ux Designer</div>
        </div>
      </div>

      
      
    </div>

    <img src="https://inversweb.com/product/html/reeni/assets/images/testimonial/testimonial-icon.svg" alt="" className='w-18 h-18' />
    </div>

    
    <div className=''>
        <div
      className="mt-5 relative rounded-lg overflow-hidden p-8 min-h-auto bg-black bg-[url('https://inversweb.com/product/html/reeni/assets/images/testimonial/bg-image-2.png')] bg-no-repeat bg-right bg-size-[auto_100%] "
     
    >
      <div className="max-w-[50%] ">
        <h3 className="text-2xl  font-bold leading-tight ">
          Working With Themespark 
          Was An Absolute Pleasure! 
          They Understood My Vision <br />
          Immediately And Brought It <br />
          To Life Even Better Than I'd <br />
          Imagined.
        </h3>

        <div className="mt-8">
          <div className="font-semibold">Cameron Williamson</div>
          <div className="text-sm text-gray-400 mt-1">Ui/Ux Designer</div>
        </div>
      </div>

      
      
    </div>

    <img src="https://inversweb.com/product/html/reeni/assets/images/testimonial/testimonial-icon.svg" alt="" className='w-18 h-18' />
    </div>

  </div>
</div>


    {/* Contact  Card */}
    <div className="bg-[#0f0f0f] mt-10 rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-5">
        {/* Left: CTA copy */}
        <div>
          <p className="text-red-700 text-sm font-semibold uppercase tracking-widest mb-3">Get in touch</p>
          <h3 className="text-3xl font-extrabold mb-3 text-white">Elevate your <br/> brand with <br/> Me</h3>
          <p className="text-gray-400 text-sm ">
            ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
          </p>
        </div>

        {/* Right: Contact form */}
        <form className="space-y-4 text-gray-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
            <input aria-label="Your Name" placeholder="Your Name" className="bg-transparent border border-gray-800 rounded-md px-3 py-3 text-sm w-full text-gray-400" />
            <input aria-label="Phone Number" placeholder="Phone Number" className="bg-transparent border border-gray-700 rounded-md px-3 py-3 text-sm w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input aria-label="Your Email" placeholder="Your Email" className="bg-transparent border border-gray-700 rounded-md px-3 py-3 text-sm w-full" />
            <input aria-label="Subject" placeholder="Subject" className="bg-transparent border border-gray-700 rounded-md px-3 py-3 text-sm w-full" />
          </div>

          <textarea aria-label="Your Message" placeholder="Your Message" rows="4" className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-3 text-sm resize-none" />

          <div className="flex justify-end">
            <button type="submit" className="bg-red-700 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow w-full">
              Appointment Now →
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>




<div className='bg-black  '>
                <div className='m-auto max-w-[1250px] p-5 '>
                    <div className="mt-15 text-white">
 
 
  <div className="max-w-6xl mx-auto text-center pt-8">
    <p className="text-red-700 text-sm tracking-widest">BLOG AND NEWS</p>
    <h2 className="font-bold text-3xl  mt-3">Elevating Personal Branding the<br/>through Powerful Portfolios</h2>
  </div>

  
  
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6">
    
    
    <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md border-gray-800/30 border-2">
      <div className="relative">
        <img src="https://inversweb.com/product/html/reeni/assets/images/blog/blog-img-1.jpg" alt="" className="w-full h-46 object-cover"/>
        <div className="absolute left-2 top-2 bg-black/70 text-xs rounded-full px-3 py-1 flex items-center gap-1"> <MdPerson/> Mesbah <FaRegCalendar/> April 10</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base leading-tight">Inspiring the World, One Project at<br/>a Time for the man</h3>
        <p className="text-xs mt-4 text-gray-400">READ MORE ›</p>
      </div>
    </div>

    
    
    <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md border-gray-800/30 border-2 ">
      <div className="relative">
        <img src="	https://inversweb.com/product/html/reeni/assets/images/blog/blog-img-2.jpg" alt="" className="w-full h-46 object-cover"/>
        <div className="absolute left-2 top-2 bg-black/70 text-xs rounded-full px-3 py-1 flex items-center gap-2"> <MdPerson/> Mesbah <FaRegCalendar/> April 10 </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base leading-tight">Let’s bring your ideas to life!<br/>Contact me, and lets</h3>
        <p className="text-xs mt-4 text-gray-400">READ MORE ›</p>
      </div>
    </div>

    
    
    <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md border-gray-800/30 border-2">
      <div className="relative">
        <img src="https://inversweb.com/product/html/reeni/assets/images/blog/blog-img-3.jpg" alt="" className="w-full h-46 object-cover"/>
        <div className="absolute left-2 top-2 bg-black/70 text-xs rounded-full px-3 py-1 flex items-center gap-2"><MdPerson/> Mesbah <FaRegCalendar/> April 10</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base leading-tight">Each one showcases my approach<br/>and dedication man</h3>
        <p className="text-xs mt-4 text-gray-400">READ MORE ›</p>
      </div>
    </div>
  </div>

  
</div>

                </div>


</div>


<footer className="bg-[#0f0f0f] text-gray-300 w-full ">
    <div className="max-w-[1250px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-15 py-16 px-6 items-center justify-center">
   
      <div>
        <div className="flex items-center gap-3">
         <img src="https://inversweb.com/product/html/reeni/assets/images/logo/white-logo-reeni.png" alt="" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mt-4 text-white">Get Ready <span className="font-normal">To Create</span><br/>Great</h3>
        <div className="mt-6">
          <label className="text-xs block mb-2">Email Address</label>
          <div className="flex items-center border-b border-gray-700 pb-2">
            <input placeholder="example@gmail.com" className="bg-transparent outline-none text-sm flex-1" />
            <button className="text-sm"><FaEnvelope/></button>
          </div>
        </div>
      </div>

      
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Link</h4>
        <ul className="text-sm space-y-3">
          <li>About Me</li>
          <li>Service</li>
          <li>Contact Me</li>
          <li>Blog Post</li>
          <li>Pricing</li>
        </ul>
      </div>

      
      <div>
        <h4 className="text-white font-semibold mb-4">Contact</h4>
        <ul className="text-sm space-y-4">
          <li className='flex gap-1 items-center'><FaEnvelope/> example@gmail.com</li>
          <li className='flex gap-1 items-center'><FaLocationDot/> 3891 Ranchview Dr. Richardson</li>
          <li className='flex gap-1 items-center'><MdCall/> 01245789321</li>
          <li className="flex gap-3 mt-3">
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"><FaLinkedinIn/></span>
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"><FaTwitter/></span>
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"><FaFacebookF/></span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 text-xs text-gray-500 py-4 max-w-[1250px] flex items-center justify-between m-auto">
      <div className="max-w-6xl mx-auto flex justify-between px-6 items-center">
        <div>© InversWeb 2025 | All Rights Reserved</div>
        <div className="flex gap-6">
          <div>Terms & Condition</div>
          <div>Privacy Policy</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  </footer>


            {/* <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  
  <script>
    var typed = new Typed(".auto-type", {
      strings: ["Programmer", "Designer", "YouTuber"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  </script> */}



        </>

    )

}

export default NavbarComponent