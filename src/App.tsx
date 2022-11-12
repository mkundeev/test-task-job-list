import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ErrorContext } from "./context/ErrorContext";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

function App() {
  const { error } = useContext(ErrorContext);
  return (
    <>
      {!error ? (
        <Routes>
          <Route path="/" element={<JobList itemsNumber={5} />} />
          <Route path="/:jobId" element={<JobDetails />} />
        </Routes>
      ) : (
        <ErrorMessage error={error} />
      )}
    </>
  );
}

export default App;
