import React from 'react';
import {Media, Label} from 'reactstrap';

const Associate = (props) => { 
    return(
        <div>
            {props.currentAssociate && <div>
                <div className="associate-grid-container">
                     <div className="associate-photo-wrapper"> 
                     {/* https://www.washingtonpost.com/resizer/WyovBu5iqIM5oGBRitw0YFQW_pY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4CZ7NLW24II6RC5MX7QB7TODUY.jpg*/}
                     {/* https://d3hp8xnxb3lun4.cloudfront.net/wp-content/uploads/2018/06/EDITfeaturedimage-1200x800.jpg*/}
                     {/* https://m.media-amazon.com/images/M/MV5BMTI1MTcwMzc2Ml5BMl5BanBnXkFtZTYwOTUyNDI2._V1_UY317_CR24,0,214,317_AL_.jpg*/}
                        <div className='associate-photo-custom-thumbnail' style={{backgroundImage:`url(${props.currentAssociate.imageUri})`}}></div>                   
                    </div>
                    <div className="media-wrapper">
                        <Media>
                            <Media body>
                                <div className="media-header-wrapper">
                                    <Media heading>
                                        {props.currentAssociate && props.currentAssociate.firstName.trim() + ' ' + props.currentAssociate.lastName.trim()}
                                    </Media>
                                </div>
                                <hr/>
                                <Label className ='assoc-Info'>City: {props.currentAssociate.officeID}</Label>
                                <Label className ='assoc-Info'>Law School: {props.currentAssociate.lawSchool} {props.currentAssociate.lawSchoolGradYear}</Label>
                                <Label className ='assoc-Info'>Undergrad: {props.currentAssociate.undergradSchool} - {props.currentAssociate.undergradDegree} {props.currentAssociate.undergradMajor}</Label>
                            </Media>
                        </Media>
                    </div>
                    <div className='gap-control'></div>
                </div>
                <div>
                    <h3 id='bio-header'>Bio</h3>
                    <div id='bio-section'>
                        {props.currentAssociate.bio} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div> 
            </div>}
        </div> 
    );
}

export default Associate;