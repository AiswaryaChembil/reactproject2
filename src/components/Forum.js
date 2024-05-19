import React from 'react';
import './Forum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMessage, faLightbulb, faCircle, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function Forum() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='text-center'>
        <span>FORUM</span>
        <h1>Discuss & Evolve</h1>
        <p>Engage with Fellow Professionals: Join the program Forum Discussion!</p>
        <div className="search-bar mt-3 border rounded-pill">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search the forum..."
              className="border-0 search-input mb-0"
            />
            <Button variant="dark" className="search-btn rounded-pill">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </div>
        <div className='icon-bar mt-3 d-flex justify-content-center'>
          <div className='bg-info text-center rounded-pill icon-wrapper'>
            <FontAwesomeIcon icon={faMessage} className="icon px-3 mt-2 text-danger" size="1x" />
          </div>
          <h6 className='mx-2 mt-2'>START DISCUSSING</h6>
          <FontAwesomeIcon icon={faCircle} className="nav-separator me-5" />
          <h6 className='me-2 mt-2'>VIEW TOPICS</h6>
          <div className='bg-danger text-center rounded-pill icon-wrapper'>
            <FontAwesomeIcon icon={faLightbulb} className="icon px-3 mt-2 text-info" size="1x" />
          </div>
        </div>
        <div className='mt-4'>
          <FontAwesomeIcon icon={faArrowDownLong} size="1x" />
        </div>
      </div>
    </div>
  );
}

export default Forum;
