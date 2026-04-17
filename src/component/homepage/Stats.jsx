import React from 'react';

const Stats = () => {
    return (
        <div className="bg-purple-500 space-y-10 p-10">
            <h2 className='text-white font-bold text-4xl text-center'>Trusted by Millions, Built for You</h2>

            <div className='flex justify-center flex-col lg:flex-row  gap-10 text-center text-white'>

                <div className='text-center'>
                      <p>Total Downloads</p>
                      <h2 className='text-5xl font-bold'>29.6M</h2>
                      <p>21% more than last month</p>
                </div>
                <div className='text-center'>
                      <p>Total Reviews</p>
                      <h2 className='text-5xl font-bold'>906K</h2>
                      <p>46% more than last month</p>
                </div>
                <div className='text-center'>
                      <p>Active Apps</p>
                      <h2 className='text-5xl font-bold'>132+</h2>
                      <p>31 more will Launch</p>
                </div>
                
            </div>
        </div>
    );
};

export default Stats;