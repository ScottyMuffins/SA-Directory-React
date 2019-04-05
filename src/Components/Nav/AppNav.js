import React, { Component } from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    NavbarToggler,  
    Collapse, 
    Nav, 
    UncontrolledDropdown,
    NavItem, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNav extends Component { 

    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          navOpen: false
        };
    }

    toggleNav(){
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand className='brand-text no-select'tag={Link} to='/'>Summer Associates Directory</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.navOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className='nav-option  no-select' to="/">Home</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='nav-option  no-select'>Directory</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to='/Directory/View-All' className='dropdown-option'>View All </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag={Link} to='/Directory/By-Name' className='dropdown-option'>By Name</DropdownItem>
                                <DropdownItem tag={Link} to='/Directory/By-Office' className='dropdown-option'>By Office</DropdownItem>
                                <DropdownItem tag={Link} to='/Directory/By-School' className='dropdown-option'>By School</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNav;