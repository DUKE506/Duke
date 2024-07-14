import styles from './Button.module.css'

type Color = 'main' | 'cancle'

interface ButtonProps {
    type?: 'submit' | undefined;
    name: string;
    color: Color;
    onClick?: () => void;
}


const Button = ({ type, name, color, onClick }: ButtonProps) => {
    //OnClick, Name, Width Option
    return (
        <button type={type ? type : 'button'} className={styles[color]} onClick={onClick}>
            {name}
        </button>
    )
}


export default Button;
