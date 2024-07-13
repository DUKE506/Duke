import Image from 'next/image'
import MyImg from '../../../public/images/Duke.png'
import styles from './Card.module.css'
import CardDetail from './Components/CardDetail'
import Link from 'next/link'

const Card = ({ Id, Name, Created, Author }
    : { Id: number, Name: string, Created: string, Author: string }) => {
    return (
        <div className={styles.card}>
            <figure className={styles.figure}>
                <Link href={`/dev/${Id}`}>
                    <Image
                        className={styles.img}
                        alt={`Image ${Id}`}
                        src={MyImg}
                        fill
                        objectFit='cover'
                    />
                    <CardDetail author={Author} />
                </Link>


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