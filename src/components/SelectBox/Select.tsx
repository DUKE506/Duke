
interface SelectOption{
    value : string | number;
    label : string;
}

interface SelectProps{
    label? : string;
    data: SelectOption[];
}



const Select = ({label, data}:SelectProps) => {
    return(
        <div>
            <label>
                {label}
            </label>
            <ul>
                {
                    data.map((option)=>{
                        return(
                            <li key={option.value} value={option.value}>
                                {option.label}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Select;