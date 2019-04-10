import React from 'react';
import {Media, ListGroup, ListGroupItem, Label, FormGroup, ListGroupItemText} from 'reactstrap';
import img from '../../../img/DLA_Piper_Transparent_White.png';
const Associate = (props) => { 

    return(
        <div>
            {props.currentAssociate && <div>
                <div className='name-text-wrapper'>
                    <h3>{props.currentAssociate && props.currentAssociate.firstName.trim() + ' ' + props.currentAssociate.lastName.trim()}</h3>
                </div>
                <hr/>
                <div className="associate-grid-container">
                     <div className="associate-photo-wrapper"> 
                        <div className='associate-photo-custom-thumbnail' style={{backgroundImage:`url(${props.currentAssociate.imageUri === null ? img : props.currentAssociate.imageUri.replace(' ', '%20')})`}}></div>                   
                    </div>
                    <div className="associate-media-wrapper">
                        <FormGroup>
                            <Label className='assoc-info-header'>City: {props.offices && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0] && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0].city}</Label>
                            <br/>
                            <Label className='assoc-info-header'>Law School: {props.currentAssociate.lawSchool} {props.currentAssociate.lawSchoolGradYear}</Label>
                            <br/>
                            <Label className='assoc-info-header'>Undergrad: {props.currentAssociate.undergradSchool} - {props.currentAssociate.undergradDegree} {props.currentAssociate.undergradMajor}</Label>
                            <br/>
                            {props.currentAssociate.gradSchool && props.currentAssociate.gradSchool.trim() !== '' && <Label className='assoc-info-header'>Graduate: {props.currentAssociate.gradSchool} - {props.currentAssociate.gradDegree} {props.currentAssociate.gradMajor}</Label>
                            }
                        </FormGroup>
                    </div>
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