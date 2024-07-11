import Card from '@/components/Card/Card'
import styles from './page.module.css'



export default function HomePage() {

    const CardList = [
        {
            Name : "card-1",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-2",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-3",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-4",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-5",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-6",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-7",
            Author : "Duke",
            Created : "2024-04-08"
        },{
            Name : "card-8",
            Author : "Duke",
            Created : "2024-04-08"
        },
    ]


    return (
        <div className={styles.home}>
            <ul className={styles.grid}>
                {
                    CardList.map((card, idx)=> {
                        return(
                            <li className={styles.li}>
                                <Card 
                                    key={idx} 
                                    Name={card.Name} 
                                    Created={card.Created}
                                    Author={card.Author}
                                    />
                            </li>
                            
                        )
                    })
                }
            </ul>
        </div>
    )
}



