import { useState } from "react";
import styles from './Select.module.css'


/**
 * 추가 개발 사항
 * - 외부 영역 클릭 시 options 영역 닫기
 */


interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    label?: string;
    name?: string;
    data: SelectOption[];
    onChange?: (key: string, value: string) => void;
}



const Select = ({ label, data, onChange, name='' }: SelectProps) => {
    const [display, setDisplay] = useState('Select');
    const [isShow, setIsShow] = useState(false);

    const onSelectValue = (option: SelectOption) => {
        setDisplay(option.label)
        setIsShow(!isShow);
        onChange && onChange(name, option.value);
    }

    const onShow = () => {
        setIsShow(!isShow);
    }


    return (
        <div className={styles.select}>
            <label className={`${styles.label} ${isShow ? styles['label_focus'] : ''}`}>
                {label}
            </label>
            <div className={styles.select_wrap}>
                <label className={`${styles.display} ${isShow ? styles['focus'] : ''} ${display == 'Select' ? styles['placeholder'] : ''}`} onClick={onShow}>
                    {display}
                </label>
                <ul className={`${styles.options} ${isShow ? styles['show'] : ''}`}>
                    {
                        data.map((option, idx) => {
                            return (
                                <li className={`${styles.item} `} key={`${idx}-${option.value}`} value={option.value} onClick={() => onSelectValue(option)}>
                                    {option.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Select;