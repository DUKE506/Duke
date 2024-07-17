import InputField from "@/components/InputField/InputField";
import styles from './DevInfo.module.css'
import Duration from "@/components/Duration/Duration";
import Select from "@/components/SelectBox/Select";

interface DevProps {
    title : string,
    explain : string,
    startDate : Date,
    endDate : Date,
    // image
}



const DevInfo = () => {
    const datas = [
        {label : "Select", value : ""},
        {label : "예정", value : "예정"},
        {label : "진행중", value : "진행중"},
        {label : "종료", value : "종료"},
    ]



    return(
        <div className={styles.devinfo}>
            <InputField label="Title" type="text" placeholder="Title"/>
            <InputField label="Explain" type="textarea" placeholder="Explain" />
            <Duration label="Duration" subLabel1="Start" subLabel2="End"/>
            <Select label="Status" data={datas}/>
        </div>
    )
}

export default DevInfo;