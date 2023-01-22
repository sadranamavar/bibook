import './profile.css'
import { useContext } from 'react'
import User from '../../../../context/user';
import icon from './383148_edit_icon.png'

const Profile = () => {
	const user = useContext(User)
	return( 
	<div className='col-12 col-lg-6  row'>
	<div className='bg-light  m-3 mt-lg-3 m-lg-2 ms-lg-4  text-center rounded-4 shadow-sm'>
		<img src={user.image} alt="" className='dashboard-counter-profile-image m-3 shadow-lg'/>
		<p className='text-center fs-4'>{user.username}<img src={icon} alt="" className='d-inline dashboard-counter-profile-edit-icon ps-2'/></p>
		
	</div>
	</div>
	)
}

export default Profile
