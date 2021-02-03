import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Job(props) {
    const { job } = props;
    console.log("ComponentJob: job", job)

    return (
        <div>
            <Col md={3} className="my-3">
                                <Card className="">
                                    <Card.Img variant="top" src={job.company_logo  ? job.company_logo : 'http://placehold.it/50x50'} className=""/>
                                    <Card.Body>
                                        <Card.Title className="">{job.company}</Card.Title>
                                        <Link to={`/details/${job.id}`}>
                                        <Button variant="primary">See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                                </Col>
        </div>
    )
}

export default Job
