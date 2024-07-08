import Image from 'next/image'
import MyImg from '../../../public/images/Duke.png'

const DevCard = () => {
    return (
        <figure>
            <Image alt='' src={MyImg}/>
            
        </figure>
    )
}

export default DevCard;