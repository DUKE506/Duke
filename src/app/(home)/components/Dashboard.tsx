import styles from './Dashboard.module.css'
import Image from 'next/image'
import MyImg from '../../../../public/images/Duke.png'

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.img}>
                <Image alt='' src={MyImg} layout='responsive'  width={250} height={250}  className={styles.card}/>
            </div>
            <div className={styles.title}>
                <span>
                    Welcome Dukes Site
                </span>
            </div>
        </div>
    )
}

export default Dashboard