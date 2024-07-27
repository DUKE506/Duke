import styles from './InputField.module.css'

type valueType = string | number

interface InputFieldProps {
    label?: string;
    labelSize?: string;
    gap?: string;
    type?: string;
    placeholder?: string;
    value?: valueType;
    name? : string;
    // onChange?: (value: string) => void;
    onChange?: (key: string, value: string | Date | null,) => void;
}

const InputField = ({ label, labelSize, gap, type, placeholder, value, name, onChange }: InputFieldProps) => {

    //핸들러에 키, 값 전달
    const OnHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.name)
        console.log(e.target.value)
        onChange && onChange(e.target.name, e.target.value);
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
                        name={name}
                        placeholder={placeholder}
                        // value={value}
                        onChange={OnHandleChange} />
                    :
                    <input
                        className={styles.input}
                        name={name}
                        data-placeholder={type == 'date' ? placeholder : null}
                        type={type}
                        placeholder={placeholder}
                        onChange={OnHandleChange}
                        required

                        aria-required="true"
                    // value={value}
                    />
            }

        </div>
    )
}

export default InputField;