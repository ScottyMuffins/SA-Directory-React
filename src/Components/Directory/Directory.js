import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Associate from './Associate/Associate';
import Filter from './Filter/Filter';

function toggleModalButton(){
    if(document.getElementById('office-Select')){
        if(document.getElementById('office-Select').selectedIndex===0){
            document.getElementById('office-modal-btn').disabled= true;
        }else{
            document.getElementById('office-modal-btn').disabled= false;
        }
    }
}

function toggleEmployeeSelect(){
    if(document.getElementById('office-Select')){
        if(document.getElementById('office-Select').selectedIndex===0){
            document.getElementById('employee-Select').disabled= true;
        }else{
            document.getElementById('employee-Select').disabled= false;
        }
    }else if(document.getElementById('school-Select')){
        if(document.getElementById('school-Select').selectedIndex===0){
            document.getElementById('employee-Select').disabled= true;
        }else{
            document.getElementById('employee-Select').disabled= false;
        }
    }else{
        if(document.getElementById('employee-Select')){
            document.getElementById('employee-Select').disabled= true;
        }
    }
}

class Directory extends Component { 

    constructor(props){
        super(props);

        this.state = {
            currentAssociateIndex: 0,
            filteredAssociates: [],
            currentAssociate: undefined,
            offices: undefined,
            currentOffice: {},
            currentOfficeContacts: [],
            error: undefined
        };

        this.nextAssociate = this.nextAssociate.bind(this);
        this.prevAssociate = this.prevAssociate.bind(this);
        this.resetAssociate = this.resetAssociate.bind(this);
        this.resetOffice = this.resetOffice.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = async (e) =>{
        if(this.props.sortOrder==='ViewAll'){
            this.setState({
                filteredAssociates: this.props.allAssociates
            });
        }
    }

    toggle(){
        toggleEmployeeSelect();
        toggleModalButton();
    }

    setOfficeContacts(officeId){
        this.setState({
            currentOfficeContacts: this.props.allOfficeContacts.filter(con => con.officeID === officeId)
          });
    }

    handleChange(e){
        
        if(e){

            let target = e.target.id;
            switch(target){

                case 'office-Select':
                    if(e.target.selectedIndex === 0){
                        this.setState({
                            filteredAssociates: []
                        });
                    }else{
                        let officeID = e.target.options[e.target.selectedIndex].value;
                        this.handleFilter('Office', officeID);
                        this.setOfficeContacts(officeID);
                    }
                    toggleModalButton();    // Modal is available upon valid office selection
                    toggleEmployeeSelect(); // Turn employee picker on or off depending on valid office selection
                    this.resetAssociate(); // Have to reset Associate index so it starts at 0 for new office.
                break;

                case 'school-Select':
                    if(e.target.selectedIndex === 0){
                        this.setState({
                            filteredAssociates: []
                        });
                    }else{
                        let schoolID = e.target.options[e.target.selectedIndex].value;
                        this.handleFilter('School', schoolID);
                    }
                    toggleEmployeeSelect();
                    this.resetAssociate();
                break;

                case 'employee-Select':
                    if(e.target.selectedIndex!==0){
                        this.setState({
                            currentAssociateIndex: e.target.selectedIndex-1
                        });
                    }
                break;

                default:
                    
            }
        }
    }

    handleFilter(filterType, filterValue){

        switch(filterType){

            case 'Office':
                // Filter by Office and set filteredAssociates. Also set current office/office contacts  
                let associatesByOffice = this.props.allAssociates.filter(emp => emp.officeID === filterValue);
                let selectedOffice = this.props.allOffices.filter(off=>off.officeId === filterValue)
                this.setState({
                    filteredAssociates: associatesByOffice,
                    currentOffice: selectedOffice[0]
                });
            break;

            case 'School':
                // Filter by School and set filteredAssociates
                let associatesBySchool = this.props.allAssociates.filter(emp => emp.lawSchool === filterValue);
                this.setState({
                    filteredAssociates: associatesBySchool
                });
            break;

            case 'Associate':
                // Filter by Associate and set to state (filteredAssociates)
                let associateByName = this.props.allAssociates.filter(emp => emp.employeeID === filterValue);
                this.setState({
                    filteredAssociates: associateByName
                });
            break;

            default: // Do nothing
        }
    }

    nextAssociate(){    
        // Increase index. If end of array, set index to zero. 
        let newIndex;
        
        if(this.state.currentAssociateIndex+1 > this.state.filteredAssociates.length-1){
            newIndex = 0; // Go to beginning of list if next is clicked at end
            this.setState({
                currentAssociateIndex: newIndex
            });

        }else{
            newIndex = this.state.currentAssociateIndex+1;
            this.setState({
                currentAssociateIndex: newIndex
            });
        }
    }

    prevAssociate(){
        // Decrease index. If start of array, set index to end of array. 
        let newIndex;
        
        if(this.state.currentAssociateIndex-1 < 0){ 
            newIndex = this.state.filteredAssociates.length-1; // Go to end of list if previous is clicked at beginning
            this.setState({
                currentAssociateIndex: newIndex
            });

        }else{
            newIndex = this.state.currentAssociateIndex-1; 
            this.setState({
                currentAssociateIndex: newIndex
            });
        }
        
    }

    resetAssociate(){
        this.setState({
            currentAssociateIndex: 0,
        });
    }

    resetOffice(){
        this.setState({
            currentOffice: undefined
        });
    }

    render(){

        let props ={
            allAssociates: this.props.allAssociates,
            filteredAssociates: this.state.filteredAssociates, 
            currentAssociate: this.state.filteredAssociates === undefined ? '' : this.state.filteredAssociates[this.state.currentAssociateIndex],
            offices: this.props.allOffices,
            currentOfficeContacts: this.state.currentOfficeContacts,
            currentOffice: this.state.currentOffice,
            schools: this.props.allSchools,
            sortOrder: this.props.sortOrder,
            handleChange: this.handleChange,
            handleFilter: this.handleFilter,
            toggle: this.toggle 
        }

        return(
            <div>
                {this.props.allOffices && <div className='App-main'>
                    <Filter {...props} />
                </div>}
                {this.state.filteredAssociates && this.state.filteredAssociates.length > 0 && <div className='App-main'>
                    <Associate {...props}/>
                    {this.props.sortOrder!=='ByName' && 
                        <div>
                            <hr/>
                            <div className='directory-button-container'>
                                <Button color='secondary' onClick={this.prevAssociate} className='directory-nav-button' id='previous-nav-button'>Previous</Button>
                                <Button color='primary' onClick={this.nextAssociate} className='directory-nav-button' id='next-nav-button'>Next</Button>
                            </div> 
                        </div>
                    }
                </div>}
            </div>
        );
    }
}

export default Directory;