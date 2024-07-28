import InputField from "@/components/InputField/InputField";
import styles from './Project.module.css'
import Duration from "@/components/Duration/Duration";
import Select from "@/components/SelectBox/Select";
import { ProjectData } from "../../page";

interface DevInfoProps {
    dev: ProjectData
    // onDevChange: <K extends keyof DevData>(filed: K, value: DevData[K]) => void;
    onDevChange: (field: string, value: string | Date | null) => void;

    // image
}



const ProjectInfo = ({ dev, onDevChange }: DevInfoProps) => {
    const datas = [
        { label: "Select", value: "" },
        { label: "예정", value: "Scheduled" },
        { label: "진행중", value: "Running" },
        { label: "중단", value: "Stopped" },
        { label: "종료", value: "Done" },
    ]




    return (
        <div className={styles.projectinfo}>
            <InputField
                label="Title"
                type="text"
                name="title"
                placeholder="Title"
                onChange={(key, value) => onDevChange(key as keyof ProjectData, value)}
            />
            <Duration
                label="Duration"
                subLabel1="Start"
                subLabel2="End"
                onChange={(key, value) => onDevChange(key as keyof ProjectData, value)}
            />
            <Select
                label="Status"
                data={datas}
                name='status'
                onChange={(key: string, value: string) => onDevChange(key as keyof ProjectData, value)}
            />
            <InputField
                label="Explain"
                type="textarea"
                name="explain"
                placeholder="Explain"
                onChange={(key, value) => onDevChange(key as keyof ProjectData, value)}
            />
        </div>
    )
}

export default ProjectInfo;