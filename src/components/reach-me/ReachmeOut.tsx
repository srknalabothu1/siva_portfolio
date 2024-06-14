import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const ReachMeOut = () => {
    const experience = [
        { position: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/siva-krishna-4958ba289/' },
        { position: 'GitHub', icon: faGithub, link: 'https://github.com/srknalabothu1' }
    ];

    const takeMeThere = (link: string | URL | undefined) => {
        window.open(link, "_blank");
    };

    return (
        <div className='text-black p-4 md:p-10 ml-2 md:ml-5 text-base md:text-xl'>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Reach me <span className="text-red-500">Out</span></h2>
            <div className='space-y-6 mt-8'>
                {experience.map((item, index) =>
                    <Link key={index} className='flex items-center space-x-4' href='#' onClick={() => takeMeThere(item.link)}>
                        <div className='text-lg md:text-xl' style={{ color: index === 1 ? "#e65e5e" : "#0077B5" }}>
                            {item.position}
                        </div>
                        <div className='text-3xl md:text-4xl'>
                            <FontAwesomeIcon icon={item.icon as any} color={index === 1 ? 'black' : '#0077B5'} />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ReachMeOut;
