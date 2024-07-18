import InputField from "@/components/InputField/InputField";
import styles from './DevInfo.module.css'
import Duration from "@/components/Duration/Duration";
import Select from "@/components/SelectBox/Select";
import { DevData } from "../../page";

interface DevInfoProps {
    dev : DevData
    // image
}



const DevInfo = ({dev}:DevInfoProps) => {
    const datas = [
        {label : "Select", value : ""},
        {label : "예정", value : "예정"},
        {label : "진행중", value : "진행중"},
        {label : "종료", value : "종료"},
    ]



    return(
        <div className={styles.devinfo}>
            <InputField label="Title" type="text" placeholder="Title"/>
            
            <Duration label="Duration" subLabel1="Start" subLabel2="End"/>
            <Select label="Status" data={datas}/>
            <InputField label="Explain" type="textarea" placeholder="Explain" />
        </div>
    )
}

export default DevInfo;