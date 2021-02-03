import React, { useEffect, useState } from "react";
import { getOneJob } from "../../Api/jobs";
import { Row, Col, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";



function JobDetails(props) {
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getJobInfo();
  }, []);

  const getJobInfo = async() =>{
      const jobId = props.match.params.jobId;
      const job = await getOneJob(jobId);
      setJobDetails(job);
      setIsLoading(false)
  }

  const htmlJobDescription = ()=>{
      return{__html: jobDetails.description }
  }

  return <div>
    <Container>
          <Row className="d-flex justify-content-center align-items-start mt-5">
              <Col lg={6} md={12} className="p-5">
                  <img src={jobDetails.company_logo} alt="company-logo" className="logo"/>
              </Col>
              <Col lg={6} md={12} className="px-4">
                  <h2>{jobDetails.company}</h2>
                  <div dangerouslySetInnerHTML={htmlJobDescription()} />
                  <Link to="/"><Button>go back</Button></Link>
              </Col>
          </Row>
      </Container>

  </div>;
}

export default JobDetails;
