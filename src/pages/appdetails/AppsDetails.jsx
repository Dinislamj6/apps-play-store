import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hook/useApps';
import { BiDownload, BiSolidLike } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import { AiTwotoneLike } from 'react-icons/ai';
import { HashLoader } from 'react-spinners';
// import { InstallAppsContext } from '../../context/InstallAppsContext';
import { toast } from 'react-toastify';
import { InstallAppsContext } from '../../context/InstallAppsProvider';

const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const expectedApp = apps.find(app => app.id === Number(id))

    const { installApps, setInstallApps } = useContext(InstallAppsContext)
    console.log(installApps);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <HashLoader color='#9F62F2' />
        </div>
    }

    const handelInstallApps = (expectedApp) => {
        console.log(expectedApp);
        const existinstall = installApps.find(item => item.id == expectedApp.id)
        if (existinstall) {
            toast.error((`${expectedApp.title} is already installed`))
            return
        }
          setInstallApps([...installApps, expectedApp])
            toast.success(`${expectedApp.title} is installed!`)


    }


    return (
        <div className='max-w-7xl mx-auto'>

            <div className='shadow-2xl p-4 flex items-center flex-col md:flex-row gap-4 my-10'>

                <div>
                    <img src={expectedApp?.image} alt="apps" className='h-[300px] w-auto' />
                </div>
                <div>
                    <div>
                        <h2 className='text-2xl font-bold'>{expectedApp?.title}</h2>
                        <p>Developed by: <span className='text-purple-600'>{expectedApp?.companyName}</span></p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 items-center md:gap-10  mt-10 justify-between'>

                        <div className='space-y-2 flex flex-col items-center'>
                            <FaDownload className='font-bold text-3xl' color='green' />
                            <h2 className='font-semibold text-xl'>Downloads</h2>
                            <p className='font-bold text-2xl'>{expectedApp?.downloads}</p>
                        </div>
                        <div className='space-y-2 flex flex-col items-center'>
                            <IoStarSharp className='font-bold text-3xl' color='orange' />
                            <h2 className='font-semibold text-xl'>Average Ratings</h2>
                            <p className='font-bold text-2xl'>{expectedApp?.ratingAvg}</p>
                        </div>
                        <div className='space-y-2 flex flex-col items-center'>
                            <BiSolidLike className='font-bold text-3xl' color='purple' />
                            <h2 className='font-semibold text-xl'>Total Reviews</h2>
                            <p className='font-bold text-2xl'>{expectedApp?.reviews}</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button onClick={() => handelInstallApps(expectedApp)} className='btn bg-[#00D390]'>Install Now ({expectedApp?.size}MB)</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppsDetails;