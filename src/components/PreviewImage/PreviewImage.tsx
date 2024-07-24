import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from './PreviewImage.module.css'
import PreviewBox from './components/PreviewBox';

interface PreviewProps{
    files : File[];
    onRemove : (idx:number) => void;
}


const PreviewImage = ({files, onRemove} :  PreviewProps) => {
    //const [previews, setPreview] = useState<string[]>([]);
    

    useEffect(()=>{
        console.log('미리보기 시작')
        files.forEach(e => console.log(e.name))
        console.log('미리보기 끝')


    },[files])

    const onDelete = ( id :number) => {
        onRemove(id);
    }

    return(
        <div className={`${files?.length === 0 ? styles['none'] : ''}`}>
            <ul className= {styles.prev_container}>
                {
                    files?.map((file, idx)=>{
                        const imageUrl = URL.createObjectURL(file)
                        return(
                            <li key={`image-${idx}`}>
                                <PreviewBox 
                                idx={idx}
                                image={imageUrl} 
                                onClick={onDelete}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PreviewImage;