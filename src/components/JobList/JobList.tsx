import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { IJob } from "../../models";
import JobListItem from "../JobListItem";
import Loader from "../Loader/Loader";
import { fetchAllJobs } from "../../serviceApi/fetchApi";
import ReactPaginate from "react-paginate";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface IProps {
  itemsNumber: number;
}
export default function JobList({ itemsNumber }: IProps) {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsNumber;
  const currentItems = jobs?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs?.length / itemsNumber);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsNumber) % jobs.length;

    setItemOffset(newOffset);
  };

  async function fetchJobs() {
    try {
      const data = await fetchAllJobs();
      setJobs(data);
      setLoading(false);
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-bgPrime">
      {!loading ? (
        <div className="mx-auto container max-w-[414px] px-2 py-2 sm:max-w-[1400px]">
          <ul>
            {currentItems.map((job) => (
              <li key={job.id}>
                <JobListItem job={job} />
              </li>
            ))}
          </ul>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <MdArrowForwardIos className="w-[18px] h-[18px] text-[#7D859C]" />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <MdArrowBackIosNew className="w-[18px] h-[18px] text-[#7D859C]" />
            }
            className="flex justify-center items-center mx-auto px-[23px] h-[52px] w-full bg-white rounded shadow text-textDetailPage/[.6] font-bold text-base sm:w-fit"
            activeLinkClassName="text-[#55699E] border-b flex justify-center items-center h-full w-6"
            pageClassName="h-full flex justify-center items-center w-6"
            nextLinkClassName="hidden border-l border-[#DEE3EF] w-8  ml-[55px] h-8 items-center justify-end sm:flex "
            previousLinkClassName="hidden border-r border-[#DEE3EF] w-8 mr-[55px] h-8 flex items-center sm:flex"
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
