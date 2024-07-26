import styles from './InputField.module.css'

type valueType = string | number 

interface InputFieldProps {
    label? : string;
    labelSize? : string;
    gap? : string;
    type? : string;
    placeholder? : string;
    value? : valueType;
    onChange?: (value: string) => void;

}

const InputField = ({label, labelSize, gap, type, placeholder,value, onChange}:InputFieldProps) => {

    const OnHandleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
        onChange && onChange(e.target.value);
    }

    return (
        <div className={`${styles.inputfield} ${gap ? styles[gap] : ''}`}>
            <label className={`${styles.label}  ${labelSize ? styles[labelSize] : ''}`}>
                {label}
            </label>
            {
                type == 'textarea' ? 
                <textarea 
                className={styles.textarea} 
                placeholder={placeholder}
                value={value}
                onChange={OnHandleChange}/>
                :
                <input 
                className={styles.input} 
                data-placeholder={ type == 'date' ? placeholder : null }
                type={type}
                placeholder={placeholder}
                onChange={OnHandleChange}
                required
                
                aria-required="true"
                value={value}
                />
            }
            
        </div>
    )
}

export default InputField;