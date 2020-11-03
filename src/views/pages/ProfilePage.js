import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile");
    return function cleanup() {
      document.body.classList.remove("profile");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/rex_profile.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Rex Yamana <br />
              </h4>
              <h6 className="description">Systems Engineer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Accomplished Systems Engineer, skilled in system administration, 
              technical technical troubleshooting and customer support.
              Striving to build a career around cloud technology, specializing in DevOps.
              </p>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Technical Proficiency
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Experience
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" md="10">
                          <p>System administration for Linux (Ubuntu/RHEL) and Windows Servers</p>
                        </Col>                                              
                      </Row>
                    </li>                  
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" md="10">
                          <p>Various web tech stacks</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" md="10">
                          <p>AWS services including VPC, EC2, S3, CloudFront, ELBs</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" md="10">
                          <p>React Framework</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" md="10">
                          <p>Express</p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" id="following">
              <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="follows">
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10">
                            <p>Troubleshooting and resolving complex technical issues</p>
                          </Col>                                              
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10">
                            <p>Providing excellent customer service and experience</p>
                          </Col>                                              
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10">
                            <p>End-to-end API testing</p>
                          </Col>                                              
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10">
                            <p>System monitoring, optimization and maintenance</p>
                          </Col>                                              
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10">
                            <p>CDN configuration and optimization</p>
                          </Col>                                              
                        </Row>
                      </li>
                    </ul>
                  </Col>
                </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
