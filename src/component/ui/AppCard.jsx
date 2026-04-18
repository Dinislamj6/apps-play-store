import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <Link to={`/apps/${app.id}`} className='card  h-full'>
            <div className="w-full h-full bg-base-100 shadow-sm transition delay-100 duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 shadow-cyan-500/50">
                <figure>
                    <img
                        src={app.image}  alt='apps image' className='h-[200px] w-auto' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{app.title}</h2>
                    <div className='flex justify-between items-center gap-4'>
                        <span className='bg-green-100 text-green-500 flex items-center py-1 px-2 font-semibold gap-2 rounded-md'>
                            <FaDownload></FaDownload> {app.downloads}</span>
                        <span className='bg-orange-100 text-orange-500 flex items-center gap-2 py-1 px-2 font-semibold rounded-md'>  <FaStar></FaStar>  {app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;