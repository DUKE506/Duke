'use client'


import { useState } from "react";
import styles from "./page.module.css"
import DevInfo from "./components/DevInfo/DevInfo";
import DevImg from "./components/DevImg/DevImg";
import Button from "@/components/Button/Button";


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
            <div className={styles.wrap}>
                <DevInfo dev={dev} />
                <DevImg />
            </div>
            <div>
                <Button name="Add" color="main" />
            </div>
        </div>
    )
}

export default AddDev;