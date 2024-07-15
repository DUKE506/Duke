import InputField from "@/components/InputField/InputField";


const DevInfo = () => {
    return(
        <div>
            <InputField label="Title" type="text" placeholder="Title" />
            <InputField label="Explain" type="textarea" placeholder="Explain" />
            <InputField />
            <InputField />

        </div>
    )
}

export default DevInfo;