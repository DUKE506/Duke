import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from './PreviewImage.module.css'
import PreviewBox from './components/PreviewBox';

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

    const onDelete = ( id :number) => {
        console.log(id)
    }

    return(
        <div>
            <ul className= {styles.prev_container}>
                {
                    previews?.map((img, idx)=>{
                        return(
                            <li key={`image-${ImageBitmapRenderingContext}`}>
                                <PreviewBox 
                                idx={idx}
                                image={img} 
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