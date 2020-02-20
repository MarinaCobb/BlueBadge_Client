import React from 'react';
import { Container, Card, CardSubtitle, CardBody } from 'reactstrap';
import "./about.css"

const About = () => {
  return (
    <div>
    <Container>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card>
                      {/* <CardTitle>{card.id}</CardTitle> */}
                      <CardSubtitle>About Me</CardSubtitle>
                      <CardBody>Newbie at developing.</CardBody>
                    </Card>
                  </div>

                  <div className="flip-card-back">
                    <Card>
                    <CardSubtitle>About Flash Cards</CardSubtitle>
                      <CardBody>I hope you will find this useful in your studies.</CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>


    </div>
    )
}



export default About;