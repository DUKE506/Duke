import { useCallback, useState } from "react";


const useFileManagement = (maxAmount : number) => {
    const [files, setFiles] = useState<File[]>([]);

    const removeDuplicateFiles = useCallback((newFile : File, existingFiles:File[]) =>{
        return existingFiles.some( existingFile =>
            existingFile.name === newFile.name &&
            existingFile.size === newFile.size &&
            existingFile.lastModified === newFile.lastModified
        );
    },[])

    //큰 경우 True
    const lengthCompare = useCallback((files:File[]):boolean => {
        return files.length > maxAmount;
    },[maxAmount]);


    const addFiles = useCallback((newFiles:File[]) => {
        setFiles(prevFiles => {
            const unduplicatedFiles = newFiles.filter(newFile => !removeDuplicateFiles(newFile, prevFiles))
            const sumFiles = [...prevFiles, ...unduplicatedFiles]
            
            if(lengthCompare(sumFiles)){
                const slicedFiles = sumFiles.slice(0, maxAmount);
                console.log(slicedFiles);
                alert(`최대 ${maxAmount}개의 파일까지 업로드 가능합니다.`);
                return slicedFiles;
            }

            return sumFiles;
        })
    },[maxAmount, removeDuplicateFiles, lengthCompare]);

    //단일 삭제
    const removeFiles = (removeIdx : number) => {
        setFiles( prevFiles => prevFiles.filter( (_, idx) => idx !== removeIdx))
    }


    return {files, addFiles, removeFiles}
}

export default useFileManagement;