import './detail.css'

const BookViewDetail = ({ book }) => {
  return (
    <>
      <span className="book-view-title d-block ps-5    py-2 fs-2 text-center">
        {" "}
        {book.name}{" "}
      </span>
      <div className="book-view-detail border border-2 d-flex mx-xl-auto me-xl-auto me-xxl-5 shadow-sm">
        <div className="col-6 p-3 border-1">
          <table className="table">
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.relese}</th>
              <th className="fs-5 fw-normal py-1 text-end">سال انتشار</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.length}</th>
              <th className="fs-5 fw-normal py-1 text-end">تعداد صفحات</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.file_format}</th>
              <th className="fs-5 fw-normal py-1 text-end">نوع فایل</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.file_size}</th>
              <th className="fs-5 fw-normal py-1 text-end">اندازه فایل</th>
            </tr>
          </table>
        </div>
        <div className="col-6 p-3  border-start border-1">
          <table className="table">
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.author}</th>
              <th className="fs-5 fw-normal py-1 text-end">نویسنده</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.translator}</th>
              <th className="fs-5 fw-normal py-1 text-end">مترجم</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.publisher}</th>
              <th className="fs-5 fw-normal py-1 text-end">انتشارات</th>
            </tr>
            <tr>
              <th className="fw-normal pt-2 py-1 text-center">{book.language}</th>
              <th className="fs-5 fw-normal py-1 text-end">زبان</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookViewDetail;
