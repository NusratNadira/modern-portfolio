"use client";
import React, { useState } from 'react';

import { FaArrowRight, FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaTwitter, FaPencilRuler, FaBezierCurve, FaSlack, FaAngleRight, FaCalendarPlus, FaRegCalendar, FaPenNib, FaEnvelope } from "react-icons/fa";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { MdArrowOutward,MdCall,MdPerson } from "react-icons/md";
import { FaBarsStaggered, FaGgCircle, FaRegEnvelope, FaRegLightbulb, FaUpwork, FaMedium, FaBuildingColumns, FaLocationDot } from "react-icons/fa6";
import { SiAmazon,  SiAsana, SiFramer, SiNotion } from "react-icons/si";

const NavbarComponent = () => {
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


                    <div className='flex  items-center justify-around gap-2  mt-5'>
                        <div className='order-1 w-[580px] h-auto rounded-xl bg-linear-65 from-red-950 to-red-800 flex flex-col p-15'>
                            <div className='flex  justify-between'>
                                <span className='text-4xl text-red-600 font-bold'> 25</span>
                                <p className='text-2xl font-bold'>Years of <br /> Experience</p>
                            </div>

                            <div className='text-white text-sm pt-4'>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</div>
                        </div>
                        <div className='w-[50%] order-2  flex  flex-wrap items-center justify-evenly gap-4'>
                            <div className='bg-gray-900 rounded-xl w-auto h-auto items-center flex flex-col p-8'>
                                <span className='text-white font-bold text-4xl'>0k+</span>
                                <p className='text-gray-500 text-lg'>Our Project Complete</p>
                            </div>
                            <div className='bg-gray-900 rounded-xl w-auto h-auto items-center flex flex-col p-8'>
                                <span className='text-white font-bold text-4xl'>0k+</span>
                                <p className='text-gray-500 text-lg'>Our Project Complete</p>
                            </div>
                            <div className='bg-gray-900 rounded-xl w-auto h-auto items-center flex flex-col p-8'>
                                <span className='text-white font-bold text-4xl'>0k+</span>
                                <p className='text-gray-500 text-lg'>Our Project Complete</p>
                            </div>
                            <div className='bg-gray-900 rounded-xl w-auto h-auto items-center flex flex-col p-8'>
                                <span className='text-white font-bold text-4xl'>0k+</span>
                                <p className='text-gray-500 text-lg'>Our Project Complete</p>
                            </div>
                        </div>
                    </div>

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
                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>PHOTOSHOT</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-full" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>FIGMA</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700  w-[95%]" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>ADOBE XD</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-[60%]" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>ADOBE ILLUSTRATOR</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-[70%]" ></div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>HTML</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-full" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>CSS</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-[95%]" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>Javascript</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-[60%]" ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
                                        <span>Wordpress</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-gray-900">
                                        <div className="rounded-full h-2 bg-red-700 w-[70%]" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div >
            </div >


            {/* latest Service */}

            <div className='bg-black h-screen '>
                <div className='m-auto max-w-[1250px]  p-5 '>

                    <div className="max-w-6xl mx-auto px-6 py-24 text-white mt-15">
                        <div className="text-center mb-12">
                            <div className="text-red-900 tracking-widest text-sm">LATEST SERVICE</div>
                            <h2 className="mt-4 text-4xl  font-extrabold">Inspiring The World One Project</h2>
                            <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">Business consulting consultants provide expert advice and guidance to help them improve their performance, efficiency, and organizational.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="space-y-8">
                                    <div className="rounded-xl bg-gray-900/60 p-6 shadow-lg">
                                        <div className="flex items-start gap-6">
                                            <div className="text-white font-extrabold text-lg">01.</div>
                                            <div>
                                                <h3 className="text-xl font-semibold">A Portfolio of Creativity</h3>
                                                <p className="mt-3 text-sm text-gray-400 max-w-xl">Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-gray-900/60 p-6 shadow-lg">
                                        <div className="flex items-start gap-6">
                                            <div className="text-white font-extrabold text-lg">02.</div>
                                            <div>
                                                <h3 className="text-xl font-semibold">My Portfolio of Innovation</h3>
                                                <p className="mt-3 text-sm text-gray-400 max-w-xl">My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-gray-900/60 p-6 shadow-lg">
                                        <div className="flex items-start gap-6">
                                            <div className="text-white font-extrabold text-lg">03.</div>
                                            <div>
                                                <h3 className="text-xl font-semibold">A Showcase of My Projects</h3>
                                                <p className="mt-3 text-sm text-gray-400 max-w-xl">In this portfolio, you'll find a curated selection of projects that highlight my skills in [Main Areas], e.g., responsive web design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center ">
                                <div className=" p-5">



                                    <img src="https://inversweb.com/product/html/reeni/assets/images/services/latest-services-user-image.png" alt="person" className="  transform translate-y-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Education section */}

            <div className='bg-black '>
                <div className='m-auto max-w-[1250px] p-5 '>
                    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
                        <div className="text-center mb-12">
                            <div className="text-red-700 tracking-widest text-sm">EDUCATION & EXPERIENCE</div>
                            <h2 className="mt-4 text-4xl  font-extrabold">Empowering Creativity through</h2>
                            <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-bold">Education</h3>
                                <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-xl bg-gray-900/60 p-8">
                                <div className="text-sm text-red-700 font-medium mb-3">Trainer Marketing</div>
                                <div className="font-semibold text-white mb-4">2005-2009</div>
                                <p className="text-sm text-gray-400">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                            </div>

                            <div className="rounded-xl bg-gray-900/60 p-8">
                                <div className="text-sm text-red-700 font-medium mb-3">Assistant Director</div>
                                <div className="font-semibold text-white mb-4">2010-2014</div>
                                <p className="text-sm text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.</p>
                            </div>

                            <div className="rounded-xl bg-gray-900/60 p-8">
                                <div className="text-sm text-red-700 font-medium mb-3">Design Assistant</div>
                                <div className="font-semibold text-white mb-4">2008-2012</div>
                                <p className="text-sm text-gray-400">I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.</p>
                            </div>

                            <div className="rounded-xl bg-gray-900/60 p-8">
                                <div className="text-sm text-red-700 font-medium mb-3">Design Assistant</div>
                                <div className="font-semibold text-white mb-4">2008-2012</div>
                                <p className="text-sm text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs a personal.</p>
                            </div>
                        </div>
                    </div>

                    {/* experiences section */}


                    <div className=" mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <div className="mb-8">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-bold text-white">Experiences</h3>
                                    <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt="" />
                                </div>
                            </div>

                            {/* Experience 1 */}
                            <div className="mb-10 text-white">
                                <p className="text-red-700  text-sm font-semibold">experience</p>
                                <h3 className="text-xl font-bold mb-1">Soft Tech (2 Years)</h3>
                                <p className="text-sm mb-3 text-gray-200">UI/UX Designer</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    desi dolore eu fugiat nulla pariatur Duis aute irure.
                                </p>
                            </div>

                            {/* Experience 2 */}
                            <div className='text-white'>
                                <p className="text-red-700 text-sm font-semibold">experience</p>
                                <h3 className="text-xl font-bold mb-1">ModernTech (3 Years)</h3>
                                <p className="text-sm mb-3 text-gray-200">App Developer</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    In this portfolio, you'll find a curated selection of projects that
                                    highlight my skills in [Main Areas, e.g., responsive web design.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="	https://inversweb.com/product/html/reeni/assets/images/experiences/expert-img.jpg"
                                alt="developer working"
                                className="rounded-2xl w-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Brand Logos */}
                    <div className="container mx-auto px-6 py-6 mt-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-gray-400">
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaGgCircle className='text-3xl  font-semibold' /></span>Linear</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><SiFramer className='text-3xl  font-semibold' /></span>Framer</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><SiNotion className='text-3xl  font-semibold' /></span>Notion</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaSlack className='text-3xl  font-semibold' /></span>Slack</div>
                            <div className="border border-gray-700 p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaMedium className='text-3xl  font-semibold' /></span>Medium</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-0"><span><FaUpwork className='text-4xl  font-bold items-center pt-2' /></span>work</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold "><span><SiAmazon className='text-3xl  font-semibold pt-2' /></span>mazon</div>
                            <div className="border border-gray-700  p-10 flex items-center justify-center text-lg font-semibold gap-2"><span><SiAsana className='text-3xl  font-semibold' /></span>Asana</div>
                        </div>
                    </div>
                </div>
            </div>

         
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

    {/* Testimonials */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      
      <div className="flex items-center gap-6">
        <div className="flex-1 absolute z-1">
          <p className="font-bold text-lg leading-snug">
            Working With Themespark Was An Absolute Pleasure! They Understood My Vision Immediately And Brought It To Life Even Better Than I'd Imagined.
          </p>
          <p className="text-sm text-gray-400 mt-4">Cameron Williamson<br /><span className="text-xs text-gray-500">UI/UX Designer</span></p>
          <div className="mt-6 text-pink-500 text-4xl">“</div>
        </div>
        <div className="relative w-auto h-auto overflow-hidden bg-black flex-shrink-0">
          <img src="https://inversweb.com/product/html/reeni/assets/images/testimonial/bg-image-1png.png" alt="person" className="w-auto h-auto object-cover" />
        </div>
      </div>

      
      <div className="flex items-center gap-6 bg-[url('https://inversweb.com/product/html/reeni/assets/images/testimonial/bg-image-1png.png')] ">
        <div className="flex-1">
          <p className="font-bold text-lg leading-snug">
            ThemesPark Is Incredibly Talented And Detail-Oriented. They Took The Time To Understand My Brand And Created Something Truly Unique.
          </p>
          <p className="text-sm text-gray-400 mt-4">Cameron Williamson<br /><span className="text-xs text-gray-500">UI/UX Designer</span></p>
          <div className="mt-6 text-pink-500 text-4xl">“</div>
        </div>
        <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
          <img src="/person-2.jpg" alt="person" className="w-full h-full object-cover" />
        </div>
      </div>
    </div> */}


    <div className="bg-[#070707] text-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch bg-right">
    
    <div className=''>
        <div
      className="mt-5 relative rounded-lg overflow-hidden p-8 min-h-auto bg-black bg-[url('https://inversweb.com/product/html/reeni/assets/images/testimonial/bg-image-1png.png')] bg-no-repeat bg-right bg-size-[auto_100%] "
     
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