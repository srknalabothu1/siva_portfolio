import Image, { StaticImageData } from 'next/image';
import React from 'react';
import maneva from "@/assets/maneva.jpeg";
import wipro from "@/assets/wipro.jpeg";
import fwd from "@/assets/fwd.jpeg";
import forUKids from "@/assets/forUKids.jpeg";
import Link from 'next/link';

const Experience = () => {
    const experiences = [
        {
            position: "Data Engineer",
            company: "FWD Technologies And Innovations Malaysia Sdn. Bhd.",
            duration: "April 2024 - Present",
            textColor: "#ffc107",
            image: fwd,
            styleText: { width: "5%", height: "5%", margin: "1%" },
            redirect: 'https://www.fwd.com.my/careers/'
        },
        {
            position: "Project Engineer",
            company: "Wipro Technologies",
            duration: "April 2022 - January 2024",
            textColor: "#000048",
            image: wipro,
            styleText: { width: "9%", height: "9%" },
            redirect: 'https://www.wipro.com/'
        },
        {
            position: "Consultant Wipro",
            company: "Maneva Consulting Pvt Ltd",
            duration: "February 2022 - April 2023",
            textColor: "#ff6347",
            image: maneva,
            styleText: { width: "10%" },
            redirect: 'https://manevaconsulting.com/'
        },
        {
            position: "Engineer",
            company: "For U Kids Retail Pvt Ltd",
            duration: "January 2019 - February 2022",
            textColor: "#ff6347",
            image: forUKids,
            styleText: { width: "10%" },
            redirect: 'http://www.blubudhealthcare.co.in/'
        }
    ];

    const goToCompanyProfile = (exp: string | URL | undefined) => {
        window.open(exp);
    };

    return (
        <div className="text-black p-4 md:p-10 ml-2 md:ml-5 text-base md:text-xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">EXPERIENCE <span className="text-red-500">SUMMARY</span></h2>
            <div className="border-l-4 border-dotted border-gray-300 mt-6">
                <div className="space-y-6 mt-8 -ml-4 md:-ml-4">
                    {experiences.map((exp, index) => (
                        <div className="flex space-x-4 items-start" key={index}>
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{exp.position}</h3>
                                <Link className="flex items-center text-gray-700 hover:underline" style={{ color: exp.textColor }} href="#" onClick={() => goToCompanyProfile(exp.redirect)}>
                                    <Image className="w-full" src={exp.image} alt={`${exp.company} Logo`} width={50} height={50} style={exp.styleText} />
                                    <span className="ml-2">{exp.company}</span>
                                </Link>
                                <p className="text-gray-500">{exp.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
