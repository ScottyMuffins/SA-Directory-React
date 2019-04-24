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
            <Navbar style={{backgroundColor: '#0073cf'}} dark expand="lg">
                <NavbarBrand className='brand-text no-select'tag={Link} to='/SummerAssociateDirectory'>Summer Associate Directory</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.navOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link style={{color: 'white'}} className='no-select' to="/SummerAssociateDirectory">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link style={{color: 'white'}} className='no-select' to="/SummerAssociateDirectory/Directory/View-All">View All</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{color: 'white'}} className='no-select'>Search Directory</DropdownToggle>
                            <DropdownMenu right>
{/*                                 <DropdownItem id='drop-link' tag={Link} to='/SummerAssociateDirectory/Directory/View-All' className='dropdown-option'>View All </DropdownItem>
                                <DropdownItem divider /> */}
                                <DropdownItem id='drop-link' tag={Link} to='/SummerAssociateDirectory/Directory/By-Name' className='dropdown-option'>By Name</DropdownItem>
                                <DropdownItem id='drop-link' tag={Link} to='/SummerAssociateDirectory/Directory/By-Office' className='dropdown-option'>By Office</DropdownItem>
                                <DropdownItem id='drop-link' tag={Link} to='/SummerAssociateDirectory/Directory/By-School' className='dropdown-option'>By School</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNav;