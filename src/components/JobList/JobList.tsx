import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { IJob } from "../../models";
import JobListItem from "../JobListItem";
import { fetchAllJobs } from "../../serviceApi/fetchApi";

export default function JobList() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);

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
        <ul className="mx-auto container max-w-[414px] px-2 py-2 sm:max-w-[1400px]">
          {jobs?.map((job) => (
            <li key={job.id}>
              <JobListItem job={job} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
