import React, { useState, useEffect } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import Search from "../../Components/Search/Search";
import JobList from "../../Components/JobList/JobList";
import { getJobResults } from "../../Api/jobs";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [searchPosition, setSearchPosition] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const defaultJobSearch = async () => {
    const jobs = await getJobResults();
    setJobList(jobs);
    setIsLoading(false);
  };

  useEffect(() => {
    defaultJobSearch();
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    const jobs = await getJobResults(searchPosition, searchLocation);
    setJobList(jobs);
    setIsLoading(false);
  };

  const updateSearch = async (e) => {
    const currentId = e.currentTarget.id;
    if (currentId == "location") setSearchLocation(e.currentTarget.value);
    else setSearchPosition(e.currentTarget.value);
  };

  const body = () => {
    return (
      <Row>
        <Col md={12}>
          <div>
            <Search
              handleSearch={handleSearch}
              updateSearch={updateSearch}
              values={{
                position: searchPosition,
                location: searchLocation,
              }}
            />
          </div>
        </Col>

        <Col md={12}>
          <div>
            <JobList jobList={jobList} />
          </div>
        </Col>
      </Row>
    );
  };

  return <Container>{isLoading ? <Spinner /> : body()}</Container>;
}

export default Home;
