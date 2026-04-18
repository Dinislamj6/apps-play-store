import React, { useContext } from 'react';
import InstallAppsProvider, { InstallAppsContext } from '../../context/InstallAppsProvider';
// import { InstallAppsContext } from '../../context/InstallAppsContext';

const InstallPage = () => {
    const { installApps, setInstallApps } = useContext(InstallAppsContext)

    const handelUninstall = (app) => {
        console.log(app);
        const restApps = installApps.filter(iApps => iApps.id != app.id)
        setInstallApps(restApps)

    }

    return (
        <div className='container mx-auto my-10'>
            {
                installApps.map((app, ind) => {
                    return <div key={ind}>
                        <div className='flex justify-between  items-center gap-4 shadow-xl p-4 rounded-md bg-slate-100 mb-4'>
                            <div className='flex gap-2'>
                                <img src={app.image} alt="" className='h-[50px] w-auto' />
                                <div>
                                      <h2 className='font-semibold text-xl'>{app.title}</h2>

                                </div>
                            </div>
                            <button onClick={() => handelUninstall(app)} className='btn bg-[#00D390]'>Uninstall</button>
                        </div>
                    </div>

                })
            }
        </div>
    );
};

export default InstallPage;