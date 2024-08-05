import Link from "next/link"
import styles from "./Navigation.module.css"

const Navigation = async () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/career'>Career</Link>
                </li>
                <li>
                    <Link href='/dev'>Dev</Link>
                </li>
                <li>
                    <Link href='/life'>Life</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation