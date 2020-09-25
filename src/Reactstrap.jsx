import React from "react";
import {
  Media,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Progress,
  Spinner,
  Table,
  TabContent,
  TabPane,
  Row,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
function Reactstrap() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [activeTab, setActiveTab] = useState("1");
  const toggle1 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Media>
        <Media left href="#">
          <Media
            object
            src="https://placeimg.com/64/64/any/grayscale"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>Media heading</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href="#">
              <Media
                object
                src="https://placeimg.com/64/64/people"
                alt="Generic placeholder image"
              />
            </Media>
            <Media body>
              <Media heading>Nested media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Media>
      </Media>
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right style={{ background: "skyblue" }}>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
      <div>
        <Button id="UncontrolledPopover" type="button">
          Launch Popover
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <div>
        <div className="text-center">25%</div>
        <Progress value="25" />
        <br></br>
        <Progress color="success" value="50" />
        <br></br>
        <Progress color="warning" value={75}>
          You're almost there!
        </Progress>
        <br></br>
        <Progress striped color="danger" value="100" />
        <br></br>
        <Progress multi>
          <Progress animated bar value="10" />
          <Progress animated bar color="success" value="30" />
          <Progress animated bar color="warning" value="20" />
          <Progress animated bar color="danger" value="20" />
        </Progress>
      </div>
      <br></br>
      <div>
        <Spinner color="primary" />
        <Spinner size="sm" color="secondary" />
        <Spinner color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner size="sm" type="grow" color="warning" />
        <Spinner type="grow" color="info" />
      </div>
      <div>
        <Table dark bordered striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle1("1");
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle1("2");
              }}
            >
              Tab2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <Row>
        <Col md={6}>
          <div className="p-3 bg-primary my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a danger background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-3 bg-danger my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a danger background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Reactstrap;
