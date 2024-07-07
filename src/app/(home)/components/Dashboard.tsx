import styles from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.img}>
                <div className={styles.card}>

                </div>
            </div>
            <div className={styles.title}>
                <span>
                    Welcome Duke's Site
                </span>
            </div>
        </div>
    )
}

export default Dashboard