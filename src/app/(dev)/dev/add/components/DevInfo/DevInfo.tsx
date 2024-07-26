import InputField from "@/components/InputField/InputField";
import styles from './DevInfo.module.css'
import Duration from "@/components/Duration/Duration";
import Select from "@/components/SelectBox/Select";
import { DevData } from "../../page";

interface DevInfoProps {
    dev : DevData
    onDevChange : (filed : keyof DevData, value : any) => void;
    // image
}



const DevInfo = ({dev,onDevChange}:DevInfoProps) => {
    const datas = [
        {label : "Select", value : ""},
        {label : "예정", value : "Scheduled"},
        {label : "진행중", value : "Running"},
        {label : "중단", value : "Stopped"},
        {label : "종료", value : "Done"},
    ]

    


    return(
        <div className={styles.devinfo}>
            <InputField 
                label="Title" 
                type="text" 
                placeholder="Title"
                onChange={(value)=>onDevChange('title', value)}
                />
            <Duration 
            label="Duration" 
            subLabel1="Start" 
            subLabel2="End"/>
            <Select label="Status" data={datas}/>
            <InputField 
                label="Explain" 
                type="textarea" 
                placeholder="Explain" 
                onChange={(value)=>onDevChange('explain', value)}
                />
        </div>
    )
}

export default DevInfo;