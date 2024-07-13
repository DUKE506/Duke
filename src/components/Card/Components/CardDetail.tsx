import styles from './CardDetail.module.css'

interface CardDetailProps {
  author: string;
}


const CardDetail = ({ author }: CardDetailProps) => {
  return (
    <div className={styles.hover}>
      <div className={styles.detail}>
        {author}
      </div>
    </div>
  )
}

export default CardDetail
