import { Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/:jobId" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
