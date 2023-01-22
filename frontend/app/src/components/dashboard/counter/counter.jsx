import Chats from './chats/chats'
import './counter.css'
import Library from './library /library'
import Profile from './profile/profile'

const Counter = () => {
    return (<div className='row align-self-start  mx-auto mt-3'>
    <Library />
    <div className='row'>
    <Chats />
	<Profile />
    </div>
    
    </div>)
}

export default Counter
