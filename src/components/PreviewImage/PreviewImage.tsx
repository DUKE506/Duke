import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from './PreviewImage.module.css'

interface PreviewProps{
    files : File[] | null;
}


const PreviewImage = ({files} :  PreviewProps) => {
    const [previews, setPreview] = useState<string[]>([]);

    useEffect(()=>{

        if( files && files?.length > 0){
            const convertPreview = files?.map((file, idx)=> URL.createObjectURL(file));
            setPreview(prev => [...prev, ...convertPreview]);
        }
        
    },[files])

    return(
        <div>
            <ul className= {styles.prev_container}>
                {
                    previews?.map((img, idx)=>{
                        return(
                            <li>
                                <Image 
                                src={img}
                                alt='aaa'
                                width={250}
                                height={150}
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