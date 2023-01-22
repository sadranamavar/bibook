import './menu.css'
import icon from './icon.png'

const Menu = ({props}) => {
    return (
        <>
            <img src={icon} className='my-auto d-block 
             rounded-3 dashboard-menu-icon' onClick={props} alt="" />
        </>
    )
}

export default Menu