import DragBox from '@/components/DragBox/DragBox'
import styles from './DevImg.module.css'
import { useState } from 'react'
import PreviewImage from '@/components/PreviewImage/PreviewImage';


const DevImg = () =>{
    const [files, setFiles] = useState<File[]>([]);

    const onAddFiles = (newFiles: File[]) => {
        if(files.length >= 3) {
            alert("최대 3개의 이미지를 설정할 수 있습니다.")
        }
        setFiles(prevFiles => {
            const updatedFiles = [...prevFiles, ...newFiles];
            if(files.length >= 3) {
                alert("최대 3개의 이미지를 설정할 수 있습니다.")
            }            
            return updatedFiles.slice(0, 3);
        })
    }
    return(
        <div className={styles.img_container}>
                <DragBox 
                    title='Thumbnail'
                    description='대표이미지를 등록해주세요.'
                    type='image'
                    onChangeFiles={onAddFiles}
                    maxAmount={3}
                    />
                <PreviewImage files={files}/>
        </div>
    )
}

export default DevImg