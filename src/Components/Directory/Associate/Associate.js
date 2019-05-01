import React from 'react';
import {Alert, Label, FormGroup} from 'reactstrap';
import img from '../../../img/DLA_Piper_Transparent_White.png';

// Adding flag for img loading check once I have time. Have to restructure the associate-photo-custom-thumbnail to use img tag. 
// Need to see if this is even desirable behavior. 
let flag = false;

const Associate = (props) => { 

    const fusionLink = (!props.currentAssociate.firmID || props.currentAssociate.firmID ==='') ? null : `http://intranet3/firmdirectory/EmployeeCard.aspx?id=${props.currentAssociate.firmID}`;

    return(
        <div>
            {!flag && props.currentAssociate && <div>

                <div className="associate-top-container row">
                     <div className="associate-photo-wrapper col-lg-4"> 
                        <div className='associate-photo-custom-thumbnail' style={{backgroundImage:`url(${props.currentAssociate.imageUri === null ? img : props.currentAssociate.imageUri.replace(' ', '%20')})`}}></div>        
                    </div>
                    <div className="col-lg-8 associate-media-wrapper">
                        <div className='name-text-wrapper row'>
                            <div className="col-md-12 name-text-wrapper">
                                <h3>{props.currentAssociate && props.currentAssociate.firstName.trim() + ' ' + props.currentAssociate.lastName.trim()}</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='name-text-wrapper'>
                            <FormGroup>
                                <Label className='assoc-info-header'>City: {props.offices && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0] && props.offices.filter(office => office.officeId === props.currentAssociate.officeID)[0].city}</Label>
                                <Label className='assoc-info-header'>Law School: {props.currentAssociate.lawSchool} {props.currentAssociate.lawSchoolGradYear}</Label>
                                <Label className='assoc-info-header'>Undergrad: {props.currentAssociate.undergradSchool} - {props.currentAssociate.undergradDegree} {props.currentAssociate.undergradMajor}</Label>
                                {props.currentAssociate.gradSchool && props.currentAssociate.gradSchool.trim() !== '' && <Label className='assoc-info-header'>Graduate: {props.currentAssociate.gradSchool} - {props.currentAssociate.gradDegree} {props.currentAssociate.gradMajor}</Label>}
                                {fusionLink && <Label className='assoc-info-header'>Fusion Profile Card: <a href={fusionLink} target='_blank' rel='noopener noreferrer'>Open in New Tab</a></Label>}
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 id='bio-header'>Bio</h3>
                    <div id='bio-section'>
                        {props.currentAssociate.bio}
                    </div>
                </div> 
            </div>}
            {flag && 
                <Alert color='info'>Loading</Alert>
            }
        </div> 
    );
}

export default Associate;