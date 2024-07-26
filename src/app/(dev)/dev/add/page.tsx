'use client'
import { useState } from "react";
import styles from "./page.module.css"
import DevInfo from "./components/DevInfo/DevInfo";
import DevImg from "./components/DevImg/DevImg";
import Button from "@/components/Button/Button";
import { ProjectStatus } from "@prisma/client";

export interface DevData{
    title? : string;
    explain? : string;
    startAt? : Date | null;
    endAt? : Date | null;
    status?:ProjectStatus | null;
}

const AddDev = () => {
    const [dev, setDev] = useState<DevData>({
        title : '',
        explain : '',
        startAt : null,
        endAt : null,
        status: null
    })

    const handleDevChange = (filed: keyof DevData, value : any) => {
        setDev(prevDev => ({
            ...prevDev,
            [filed] : value
        }))
    }



    const handleCreate = async () => {
        try {
            console.log('handleCreate 들어옴')
            const res = await fetch('/api/dev/add',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(dev),
            });

            if(!res.ok){
                throw new Error('프로젝트 생성 실패');
            }
            const result = await res.json();
            console.log('결과 : ', result);
            
        } catch (error) {
            console.error("[Error][Client][dev] 프로젝트 생성 에러!!" + error)
        }
    }

    return (
        <div className={styles.dev}>
            <div className={styles.wrap}>
                <DevInfo 
                    dev={dev}
                    onDevChange={handleDevChange} />
                <DevImg />
            </div>
            <div>
                <Button name="Add" color="main" onClick={handleCreate}/>
            </div>
        </div>
    )
}

export default AddDev;