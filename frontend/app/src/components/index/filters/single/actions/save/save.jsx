import { useState } from "react"
import './save.css'
import IconNo from './bookmark-white.png'
import IconYes from './bookmark.png'

const SaveBtn = () => {
    const [Save, setSave] = useState(IconNo)
    const ClickHandle = () => {
        if (Save == IconNo)
        setSave(IconYes)
        else 
        setSave(IconNo)
    }
    return(
        <div className='col' onClick={ClickHandle}>
    <img src={Save} className='save-btn' alt="" />
    </div>
    )
}


export default SaveBtn