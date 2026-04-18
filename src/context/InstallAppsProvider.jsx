import { useState, createContext } from "react";


export const InstallAppsContext = createContext();

const InstallAppsProvider = ({ children }) => {
    const [installApps, setInstallApps] = useState([]);

    const data = {
        installApps,
        setInstallApps,
    };

    return (
        <InstallAppsContext.Provider value={data}>
            {children}
        </InstallAppsContext.Provider>
    );
};

export default InstallAppsProvider;