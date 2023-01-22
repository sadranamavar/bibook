import logo from './bibook-logo.png'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return(
        <Link to='/'> 
            <img src={logo} alt="" className=' mb-5 dashboard-logo'/>
        </Link>
    )
}

export default Logo