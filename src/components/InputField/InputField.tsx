import styles from './InputField.module.css'

type valueType = string | number 

interface InputFieldProps {
    label? : string;
    type? : string;
    placeholder? : string;
    value? : valueType;
    onChange? : (value : valueType)=> void;

}

const InputField = ({label, type, placeholder,value, onChange}:InputFieldProps) => {
    const OnHandleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }
    return (
        <div className={styles.inputfield}>
            <label className={styles.label}>
                {label}
            </label>
            <input className={styles.input} placeholder={placeholder} onChange={OnHandleChange}/>
        </div>
    )
}

export default InputField;