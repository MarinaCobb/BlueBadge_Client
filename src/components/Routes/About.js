import React from 'react';
import { Container, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import "./about.css"

const About = () => {
  return (
    <div>
    <Container>
              <div className="flip-card-about">
                <div className="flip-card-inner-about">
                  <div className="flip-card-front-about">
                    <Card className="border border-white">
                      {/* <CardTitle>{card.id}</CardTitle> */}
                      <CardBody>
                      <CardTitle>About Me</CardTitle>
                      <CardText>Newbie at developing.</CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="flip-card-back-about">
                  <Card className="border border-white">
                      <CardBody>
                    <CardTitle>About Flash Cards</CardTitle>
                      <CardText>I hope you will find this useful in your studies.</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>


    </div>
    )
}



export default About;