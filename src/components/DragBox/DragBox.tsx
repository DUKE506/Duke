import { ChangeEvent, useState } from "react";
import styles from './DragBox.module.css'

interface DragProps {
    title? : string
    onChangeFiles : (file : File[]) => void;
    description : string;
    type? : 'image' | 'all';
    maxAmount : number //파일 수
}
// {onChangeFile, description} : DragProps
const DragBox = ({title, description, type, maxAmount, onChangeFiles} : DragProps) => {
    //드래그 상태 관리
    const [dragOver, setDragOver] = useState<boolean>(false);


    const fileTypes = (files: Array<File>):File[] => {
        if(type === 'all') return files;
        const acceptExtensions = ['jpg','jpeg', 'png','gif' ];
        const acceptMimeTypes = ['image/jpg','image/jpeg','image/png','image/gif']
        // const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
        // return acceptExtensions.includes(fileExtension) && acceptMimeTypes.includes(file.type)
        
        return files.filter(file => {
            const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
            return acceptExtensions.includes(fileExtension) && acceptMimeTypes.includes(file.type)
        })
    }

    //마우스가 목표 영역에 진입
    const onDragEnter = (e : React.DragEvent<HTMLLabelElement>) => {
        console.log("onDragEnter")
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    }

    //마우스가 목표 영역에 위치
    const onDragOver = (e : React.DragEvent<HTMLLabelElement>) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log("onDragOver")
    }

    //마우스가 목표 영역에 드롭
    const onDragDrop = (e : React.DragEvent<HTMLLabelElement>) =>{
        e.preventDefault();
        console.log("onDragDrop")
        console.log(e.dataTransfer.files.length)
        const dropedFiles = Array.from(e.dataTransfer.files);

        let filterFiles = fileTypes(dropedFiles);


        onChangeFiles(filterFiles)
        setDragOver(false);
    }

    //마우스가 목표 영역에 떠남
    const onDragLeave = (e : React.DragEvent<HTMLLabelElement>) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log("onDragLeave")
        setDragOver(false);
    }

    const onChangeFile = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
            let droppedFiles = Array.from(e.target.files);
            const validationFiles = fileTypes(droppedFiles);
            const FilteredFiles= limitAmount(validationFiles)

            onChangeFiles(FilteredFiles)
        }
    }

    const getAcceptValue = (): string => {
        return type === 'image' ? "image/*" : "*/*";
    }

    //최대 파일 수 제한 함수
    const limitAmount = (files : File[] ):File[] => {
        if(files.length > maxAmount){
            return files.slice(0,maxAmount);
        }
        return files;
    }




    return(
        <div className={`${styles.drag_box}`}>
            <span className={`${styles.label} ${dragOver ? styles['span_active'] : ''}`}>
                {title}
            </span>
            <label 
                className={`${styles.drop_area} ${dragOver ? styles['area_active'] : ''}`}
                onDragEnter={onDragEnter} 
                onDragOver={onDragOver} 
                onDrop={onDragDrop} 
                onDragLeave={onDragLeave}
                htmlFor="fileUpload"
                >
                    {description}
            </label>
            <input 
                id="fileUpload"
                className={styles.hidden}
                type="file"
                accept={getAcceptValue()}
                multiple
                onChange={onChangeFile}
            />
        </div>
    )
}

export default DragBox;