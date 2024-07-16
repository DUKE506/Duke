import InputField from "@/components/InputField/InputField";
import styles from './DevInfo.module.css'
import Duration from "@/components/Duration/Duration";

interface Dev {
    title : string,
    explain : string,
    startDate : Date,
    endDate : Date,
    // image
}



const DevInfo = () => {
    return(
        <div className={styles.devinfo}>
            <InputField label="Title" type="text" placeholder="Title" />
            <InputField label="Explain" type="textarea" placeholder="Explain" />
            {/* <InputField label="Duration" type="date" placeholder="YYYY MM DD"/>
            <InputField label="Duration" type="date" placeholder="YYYY MM DD"/> */}
            <Duration title="Duration" subTitle1="Start" subTitle2="End"/>
        </div>
    )
}

export default DevInfo;