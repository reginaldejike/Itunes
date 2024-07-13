import { useOutletContext } from "react-router-dom";
import "./Pagination.scss";

interface Props {
  totalpage: number | undefined;
  currentPage: number;
  handlePageChange: (url: string | null) => void;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
}

const Pagination = () => {
  const { totalpage, currentPage, handlePageChange, nextPageUrl, prevPageUrl } =
    useOutletContext<Props>();
  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        <button
          onClick={() => {
            handlePageChange(prevPageUrl);
          }}
          disabled={!prevPageUrl}
          className="prev-btn"
        >
          Previous
        </button>
        <span className="page">
          Page {currentPage} of {totalpage}
        </span>
        <button
          onClick={() => {
            handlePageChange(nextPageUrl);
          }}
          disabled={!nextPageUrl}
          className="next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
