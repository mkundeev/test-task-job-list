import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglJob } from "../../serviceApi/fetchApi";
import { IJob } from "../../models";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface IMarker {
  text: string;
  lat: number;
  lng: number;
}

const AnyReactComponent = ({ text }: IMarker) => <div>{text}</div>;

export default function JobDetails() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<IJob>();

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
        console.log(job);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchJob();
  }, [jobId]);

  return (
    <div className="mx-auto w-96 px-3.5 py-6">
      {!loading ? (
        <div>
          <h2 className="mb-3 text-3xl font-bold text-textColorDGrey">
            Job Details
          </h2>
          <p className="border-b-textColorSecondary border-b opacity-25"></p>
          <div className="mt-3 ">
            <div>
              <p>icon</p>
              <p>Save to my list</p>
            </div>
            <div>
              <p>icon</p>
              <p>Share</p>
            </div>
          </div>
          <p>{job?.title}</p>
          <div>
            <p>{job?.address}</p>
            <div>
              <p>Brutto per year</p>
              <p>{job?.salary}</p>
            </div>
          </div>
          <p>{job?.description}</p>
          <h3>Responsibilities</h3>
          <p>{job?.description}</p>
          <h3>Compensations&Benefits</h3>
          <ul>
            {job?.benefits.map((benefit) => (
              <li key={benefit}>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
          <button type="button">Apply now</button>
          <h3>Images</h3>
          <ul>
            {job?.pictures.map((picture, index) => (
              <li key={index}>
                <img src={picture} alt={picture + index} />
              </li>
            ))}
          </ul>
          <h3>Additional Info</h3>
          <p>Empoyment type</p>
          <ul>
            {job?.employment_type.map((employment) => (
              <li key={employment}>
                <p>{employment}</p>
              </li>
            ))}
          </ul>
          <p>Benefits</p>
          <ul>
            {job?.benefits.map((benefit) => (
              <li key={benefit}>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
          <h3>Contacts</h3>
          <div>
            <p>{job?.name}</p>
            <div className="flex items-center">
              <FaMapMarkerAlt />
              <p className="text-base ml-2">{job?.address}</p>
            </div>
            <p>{job?.phone}</p>
            <p>{job?.email}</p>
          </div>
          <div style={{ height: "220px", width: "100%" }}>
            {job?.location.lat && job?.location.long && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                  lat: job.location.lat,
                  lng: job.location.long,
                }}
                defaultZoom={11}
                yesIWantToUseGoogleMapApiInternals
              >
                <AnyReactComponent
                  lat={job.location.lat}
                  lng={job.location.long}
                  text="My Marker"
                />
              </GoogleMapReact>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
