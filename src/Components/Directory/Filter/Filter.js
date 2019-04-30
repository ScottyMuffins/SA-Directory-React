import React, {useEffect} from 'react';
import {Label, FormGroup, InputGroup, InputGroupAddon, Row, Col} from 'reactstrap';
import OfficeModal from '../Modals/Modal';
import AutoSuggest from './AutoSuggest/AutoSuggest';

const Filter = (props) => { 

    useEffect(() => {
        props.toggle();
    });

    return(
        <div className='filter-control-wrapper'>
            {props.sortOrder==='ViewAll' &&
                <FormGroup>
                    <Label><h3>View All Associates</h3></Label>
                </FormGroup>}
            {props.sortOrder==='ByName' &&
                <FormGroup>
                    <FormGroup>
                        <Label for='associate-Search'><h3>Search by Name</h3></Label>
                    </FormGroup>
                    <AutoSuggest allAssociates={props.allAssociates} handleFilter={props.handleFilter}></AutoSuggest>
                </FormGroup>}
            {props.sortOrder==='ByOffice' &&
                <div>
                    <FormGroup>
                        <Label for='office-Select'><h3>Search by Office</h3></Label>
                    </FormGroup>
                    <Row /* className='filter-grid-container' */>
                        <Col lg="6">
                            <FormGroup>
                                <InputGroup>
                                    <select id='office-Select' onChange={props.handleChange} className="form-control">
                                        <option value="0">- Select Office -</option>
                                        {props.offices.map(office => <option key={office.officeId} value={office.officeId}>{office.officeDescription}</option>)}
                                    </select>
                                    <InputGroupAddon addonType="append">
                                        <OfficeModal currentOffice={props.currentOffice} officeContacts={props.currentOfficeContacts} toggleModalButton={props.handleChange}></OfficeModal>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <select id='employee-Select' className="form-control" onChange={props.handleChange}>
                                        <option value="0">- Select Employee -</option>
                                        {props.filteredAssociates && props.filteredAssociates.map(emp => <option key={emp.employeeID} value={emp.employeeID}>{emp.firstName + ' ' + emp.lastName}</option>)}
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>}
            {props.sortOrder==='BySchool' &&
                <div>
                    <FormGroup>
                        <Label for='school-Select'><h3>Search by School</h3></Label>
                    </FormGroup>
                    <Row /* className='filter-grid-container' */>
                        <Col lg="6">
                            <FormGroup>
                                <select id='school-Select' className="form-control" onChange={props.handleChange}>
                                        <option value="0">- Select School -</option>
                                        {props.schools && props.schools.map(school => <option key={school.lawSchoolDescription} value={school.lawSchoolDescription}>{school.lawSchoolDescription}</option>)}
                                </select>
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <select id='employee-Select' className="form-control" onChange={props.handleChange}>
                                        <option value="0">- Select Employee -</option>
                                        {props.filteredAssociates && props.filteredAssociates.map(emp => <option key={emp.employeeID} value={emp.employeeID}>{emp.firstName + ' ' + emp.lastName}</option>)}
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>}
        </div>
    );
}

export default Filter;