import { Outlet } from "react-router-dom";


const Filters = () => {
  return (
    <>
      <div className="mt-5  body book-view-body  pt-4">
        <div className="bg-light container my-4 book-view shadow container pb-3">
            <Outlet />
        </div>
      </div>
    </>
  );
};

export default Filters;
