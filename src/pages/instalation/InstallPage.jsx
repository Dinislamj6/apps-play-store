import React, { useContext } from 'react';
import InstallAppsProvider, { InstallAppsContext } from '../../context/InstallAppsProvider';
import { FaDownLong } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
// import { InstallAppsContext } from '../../context/InstallAppsContext';

const InstallPage = () => {
    const { installApps, setInstallApps } = useContext(InstallAppsContext)

    const handelUninstall = (app) => {
        console.log(app);
        const restApps = installApps.filter(iApps => iApps.id != app.id)
        setInstallApps(restApps)

    }

    return (
        <div className='container mx-auto my-10 h-screen'>
            <div className='text-center my-10'>
                <h2 className='text-purple-400 font-bold text-3xl'>Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                installApps.map((app, ind) => {
                    return <div key={ind}>
                        <div className='flex justify-between  items-center gap-4 shadow-xl p-4 rounded-md bg-slate-100 mb-4 inset-shadow-indigo-500'>
                            <div className='flex gap-2'>
                                <img src={app.image} alt="" className='h-[50px] w-auto' />
                                <div>
                                    <h2 className='font-semibold text-xl'>{app.title}</h2>

                                    <div className='flex gap-4'>
                                        <div className='flex items-center text-green-400 font-bold'>
                                            <FaDownload color='green' />
                                            {app.downloads}
                                        </div>

                                        <div className='flex items-center text-orange-400 font-bold'>
                                            <IoIosStar color='orange' />
                                            {app.ratingAvg}
                                        </div>

                                        <div className='flex items-center text-[#627382] font-bold'>
                                            <p>{app.size}MB</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <button onClick={() => handelUninstall(app)} className='btn bg-[#00D390] text-white'>Uninstall</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default InstallPage;