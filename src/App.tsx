import { Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      {/* <Route path="/:jobId" element={JobInfo} /> */}
    </Routes>
  );
}

export default App;
