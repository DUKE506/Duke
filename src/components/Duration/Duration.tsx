import React, { useState } from 'react'
import InputField from '../InputField/InputField';
import styles from './Duration.module.css'

interface DurationProps {
    label?: string;
    subLabel1?: string;
    subLabel2?: string;
    value1?: string;
    value2?: string;
    onChange: (key: string, value: string | Date | null) => void;
}

const Duration = (
    { label, subLabel1, subLabel2, value1, value2, onChange }
        : DurationProps
) => {

    const [startAt, setStartAt] = useState<Date>();
    const [endAt, setEmdAt] = useState<Date>();



    return (
        <div className={styles.duration}>
            <label className={styles.label}>
                {label}
            </label>
            <div className={styles.inputs}>
                <InputField
                    label={subLabel1}
                    type='date'
                    name='startAt'
                    labelSize='label-small'
                    gap="gap-half"
                    onChange={(key, value) => onChange(key, value)}
                />
                <InputField
                    label={subLabel2}
                    type='date'
                    name='endAt'
                    labelSize='label-small'
                    gap="gap-half"
                    onChange={(key, value) => onChange(key, value)}
                />
            </div>
        </div>
    )
}

export default Duration
