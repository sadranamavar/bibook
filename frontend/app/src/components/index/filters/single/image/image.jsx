import './image.css'

const BookViewImage = ({props}) =>{
    return (
        <>
        <div className="col-lg-4 col-12 ">
            <img src={props.image} className=" shadow-sm mb-1 m-5 mx-auto m-lg-5 book-view-image d-block" alt={props.name} />
          </div>
        </>
    )
}

export default BookViewImage