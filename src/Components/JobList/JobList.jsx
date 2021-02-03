import React from 'react';
import Job from '../Job/Job';
import {Row, Col} from "react-bootstrap";
import uniqid from "uniqid";

function JobList(props) {
	const { jobs } = props;
	return (
		<div>
			<Row>
            {jobs?.map((job) => (
					<Col key={uniqid} sm={12} md={6} lg={3}>
						<Job job={job} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default JobList;