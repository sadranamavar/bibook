import './download.css'

const BookViewDownload = ({ props }) => {
  return (
    <>
      <div className="">
        <a href={props}>
          <div
            className=" p-3 mt-5 shadow-sm 
            text-center book-view-btn-download"
            href="/"
          >
            Download
          </div>
        </a>
      </div>
    </>
  );
};
export default BookViewDownload;
