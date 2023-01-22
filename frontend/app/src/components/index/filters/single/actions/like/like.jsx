import { useState }  from 'react'
import IconNo from './heart.png'
import IconYes from './heart(1).png'
import './like.css'

const LikeBtn = () => {
    const [Like, setLike] = useState(IconNo)
    const ClickHandle = () =>{
        if (Like == IconNo){
        setLike(IconYes)}
        else {
        setLike(IconNo)}
    }
    return(<div className='col' onClick={ClickHandle}>
    <img src={Like} className='like-btn' alt="" />
    </div>)
}


export default LikeBtn