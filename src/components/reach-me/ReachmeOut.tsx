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
        // Implement your logic for navigation or any action
        window.open(link, "_blank");
    };

    return (
        <div className='text-black p-10 ml-5 text-xl'>
            <h2 className="text-2xl font-bold text-gray-900">Reach me <span className="text-red-500">Out</span></h2>
            <div className='text-customBlue space-y-6 mt-8'>
                {experience.map((item, index) =>
                    <Link key={index} className='flex space-x-4 items-start' href='' onClick={() => takeMeThere(item.link)}>
                        <div className='m-2.5 text' style={{ color: index === 1 ? "#e65e5e" : "" }}>
                            {item.position}
                        </div>
                        <div className='text-4xl' style={{ marginLeft: index === 1 ? "33px" : "" }}>
                            <FontAwesomeIcon icon={item.icon} color={index === 1 ? 'black' : ''} />
                        </div>
                    </Link>
                )
                }
            </div>
        </div>
    );
};

export default ReachMeOut;