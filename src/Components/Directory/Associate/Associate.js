import React from 'react';
import {Media, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import img from '../../../img/DLA_Piper_Transparent_White.png';
const Associate = (props) => { 

    return(
        <div>
            {props.currentAssociate && <div>
                <div className='name-text-wrapper'>
                    <h1 className='display-5'>{props.currentAssociate && props.currentAssociate.firstName.trim() + ' ' + props.currentAssociate.lastName.trim()}</h1>
                </div>
                <hr/>
                <div className="associate-grid-container">
                     <div className="associate-photo-wrapper"> 
                        <div className='associate-photo-custom-thumbnail' style={{backgroundImage:`url(${props.currentAssociate.imageUri === null ? img : props.currentAssociate.imageUri.replace(' ', '%20')})`}}></div>                   
                    </div>
                    <div className="media-wrapper">
                        <Media>
                            <Media body>
                                <ListGroup flush>
                                    <ListGroupItem className='assoc-info'>
                                        <ListGroupItemHeading className='assoc-info-header'>City</ListGroupItemHeading>
                                        <ListGroupItemText className='assoc-info-text'>
                                            {props.offices && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0] && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0].city}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem className='assoc-info'>
                                        <ListGroupItemHeading className='assoc-info-header'>Law School</ListGroupItemHeading>
                                        <ListGroupItemText className='assoc-info-text'>
                                            {props.currentAssociate.lawSchool} {props.currentAssociate.lawSchoolGradYear}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem className='assoc-info'>
                                        <ListGroupItemHeading className='assoc-info-header'>Undergrad</ListGroupItemHeading>
                                        <ListGroupItemText className='assoc-info-text'>
                                            {props.currentAssociate.undergradSchool} - {props.currentAssociate.undergradDegree} {props.currentAssociate.undergradMajor}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>
                            </Media>
                        </Media>
                    </div>
                    <div className='gap-control'/>
                </div>
                <div>
                    <h3 id='bio-header'>Bio</h3>
                    <div id='bio-section'>
                        {props.currentAssociate.bio}
                    </div>
                </div> 
            </div>}
        </div> 
    );
}

export default Associate;