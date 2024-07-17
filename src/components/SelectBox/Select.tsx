import { useState } from "react";
import styles from './Select.module.css'


/**
 * 추가 개발 사항
 * - 외부 영역 클릭 시 options 영역 닫기
 */


interface SelectOption{
    value : string | number;
    label : string;
}

interface SelectProps{
    label? : string;
    data: SelectOption[];
}



const Select = ({label, data}:SelectProps) => {
    const [display, setDisplay] = useState('Select');
    const [isShow, setIsShow] = useState(false);

    const onSelectValue = (label : string) => {
        setDisplay(label)
        setIsShow(!isShow);
        console.log(label);
    }

    const onShow = () => {
        setIsShow(!isShow);
    }

    return(
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
                        data.map((option, idx)=>{
                            console.log(option.value == '')
                            return(
                                <li className={`${styles.item} `} key={`${idx}-${option.value}`} value={option.value} onClick={()=>onSelectValue(option.label)}>
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