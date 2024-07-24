import Card from '@/components/Card/Card'
import styles from './page.module.css'
import Filter from './components/filter/filter'



export default function HomePage() {

    const CardList = [
        {
            Id: 1,
            Name: "card-1",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 2,
            Name: "card-2",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 3,
            Name: "card-3",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 4,
            Name: "card-4",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 5,
            Name: "card-5",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 6,
            Name: "card-6",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 7,
            Name: "card-7",
            Author: "Duke",
            Created: "2024-04-08"
        }, {
            Id: 8,
            Name: "card-8",
            Author: "Duke",
            Created: "2024-04-08"
        },
    ]


    return (
        <div className={styles.home}>
            <Filter />
            <ul className={styles.grid}>
                {
                    CardList.map((card, idx) => {
                        return (
                            <li className={styles.li} key={`${card.Name}-${idx}`}>
                                <Card
                                    key={idx}
                                    Id={card.Id}
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



