import React from 'react';

const Experience = () => {
    const experiences = [
        {
            position: "Senior Software Engineer",
            company: "Maybank",
            duration: "December 2022 - Present"
        },
        {
            position: "Software Engineer",
            company: "Cognizant",
            duration: "August 2021 - December 2022"
        },
        {
            position: "Software Engineer",
            company: "PopcornApps (Accellor)",
            duration: "October 2019 - June 2021"
        }
    ]
    return (
        <div className="text-black p-10 ml-5 text-xl">
            <h2 className="text-2xl font-bold text-gray-900">EXPERIENCE <span className="text-red-500">SUMMARY</span></h2>
            <div  style={{ borderLeft: "dotted", borderRight: "none", borderBottom: "none", borderTop: "none" }} >
                <div className="space-y-6 mt-8" style={{ marginLeft: "-17px" }}>
                    {experiences.map((exp, index) => <div className="flex space-x-4 items-start" key={index}>
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                            {index + 1}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                            <p className="text-gray-700">{exp.company}</p>
                            <p className="text-gray-500">{exp.duration}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );

    // <div className='text-black p-10 ml-5 text-xl'>
    //     <h1 className='text-4xl custom-border-bottom'>EXPERIENCE <span className='text-red-500'>SUMMARY</span></h1>
    //     <ul>
    //         {experiences.map((item, index) =>
    //             <li key={index} className='m-6'>
    //                 <div className='flex'>
    //                     <div>{index + 1}</div> <div>{item.position}</div>
    //                 </div>
    //                 <div >
    //                     {item.company}
    //                 </div>
    //                 <div >
    //                     {item.duration}
    //                 </div>
    //             </li>
    //         )
    //         }
    //     </ul>
    // </div>
    // );
};

export default Experience;