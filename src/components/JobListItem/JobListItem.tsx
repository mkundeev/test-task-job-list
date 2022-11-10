import React from "react";
import { IJob } from "../../models";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface JobProps {
  job: IJob;
}
export default function JobListItem({ job }: JobProps) {
  return (
    <Link
      to={`/${job.id}`}
      className="py-3 px-4 rounded mb-4 flex bg-bgGrey shadow "
    >
      <img
        src={job.pictures[0]}
        alt={job.name}
        className="w-16 h-16 rounded-full shrink-0 mt-10"
      />
      <div className="ml-4 text-lg text-textColorSecondary">
        <div className="flex justify-between text-sm mb-3.5 items-center">
          <div className="flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>{job.updatedAt}</p>
        </div>
        <p className="text-textColorDGrey mb-1.5">{job.title}</p>
        <p className="text-base mb-1.5">{job.name}</p>
        <div className="flex items-center">
          <FaMapMarkerAlt />
          <p className="text-base ml-2">{job.address}</p>
        </div>
      </div>
    </Link>
  );
}
