import {Link as LINKS} from 'react-router-dom'

const Links = ({props}) => {
    return (<>
    <LINKS to={props.link} className="d-block  m-2 py-2 fs-5 link">{props.title}</LINKS>
    </>)
}

export default Links