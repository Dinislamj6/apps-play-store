import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsProvider';
import useApps from '../../hook/useApps';

const Dashboard = () => {
     const { installApps } = useContext(InstallAppsContext)
       const {apps} = useApps() 
       const uninstallApps = apps.length - installApps.length;
       console.log(uninstallApps); 
    const data = [
        { name: 'Installed', value: installApps.length, fill: '#0088FE' },
        { name: 'Uninstalled', value: uninstallApps, fill: '#FFBB28' },
    ]
    return (
        <div className='my-10 shadow-lg p-10 rounded-md border border-slate-300 container mx-auto ring-blue-500/50'>
            <h2 className='font-semibold text-3xl mb-16 text-center'>Installed and uninstalled apps</h2>
            <PieChart style={{ width: '100%',
                 maxWidth: '500px',
                  maxHeight: '80vh',
                  margin:"auto",
                   aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default Dashboard;