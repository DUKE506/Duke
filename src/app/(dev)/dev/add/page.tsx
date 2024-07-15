'use client'

import InputField from "@/components/InputField/InputField";
import { useState } from "react";
import DevInfo from "./components/DevInfo/DevInfo";


const AddDev = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            {/* <div>
                dev 작성페이지
            </div> */}
            <div>
                <DevInfo />
            </div>
        </div>
    )
}

export default AddDev;