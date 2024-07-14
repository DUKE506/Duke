'use client'
import Button from "@/components/Button/Button";
import styles from './Filter.module.css'
import { useRouter } from "next/navigation";


const Filter = () => {
    const router = useRouter();

    const onMoveAdd = () => {
        router.push('dev/add')
    }

    return (
        <div className={styles.filter}>
            <Button color="main" name='Add' onClick={onMoveAdd} />
        </div>
    )
}


export default Filter;



