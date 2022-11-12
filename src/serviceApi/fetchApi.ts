import axios from "axios";
import { IJob } from "../models";

const URL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export async function fetchAllJobs() {
  const { data } = await axios(URL);
  return data;
}
export async function fetchSinglJob(id: string) {
  const { data } = await axios.get<IJob[]>(URL);
  const job = data.find((job) => job.id === id);
  return job;
}
