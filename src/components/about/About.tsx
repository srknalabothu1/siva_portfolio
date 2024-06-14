/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from 'react';
import siva from "@/app/favicon.ico";
import Image from 'next/image'

const About = () => {
    console.log(process.env)
    const onResumeOpen = () => {
        window.open('http://localhost:3000/pdf/Siva_resume.pdf', "_blank");
    }
    return (
        <div className="flex justify-normal w-full p-px bg-black">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image className="w-full" src={siva} alt="Siva Image" />

                <div className="px-6 py-4">
                    <div className="text-base">
                        <b>Siva Ramakrishna</b><br />
                        <div className='text-gray-400 text-sm'>Sr.Software Engineer |<br /> Full-Stack Developer |<br /> MERN Stack | PERN Stack | DevOps
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-6">
                <h1 className='text-2xl'><b>Hello there!! 👋 </b></h1> <br />
                <h2 className='text-1.75em'>I'm Siva Ramakrishna, nice to meet you. Please take a look around!</h2><br />
                <h5 className='text-base'>I am dedicated to creating exceptional software that enhances the lives of users. My expertise lies in developing applications tailored to the specific needs of businesses. With over six years of experience in software development, mobile app creation, and front-end/back-end web development, I am proficient in database and server management. I have a strong passion for JavaScript, Node.js, React, Redux, HTML, CSS, and Bootstrap.</h5>
                <div className='pt-[5rem] pl-[33rem]'><button className='p-2.5 leading-4 m-4 border-2 border-white rounded-3xl' onClick={onResumeOpen}>View resume</button></div>
            </div>
        </div>
    )
}

export default About