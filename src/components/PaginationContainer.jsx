import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn  sm:btn-md  text-red-500 ${
                pageNumber === page ? 'bg-base-500 border-base-500 ' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PaginationContainer;