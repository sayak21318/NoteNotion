import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note<br/>Notion</h1>
              <p className="subtitle">One safe place for all your notes</p>
                      </div>
                      

                      <div className="buttonContainer">
                          <div>
                              <a href="/login">
                                  <Button size="lg" className="landingbutton">
                                      Login
                                  </Button>
                              </a>
                          </div>
                          <div>
                              <a href="/register">
                                  <Button
                                      size="lg"
                                      className="landingbutton"
                                      variant="outline-primary"
                                  >
                                      Signup
                                  </Button>
                              </a>
                          </div>
                      </div>

           
          </div>
        </Row>
      </Container>
    </div>
  );
};
