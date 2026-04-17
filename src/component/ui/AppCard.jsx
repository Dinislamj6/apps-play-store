import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {
    return (
        <div className='card  h-full'>
            <div className="w-full h-full bg-base-100 shadow-sm">
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
        </div>
    );
};

export default AppCard;