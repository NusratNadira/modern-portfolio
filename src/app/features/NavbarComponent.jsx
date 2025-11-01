"use client";
import React, { useState } from 'react';

import { FaArrowRight, FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { TiHeart } from "react-icons/ti";

const NavbarComponent = () => {
    return (
        <>

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
                           <h1  className='font-bold bottom-4 absolute left-0 text-4xl  justify-center items-center w-full flex flex-wrap animate-bounce outline-text '>Web Designer</h1>
                          </div>
                        </div>
                    </div>
                </div>


            </div>


       





        {/* <header class="shadow-md">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-20">

<div class="flex items-center gap-4">
<a href="#" class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-black font-bold">R</div>
<span class="font-semibold text-xl tracking-wide hidden sm:inline">Reeni</span>
</a>
</div>

<nav class="hidden lg:flex lg:space-x-8">
<a href="#" class="py-2 px-3 hover:text-pink-400">Home</a>
<a href="#" class="py-2 px-3 hover:text-pink-400">About</a>
<a href="#" class="py-2 px-3 hover:text-pink-400">Services</a>
<a href="#" class="py-2 px-3 hover:text-pink-400">Blog</a>
<a href="#" class="py-2 px-3 hover:text-pink-400">Project</a>
<a href="#" class="py-2 px-3 hover:text-pink-400">Contact</a>
</nav>

<div class="flex items-center gap-3">

<div class="hidden md:flex items-center gap-3">
<a href="#" class="p-3 rounded-full hover:bg-pink-600/10 transition">
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8"></path></svg>
</a>

<a href="#" class="p-3 rounded-full hover:bg-pink-600/10 transition">
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.08 5.5 2.98 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5 4.98 2.4 4.98 3.5zM.5 8.5H5.5V23H.5zM8.5 8.5h4.7v2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.2V23h-5V15.3c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V23H8.5z"/></svg>
</a>

<a href="#" class="p-3 rounded-full hover:bg-pink-600/10 transition">
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 3s-1 .5-2 1c-1 .5-2 .5-3 1 0 0 1 0 1 1-1 0-1 .5-2 1-2 1-4 1-6 2 0 0 0 1 1 1-3 0-6 0-8 2-2 2-3 4-3 8 0 3 1 6 3 7 2 1 5 2 8 2 7 0 12-4 14-9 1-3 1-6 1-10 0-1 .5-2 1-3z"/></svg>
</a>

<a href="#" class="p-3 rounded-full hover:bg-pink-600/10 transition">
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0zM14 12h-2v8h-3v-8H7V9h2V7.5C9 5 10.3 4 12.9 4H16v3h-1.2c-1 0-1 .4-1 1.2V9H16l-1 3z"/></svg>
</a>

<a href="#" class="p-3 rounded-full hover:bg-pink-600/10 transition">
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.7-.9-2.4C20.8 3.1 19.2 3 18.3 3H6.7C5.8 3 4.2 3.1 2.9 4.6 2.2 5.3 2 7 2 7S1.8 9 1.8 11v2c0 2 .2 4 2 4s2 1.6 4 1.6h11.6c1.1 0 3-.1 3.8-1.6.7-1.3.9-3 .9-3V11c0-2-.2-4-2-4zM9.8 15.5V8.5l6 3.5-6 3.5z"/></svg>
</a>
</div>

<div class="hidden lg:flex">
<button class="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
<svg class="w-5 h-5" viewBox="0 0 24 24" stroke="black" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
</button>
</div>

<div class="md:hidden">
<button id="mobileMenuBtn" class="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
<svg class="w-5 h-5" viewBox="0 0 24 24" stroke="black" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
</button>
</div>

</div>
</div>
</div>
</header>

<div id="mobileSidebar" class="fixed inset-0 z-40 hidden">
<div id="overlay" class="absolute inset-0 bg-black/60"></div>
<aside class="absolute left-0 top-0 bottom-0 w-72 bg-gray-900/95 p-6">
<div class="flex items-center justify-between mb-6">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-black font-bold">R</div>
<span class="font-semibold text-lg">Reeni</span>
</div>
<button id="closeBtn" class="p-2 rounded-md hover:bg-white/5">
<svg class="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M6 18L18 6M6 6l12 12"/></svg>
</button>
</div>

<nav class="space-y-4">
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">Home</a>
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">About</a>
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">Services</a>
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">Blog</a>
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">Project</a>
<a href="#" class="block py-2 px-3 rounded hover:bg-white/5">Contact</a>
</nav>
</aside>
</div>

<script>
const btn=document.getElementById("mobileMenuBtn")
const bar=document.getElementById("mobileSidebar")
const close=document.getElementById("closeBtn")
const overlay=document.getElementById("overlay")
btn.onclick=()={'>'}bar.classList.remove("hidden")
close.onclick=()={'>'}bar.classList.add("hidden")
overlay.onclick=()={'>'}bar.classList.add("hidden")
</script> */}


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