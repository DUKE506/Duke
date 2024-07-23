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
    const lengthCompare = (files:File[]):boolean => {
        return files.length >= maxAmount;
    }


    const addFiles = useCallback((newFiles:File[]) => {
        setFiles(prevFiles => {
            const unduplicatedFiles = newFiles.filter(newFile => !removeDuplicateFiles(newFile, prevFiles))
            console.log(unduplicatedFiles);

            if(lengthCompare(files)){
                console.log("여기옴")
                alert(`최대 ${maxAmount}개의 파일까지 업로드 가능합니다.`);
                return prevFiles;
            }
            //기존 2개이나 2개가 추가되는경우
            const sumFiles = [...prevFiles, ...unduplicatedFiles]
            if(lengthCompare(sumFiles)){
                console.log("기존+추가 max넘음")
                console.log(sumFiles.slice(0,maxAmount))
                return sumFiles.slice(0,maxAmount);
            }

            return sumFiles;
        })
    },[maxAmount, removeDuplicateFiles, lengthCompare]);

    return {files, addFiles}
}

export default useFileManagement;