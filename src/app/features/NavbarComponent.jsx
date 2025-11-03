"use client";
import React, { useState } from 'react';

import { FaArrowRight, FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaTwitter, FaPencilRuler, FaBezierCurve, FaSlack } from "react-icons/fa";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { FaBarsStaggered, FaGgCircle, FaRegEnvelope, FaRegLightbulb, FaUpwork,FaMedium } from "react-icons/fa6";
import { SiAmazon, SiAmazonmusic, SiAsana, SiFramer, SiNotion } from "react-icons/si";

const NavbarComponent = () => {
    return (
        <>
{/* Header */}
            <div className='bg-[url(https://inversweb.com/product/html/reeni/assets/images/banner/banner-background-one.jpg)]  bg-cover no-bg-no-repeat  h-auto bg-center justify-center items-center    '>
                <header className='shadow-md  bg-white/0 backdrop-blur-none  '>
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
                   

  <div className="grid grid-cols-12 gap-8 items-start mt-15 mb-15">

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
            <div className="rounded-full h-2 bg-red-600 w-full" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>FIGMA</span>
            <span>95%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600  w-[95%]" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>ADOBE XD</span>
            <span>60%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600 w-[60%]" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>ADOBE ILLUSTRATOR</span>
            <span>70%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600 w-[70%]" ></div>
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
            <div className="rounded-full h-2 bg-red-600 w-full" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>CSS</span>
            <span>95%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600 w-[95%]" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>Javascript</span>
            <span>60%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600 w-[60%]" ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 text-xs text-white font-medium">
            <span>Wordpress</span>
            <span>70%</span>
          </div>
          <div className="w-full rounded-full h-2 bg-gray-900">
            <div className="rounded-full h-2 bg-red-600 w-[70%]" ></div>
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

<div className="max-w-6xl mx-auto px-6 py-24 text-white">
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
    <div className="text-red-900 tracking-widest text-sm">EDUCATION & EXPERIENCE</div>
    <h2 className="mt-4 text-4xl  font-extrabold">Empowering Creativity through</h2>
    <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
  </div>

  <div className="mb-8">
    <div className="flex items-center gap-4">
      <h3 className="text-2xl font-bold">Education</h3>
     <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt=""  />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="rounded-xl bg-gray-900/60 p-8">
      <div className="text-sm text-red-900 font-medium mb-3">Trainer Marketing</div>
      <div className="font-semibold text-white mb-4">2005-2009</div>
      <p className="text-sm text-gray-400">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
    </div>

    <div className="rounded-xl bg-gray-900/60 p-8">
      <div className="text-sm text-red-900 font-medium mb-3">Assistant Director</div>
      <div className="font-semibold text-white mb-4">2010-2014</div>
      <p className="text-sm text-gray-400">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.</p>
    </div>

    <div className="rounded-xl bg-gray-900/60 p-8">
      <div className="text-sm text-red-900 font-medium mb-3">Design Assistant</div>
      <div className="font-semibold text-white mb-4">2008-2012</div>
      <p className="text-sm text-gray-400">I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.</p>
    </div>

    <div className="rounded-xl bg-gray-900/60 p-8">
      <div className="text-sm text-red-900 font-medium mb-3">Design Assistant</div>
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
     <img src="https://inversweb.com/product/html/reeni/assets/images/custom-line/custom-line.png" alt=""  />
    </div>
  </div>

      {/* Experience 1 */}
      <div className="mb-10 text-white">
        <p className="text-red-900  text-sm font-semibold">experience</p>
        <h3 className="text-xl font-bold mb-1">Soft Tech (2 Years)</h3>
        <p className="text-sm mb-3 text-gray-200">UI/UX Designer</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          desi dolore eu fugiat nulla pariatur Duis aute irure.
        </p>
      </div>

      {/* Experience 2 */}
      <div className='text-white'>
        <p className="text-red-900 text-sm font-semibold">experience</p>
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
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaGgCircle className='text-3xl  font-semibold'/></span>Linear</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><SiFramer className='text-3xl  font-semibold'/></span>Framer</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><SiNotion className='text-3xl  font-semibold'/></span>Notion</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaSlack className='text-3xl  font-semibold'/></span>Slack</div>
      <div className="border border-gray-700 p-10 flex items-center justify-center text-2xl font-semibold gap-2"><span><FaMedium className='text-3xl  font-semibold'/></span>Medium</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold gap-0"><span><FaUpwork className='text-4xl  font-bold items-center pt-2'/></span>work</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-2xl font-semibold "><span><SiAmazon className='text-3xl  font-semibold pt-2'/></span>mazon</div>
      <div className="border border-gray-700  p-10 flex items-center justify-center text-lg font-semibold gap-2"><span><SiAsana className='text-3xl  font-semibold'/></span>Asana</div>
    </div>
  </div>
    </div>
</div>


<div> 
    
</div>

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