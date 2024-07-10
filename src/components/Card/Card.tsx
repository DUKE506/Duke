import Image from 'next/image'
import MyImg from '../../../public/images/Duke.png'
import styles from './Card.module.css'

const DevCard = ({Name, Created} : {Name : string, Created : string}) => {
    return (
        <div className={styles.card}>
            <figure className={styles.figure}>
                <Image alt='' src={MyImg} layout='responsive'/>
            </figure>
            <div className={styles.info}>
                <span>
                    {Name}
                </span>
                <span>
                    {Created}
                </span>
            </div>
        </div>
        

    )
}

export default DevCard;