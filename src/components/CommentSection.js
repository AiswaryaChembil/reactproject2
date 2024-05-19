import React from 'react';
import { Container, Row, Col, Button, Dropdown, Card } from 'react-bootstrap';
import './CommentSection.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSearch } from '@fortawesome/free-solid-svg-icons';
import profile1 from '../assets/pro1.png';
import profile2 from '../assets/pro2.png';
import profile3 from '../assets/pro3.png';
import profile4 from '../assets/pro4.png';
import profile5 from '../assets/pro5.png';
import profile6 from '../assets/pro6.png';
import profile7 from '../assets/pro7.png';
import profile8 from '../assets/pro8.png';
import profile9 from '../assets/pro9.png';
import profile10 from '../assets/pro10.png';
import profile11 from '../assets/pro11.png';
import profile12 from '../assets/pro12.png';
import profile13 from '../assets/pro13.png';
import cardimg1 from '../assets/card-img1.png';
import cardimg2 from '../assets/imgcard2.png';
import ellipse1 from '../assets/Ellipse1.png';
import ellipse2 from '../assets/Ellipse2.png';

function CommentSection() {
  const currentDate = new Date().toLocaleDateString();
  
  const profiles = [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile9, profile10, profile11, profile12, profile13];
  const names = ['Ambadi', 'Sruthy', 'James', 'Sruthy', 'Ambadi', 'Sruthy', 'Ambadi', 'Sruthy', 'Ambadi', 'Sruthy', 'Ambadi', 'Alen', 'James'];
  const messages = ['What are the key principles of coding?', 'How does guide facilitate accurate medical billing?', 'What are the major sections within the guide?', 'How often is the guide updated?', 'What is the purpose of modifiers in coding?', 'What are the differences between and ICD codes?', 'What is the significance of Level II codes in CPT?', 'How does guide handle telehealth services?', 'How are codes categorized within the guide?', 'What are the implications of incorrect coding?', 'What is the purpose of the guide?', 'How are codes organized within the guide?', 'What is the role of modifiers?']

  return (
    <Container className="comment-section my-5">
      <Row>
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
              <span className="fs-4px">Latest Discussion as of</span>
              <div className="red-box mx-2"></div>
              <span className="fs-4px">{currentDate}</span>
            </div>
            <Dropdown className="drop-down-bg rounded-pill p-2 mt-2 mt-md-0">
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FontAwesomeIcon icon={faLightbulb} className="text-info" size="1x" />
                <span className="fs-4px mx-1 fw-bold">All Topics</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Item1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Item2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search-bar border rounded-pill mt-3 mt-md-4">
            <input type="text" className="form-control search-input border-0 m-1" placeholder="Search Topics..." />
            <Button className="btn search-btn bg-white text-dark rounded-pill me-1">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
          {profiles.map((profile, index) => (
            <div key={index} className="profile-info my-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="profile-image">
                      <img src={profile} alt="Profile" className="profile-image" />
                    </div>
                    <span className="ml-2">{messages[index]} <br /> <span className="fs-4px">posted by {names[index]}</span></span>
                  </div>
                </div>
                <div className="d-flex mt-2 mt-md-0">
                  <Button className="btn btn-primary me-2 bg-btn rounded-pill border-0 text-dark"><span className="fs-4px">12 Responds</span></Button>
                  <Button className="btn btn-secondary text-white bg-dark"><span className="fs-4px">View Answer</span></Button>
                </div>
              </div>
              <hr className="" style={{ borderTop: '1px solid #ccc' }} />
            </div>
          ))}
          <Button className="btn border text-dark rounded-pill bg-white mb-2"><span className="fs-4px">Load more</span></Button>
        </Col>
        <Col md={4} className="mt-7 mt-md-0">
          <Card className="bg-col-2 text-center mb-4 mb-md-5">
            <Card.Body>
              <Card.Title>Top Contributor <br /> this week</Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <img src={cardimg1} alt="Profile" className="card-img1 bg-white" />
                    <br />
                    <span className="ml-2">Jishnu Ambadi</span>
                  </div>
                </div>
                <p className="mt-4">You can be next one! Be a part of USA’s 1st CPT Program Directory!</p>
              </Card.Text>
              <Button className="btn btn-primary me-2 bg-dark rounded-pill border-0 text-white"><span className="fs-4px p-2">Join Community $ Ask</span></Button>
            </Card.Body>
          </Card>
          <Card className="card2-bg text-white text-center">
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center align-items-center mt-5 position-relative">
                <div className="position-relative">
    <img src={ellipse2} alt="Image 1" className="" style={{ width: '150px', height: '200px' }} />
    <div className="position-absolute top-50 start-50 translate-middle">
      
      <div className="position-relative">
        <img src={ellipse1} alt="Image 2" className="" style={{ width: '150px', height: '200px' }} />
        <div className="position-absolute top-50 start-50 translate-middle">
         
          <img src={cardimg2} alt="Image 3" className="" style={{ width: '150px', height: '170px' }} />
        </div>
      </div>
    </div>
  </div>
                </div>
                <span className="ml-2">E-BOOK</span>
                <p className="mt-4">Charting Paths: Program Through a Student's Eyes</p>
              </Card.Text>
              <Button className="btn btn-primary me-2 card2-bg rounded-pill border-0 text-white mb-5"><span className="fs-4px p-2">Get the guide</span></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CommentSection;
