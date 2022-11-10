import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IJob } from "../../models";
import JobListItem from "../JobListItem";

const URL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
export default function JobList() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchJobs() {
    try {
      const { data } = await axios(URL);
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
  console.log(jobs);
  return (
    <div className="mx-auto container max-w-2xl pt-5">
      {!loading ? (
        <ul>
          {jobs.map((job) => (
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
