import React from "react";
import Reactstrap from "./Reactstrap";
import { useState } from "react";
import {
  Button,
  Alert,
  UncontrolledAlert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Row,
  Col,
  UncontrolledCarousel,
  UncontrolledCollapse,
  Fade,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function App() {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const [fadeIn, setFadeIn] = useState(true);
  const toggle1 = () => setFadeIn(!fadeIn);

  const items = [
    {
      src: "https://placeimg.com/640/250/nature",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src: "https://placeimg.com/640/250/animals",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src: "https://placeimg.com/640/250/tech",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];
  return (
    <div className="App" style={{ margin: "0px 30px" }}>
      {/* Alert */}
      <Alert color="primary" fade={false}>
        This is a primary alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a primary alert —{" "}
        <a href="#" className="alert-link">
          check it out!
        </a>
      </Alert>
      <Alert color="warning">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <Alert color="secondary" isOpen={visible} toggle={onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
      <UncontrolledAlert color="info">
        I am an alert and I can be dismissed!
      </UncontrolledAlert>
      {/* Badge */}
      <Button color="primary" outline>
        Notifications <Badge color="danger">4</Badge>
      </Button>{" "}
      <Badge href="#" color="primary" pill>
        Primary
      </Badge>
      <Badge color="secondary" pill>
        Secondary
      </Badge>
      <Badge color="success" pill>
        Success
      </Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
      {/* Breadcrumb */}
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
      {/* Button Dropdown */}
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Button Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>{" "}
      <ButtonDropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
        <Button color="success">Button Dropdown</Button>
        <DropdownToggle caret color="success" />
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <br></br>
      <br></br>
      {/* Button Group */}
      <ButtonGroup>
        <Button color="warning">Left</Button>
        <Button color="success">Middle</Button>
        <Button color="danger">Right</Button>
      </ButtonGroup>
      <br></br>
      <br></br>
      {/* Button */}
      <Button color="primary">primary</Button>{" "}
      <Button outline color="warning">
        warning
      </Button>{" "}
      <Button color="primary" size="lg">
        Large Button
      </Button>{" "}
      <Button color="secondary" size="lg" block>
        Block level button
      </Button>
      {/* Card */}
      <Row>
        <Col sm="6">
          <div style={{ width: "300px" }}>
            <Card>
              <CardImg
                top
                width="100%"
                height="200px"
                src="https://picsum.photos/id/237/200/300"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col sm="6">
          <div style={{ width: "300px" }}>
            <Card inverse>
              <CardImg
                width="100%"
                height="220px"
                src="https://picsum.photos/200/300/?blur=4"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </Col>
      </Row>
      <div>
        <UncontrolledCarousel className="slider" items={items} />
      </div>
      <div>
        <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
          Toggle
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div>
        <Button color="primary" onClick={toggle1}>
          Toggle Fade
        </Button>
        <Fade in={fadeIn} tag="h5" className="mt-3">
          This content will fade in and out as the button is pressed
        </Fade>
      </div>
      <div style={{ width: "50%", margin: "30px 0px 0px 300px " }}>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <div
              style={{ width: "100px", height: "100px", background: "blue" }}
            ></div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div
              style={{ width: "100px", height: "100px", background: "blue" }}
            ></div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div
              style={{ width: "100px", height: "100px", background: "blue" }}
            ></div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div
              style={{ width: "100px", height: "100px", background: "blue" }}
            ></div>
          </Col>
        </Row>
        <br></br>
        <ListGroup>
          <ListGroupItem disabled>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </Container>
      <Reactstrap />
    </div>
  );
}

export default App;
