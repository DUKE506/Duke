import Image from 'next/image';
import styles from './PreviewBox.module.css'

interface PreviewBoxProps{
    image : string;
    onClick : (id :number) => void;
    idx : number
}

const PreviewBox = ({image, onClick, idx} : PreviewBoxProps) => {
    console.log(image)
    return(
        <div className={styles.preview_box}>
            <button className={styles.btn} type="button" onClick={()=>onClick(idx)}/>
            <Image 
            className={styles.img}
            src={image} 
            alt="이미지" 
            layout="fill"
            objectFit='scale-down'
            />
        </div>
    )
}

export default PreviewBox;