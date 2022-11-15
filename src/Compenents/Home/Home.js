import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React from "react";
import LaunchFilter from "../FIlter/LaunchFilter";
import LaunchDetailsPanel from "../LanchDetailsPanel/LanchDetailsPanel";

function Home() {
  const [LaunchingDetails, setLaunchingDetails] = React.useState(null);
  React.useEffect(() => {
    let baseURL = "https://api.spaceXdata.com/v3/launches?limit=100";
    var searchParam = window.location.search.replace('?','');
    if(searchParam!==undefined&&searchParam!==null)
    {
        baseURL = baseURL +"&"+ searchParam;
    }
    axios.get(baseURL).then((response) => {
      setLaunchingDetails(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <LaunchFilter></LaunchFilter>
          </Col>
          <Col sm={10}>
            <LaunchDetailsPanel
              LaunchDetailsList={LaunchingDetails}
            ></LaunchDetailsPanel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>2</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
