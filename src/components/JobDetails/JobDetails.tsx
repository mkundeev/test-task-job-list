import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglJob } from "../../serviceApi/fetchApi";
import { IJob } from "../../models";
import Contacts from "../Contacts";
import SaveShare from "../SaveShare";
import GoBackBtn from "../GoBackBtn";
import { dateFormater } from "../../services/dateFormater";

export default function JobDetails() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<IJob>();
  const [date, setDate] = useState<string>("");
  const [salary, setSalary] = useState<string>("");

  const { jobId } = useParams<{ jobId: string }>();

  useEffect(() => {
    async function fetchJob() {
      if (!jobId) {
        return;
      }
      try {
        const job = await fetchSinglJob(jobId);
        setJob(job);
        setLoading(false);
        if (job?.createdAt) {
          setDate(dateFormater(job.createdAt));
        }
        if (job?.salary) {
          setSalary(job.salary.replace(/k/g, " 000"));
        }
      } catch (error) {
        setLoading(false);
      }
    }
    fetchJob();
  }, [jobId]);

  return (
    <>
      {!loading ? (
        <div className=" mx-auto min-w-[320px] max-w-[414px] px-3.5 py-6 text-textDetailPage/[.82] text-lg sm:flex sm:max-w-[1418px] sm:pl-20">
          <div className="sm:max-w-[774px]">
            <div className="mb-3 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-textColorDGrey">
                Job Details
              </h2>
              <GoBackBtn styles="sm:hidden ml-2" />
              <SaveShare styles="hidden sm:flex" />
            </div>
            <p className="border-b-textColorSecondary border-b opacity-25"></p>
            <div className="mt-3 flex text-base sm:hidden">
              <SaveShare styles="sm:hidden flex" />
            </div>
            <button
              type="button"
              className="hidden mt-11 w-32 h-12 rounded-lg bg-bgBtn text-white hover:shadow-lg sm:block"
            >
              Apply now
            </button>
            <div className="flex mt-8">
              <p className="text-2xl font-bold text-textColorDGrey ">
                {job?.title}
              </p>
              <div className="hidden sm:block sm:min-w-[161px] sm:ml-4">
                <p className="text-2xl font-bold text-textColorDGrey min-w-[203px]">
                  {"\u20AC " + salary}
                </p>
                <p>Brutto per year</p>
              </div>
            </div>

            <div className="flex items-center mt-1.5 justify-between text-textColorDGrey/[.6]">
              <p className=" text-sm">{date}</p>
              <div className="sm:hidden">
                <p>Brutto per year</p>
                <p className="text-2xl font-bold text-textColorDGrey">
                  {"\u20AC " + salary}
                </p>
              </div>
            </div>
            <p className="mt-4">{job?.description}</p>
            <h3 className="mt-11 text-xl font-bold text-textColorDGrey">
              Responsibilities
            </h3>
            <p>{job?.description}</p>
            <h3 className="mt-11 text-xl font-bold text-textColorDGrey">
              Compensations&Benefits
            </h3>
            <ul className="list-square list-inside sm:list-outside">
              {job?.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <div className="flex justify-center sm:justify-start">
              <button
                type="button"
                className="mt-11 w-32 h-12 rounded-lg bg-bgBtn text-white hover:shadow-lg "
              >
                Apply now
              </button>
            </div>

            <h2 className="mt-32 text-3xl font-bold text-textColorDGrey">
              Attached images
            </h2>
            <p className="border-b-textColorSecondary border-b opacity-25 mt-2.5"></p>
            <ul className="mt-5 flex gap-2.5 flex-wrap">
              {job?.pictures.map((picture, index) => (
                <li
                  key={index}
                  className="w-[calc(50%_-_0.625rem)] sm:w-[209px]"
                >
                  <img
                    src={picture}
                    alt={picture + index}
                    className="rounded-lg w-full h-28 object-cover"
                  />
                </li>
              ))}
            </ul>
            <h2 className="mt-16 text-3xl font-bold text-textColorDGrey">
              Additional Info
            </h2>
            <p className="border-b-textColorSecondary border-b opacity-25 mt-2.5"></p>
            <p className="mt-4"> Empoyment type</p>
            <ul className="mt-2.5 flex gap-2">
              {job?.employment_type.map((employment) => (
                <li
                  key={employment}
                  className="rounded-lg border border-slate-500 p-4 bg-slate-300 sm:w-[220px]"
                >
                  <p className="text-slate-500 font-bold text-base text-center">
                    {employment}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5">Benefits</p>
            <ul className="mt-2.5 flex gap-2">
              {job?.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-lg border border-amber-300 p-4 bg-amber-100 sm:w-[220px]"
                >
                  <p className="text-amber-600 font-bold text-base text-center">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="mt-14 text-3xl font-bold text-textColorDGrey sm:hidden">
              Contacts
            </h2>
            <p className="border-b-textColorSecondary border-b opacity-25 mt-2.5  sm:hidden"></p>
            <GoBackBtn styles="hidden sm:flex w-[213px] mt-[97px] sm:relative sm:left-[-75px]" />
          </div>
          {job && (
            <div className="mt-5 sm:mt-0 sm:ml-[84px] sm:max-w-[402px] sm:grow">
              <Contacts data={job} />
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
