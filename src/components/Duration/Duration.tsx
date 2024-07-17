import React from 'react'
import InputField from '../InputField/InputField';
import styles from './Duration.module.css'

interface DurationProps {
    label? : string;
    subLabel1? : string;
    subLabel2? : string;
    value1? : string;
    value2? : string;
}

const Duration = (
    {label, subLabel1, subLabel2, value1, value2}
    :DurationProps
) => {
  return (
    <div className={styles.duration}>
        <label className={styles.label}>
            {label}
        </label>
        <div className={styles.inputs}>
            <InputField label={subLabel1} type='date' labelSize='label-small' gap="gap-half"/>
            <InputField label={subLabel2} type='date' labelSize='label-small' gap="gap-half"/>
        </div>
    </div>
  )
}

export default Duration
