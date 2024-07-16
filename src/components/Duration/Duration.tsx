import React from 'react'
import InputField from '../InputField/InputField';
import styles from './Duration.module.css'

interface DurationProps {
    title? : string;
    subTitle1? : string;
    subTitle2? : string;
    value1? : string;
    value2? : string;
}

const Duration = (
    {title, subTitle1, subTitle2, value1, value2}
    :DurationProps
) => {
  return (
    <div className={styles.duration}>
        <label className={styles.label}>
            {title}
        </label>
        <div className={styles.inputs}>
            <InputField label={subTitle1} type='date' labelSize='label-small'/>
            {/* <span> ~ </span> */}
            <InputField label={subTitle2} type='date' labelSize='label-small'/>
        </div>
    </div>
  )
}

export default Duration
