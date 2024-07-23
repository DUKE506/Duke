import DragBox from '@/components/DragBox/DragBox'
import styles from './DevImg.module.css'
import { useState } from 'react'
import PreviewImage from '@/components/PreviewImage/PreviewImage';
import useFileManagement from '@/components/DragBox/useFileManagement';


const DevImg = () =>{
    const maxAmount = 3;

    const {files, addFiles} = useFileManagement(maxAmount);

    return(
        <div className={styles.img_container}>
                <DragBox 
                    title='Thumbnail'
                    description='대표이미지를 등록해주세요.'
                    type='image'
                    onChangeFiles={addFiles}
                    maxAmount={3}
                    />
                <PreviewImage files={files}/>
        </div>
    )
}

export default DevImg