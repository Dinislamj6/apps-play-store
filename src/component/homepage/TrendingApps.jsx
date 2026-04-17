import React, { use, useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import AppCard from '../ui/AppCard';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';

// const appsPromise = fetch("/data.json").then(res => res.json())

const TrendingApps = () => {
    // const apps = use(appsPromise)
    // console.log(apps);
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json();

            setTimeout(() => {
                setApps(data)
                setLoading(false)
            }, 1500)
        }
        fetchData();
    }, [])


    return (
        <div className='max-w-7xl mx-auto my-[60px]'>
            <div className='text-center mb-8'>
                <h2 className='text-[#001931] font-bold text-4xl'>Trending Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {
                loading ? (<div className="min-h-screen flex items-center justify-center">
                    <HashLoader color='#9F62F2' />
                </div>) : (
                    <div className='grid grid-cols-1 gap-5  md:grid-cols-3'>
                        {
                            apps.slice(0, 9).map(app => <div key={app.id}>
                                <AppCard app={app}></AppCard>
                            </div>)
                        }
                    </div>
                )
            }
            <div className='flex justify-center mt-5'>
                <Link to={"/apps"}>
                    <button className='btn bg-purple-500 text-white'>View All</button>
                </Link>
            </div>

        </div>
    );
};

export default TrendingApps;