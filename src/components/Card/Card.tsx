import Image from 'next/image'
import MyImg from '../../../public/images/Duke.png'
import styles from './Card.module.css'

const Card = ({Name, Created, Author} : {Name : string, Created : string, Author : string}) => {
    return (
        <div className={styles.card}>
            <figure className={styles.figure}>
                <Image
                    className={styles.img} 
                    alt='' 
                    src={MyImg} 
                    layout='responsive'
                    />
            </figure>
            <div className={styles.info}>
                <span className={styles.card_title}>
                    {Name}
                </span>
                <span className={styles.card_date}>
                    {Created}
                </span>
            </div>
        </div>
        

    )
}

export default Card;