import React from "react";
import { InputGroup, FormControl, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  let { updateSearch, handleSearch } = props;
  let { position, location } = props.values;

  return (
    <div>
      <Col sm={12}>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="location">
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="location"
            aria-label="location"
            aria-describedby="location"
            value={location}
            onChange={updateSearch}
            id="location"
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="position">
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="position"
            aria-label="position"
            aria-describedby="position"
            value={position}
            onChange={updateSearch}
            id="position"
          />
        </InputGroup>
        <Button
          className="d-flex justify-content-center align-items-center text-center mt-2 search-button"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Search
        </Button>
      </Col>
    </div>
  );
}
