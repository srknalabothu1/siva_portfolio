import Image, { StaticImageData } from 'next/image';
import React from 'react';
import accellor from "@/assets/accellor.jpeg";
import cognizant from "@/assets/cognizant.jpeg";
import maybank from "@/assets/maybank.jpeg";
import Link from 'next/link';

const Experience = () => {
    const experiences = [
        {
            position: "Senior Software Engineer",
            company: "Maybank",
            duration: "December 2022 - Present",
            textColor: "#5aff00",
            image: maybank,
            styleText: { width: "2%", height: "2%", margin: "1%" },
            redirect: 'https://www.maybank.com/en/index.page'
        },
        {
            position: "Software Engineer",
            company: "Cognizant",
            duration: "August 2021 - December 2022",
            textColor: "#0000ff",
            image: cognizant,
            styleText: { width: "9%", height: "9%" },
            redirect: 'https://careers.cognizant.com/global-en/'
        },
        {
            position: "Software Engineer",
            company: "PopcornApps (Accellor)",
            duration: "October 2019 - June 2021",
            textColor: "#ff6347",
            image: accellor,
            styleText: { width: "10%" },
            redirect: 'https://www.accellor.com'
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
