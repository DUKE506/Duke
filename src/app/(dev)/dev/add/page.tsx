'use client'


import { useState } from "react";
import styles from "./page.module.css"
import DevInfo from "./components/DevInfo/DevInfo";
import DevImg from "./components/DevImg/DevImg";


export interface DevData{
    title? : string;
    explain? : string;
    startDate? : Date | null;
    endDate? : Date | null;
    status?:string;
}



const AddDev = () => {
    const [dev, setDev] = useState<DevData>({
        title : '',
        explain : '',
        startDate : null,
        endDate : null,
        status:''
    })
    return (
        <div className={styles.dev}>
            
            <DevInfo dev={dev} />
            <DevImg />
        </div>
    )
}

export default AddDev;