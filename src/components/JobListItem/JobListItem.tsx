import React from "react";
import { IJob } from "../../models";
import FiveStars from "../FiveStars";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { dateFormater } from "../../services/dateFormater";
import { Link } from "react-router-dom";

interface JobProps {
  job: IJob;
}
export default function JobListItem({ job }: JobProps) {
  const date = dateFormater(job?.createdAt);
  return (
    <Link
      to={`/${job.id}`}
      className="py-3 px-4  mb-4 flex rounded shadow bg-bgGrey hover:bg-white sm:hover:bg-bgGrey sm:bg-white sm:py-6 sm:justify-between "
    >
      <div className="flex">
        <img
          src={job.pictures[0]}
          alt={job.name}
          className="w-16 h-16 rounded-full shrink-0 mt-10 object-cover sm:w-[85px] sm:h-[85px] sm:mt-0"
        />
        <div className="ml-4 text-lg text-textColorSecondary sm:ml-6 sm:max-w-[760px]">
          <div className="flex justify-between text-sm mb-3.5 items-center sm:hidden">
            <FiveStars />
            <p>{date}</p>
          </div>
          <p className="text-textColorDGrey mb-1.5 sm:text-xl sm:font-bold">
            {job.title}
          </p>
          <p className="text-base mb-1.5">{job.name}</p>
          <div className="flex items-center">
            <FaMapMarkerAlt />
            <p className="text-base ml-2">{job.address}</p>
          </div>
        </div>
      </div>
      <div className="hidden items-center ml-8 text-textColorSecondary text-base sm:flex">
        <FiveStars className={"text-textDetailPage"} />
        <div className="flex flex-col justify-between h-full items-end ml-8 min-w-[138px]">
          <CiBookmark className="w-8 h-8" />
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
