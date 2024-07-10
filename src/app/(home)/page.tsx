import Card from '@/components/Card/Card'
import styles from './page.module.css'



export default function HomePage() {

    const CardList = [
        {
            Name : "card-1",
            Created : "2024-04-08"
        },{
            Name : "card-2",
            Created : "2024-04-08"
        },{
            Name : "card-3",
            Created : "2024-04-08"
        },{
            Name : "card-4",
            Created : "2024-04-08"
        },{
            Name : "card-5",
            Created : "2024-04-08"
        },{
            Name : "card-6",
            Created : "2024-04-08"
        },{
            Name : "card-7",
            Created : "2024-04-08"
        },{
            Name : "card-7",
            Created : "2024-04-08"
        },
    ]


    return (
        <div className={styles.home}>
            <div className={styles.grid}>
                {
                    CardList.map((card, idx)=> {
                        return(
                            <Card key={idx} Name={card.Name} Created={card.Created}/>
                        )
                    })
                }
            </div>
        </div>
    )
}



