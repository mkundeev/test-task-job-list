import React from "react";
import { IJob } from "../../models";

interface JobProps {
  job: IJob;
}
export default function JobListItem({ job }: JobProps) {
  return (
    <div className="border py-2 px-2 rounded mb-2">
      <img src={job.pictures[0]} alt={job.name} />
      <p>{job.title}</p>
      <p>{job.name}</p>
      <p>{job.address}</p>
      <p>{job.updatedAt}</p>
    </div>
  );
}
