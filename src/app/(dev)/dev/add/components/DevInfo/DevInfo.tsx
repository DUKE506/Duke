import InputField from "@/components/InputField/InputField";
import styles from './DevInfo.module.css'

const DevInfo = () => {
    return(
        <div className={styles.devinfo}>
            <InputField label="Title" type="text" placeholder="Title" />
            <InputField label="Explain" type="textarea" placeholder="Explain" />
            <InputField label="Duration" type="date" placeholder="YYYY MM DD"/>
            <InputField />
        </div>
    )
}

export default DevInfo;