import React from "react";
import "./LaunchDetailsPanel.css";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
function LanchDetailsPanel(props) {
  return (
    <CardGroup style={{borders:"10px"}}>
      {props.LaunchDetailsList?.map((item, index) => {
        const missionIds = item.mission_id.map((Id) => <li key={Id}>{Id}</li>);
        return (
          <Card key={index} style={{ minWidth: "18rem" , margin:"10px" }}>
            <Card.Img variant="top" src={item.links.mission_patch_small} />
            <Card.Body>
              <Card.Title>{item.mission_name}</Card.Title>
              <table>
                <tbody>
                  <tr>
                    <td>Mission Ids:</td>
                    <td>{missionIds}</td>
                  </tr>
                  <tr>
                    <td>Launch Year:</td>
                    <td>{item.launch_year}</td>
                  </tr>
                  <tr>
                    <td>Successfull Landing:</td>
                    <td>{item.launch_success ? "True" : "False"}</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default LanchDetailsPanel;
