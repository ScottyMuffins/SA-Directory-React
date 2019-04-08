import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Directory from './Components/Directory/Directory';
import Welcome from './Components/Welcome/Welcome';
import AppNav from './Components/Nav/AppNav';
import img from './img/DLA_Piper_Transparent_White.png';
import './App.css';

const apiBaseURL = 'http://baltfusdr01v/SummerDirectoryAPI/api//Directory/';
const facebookID = 'FACEBOOK018'; //FACEBOOK005 COSMOSTEST001 FACEBOOK018
const bearerToken = 'D03BA43F-121B-438C-9953-3BE9AFB2BB73';
const fetchRequirements = {
  method: 'GET',
  headers: {
    'Authorization': bearerToken
  }
}

class App extends Component {

  state = {
    allAssociates: undefined,
    allOffices: undefined,
    allSchools: undefined
  };

  componentDidMount = async () =>{

    try{
        const getAssociates = `${apiBaseURL}GetAllBios?facebookid=${facebookID}`;
        const fetchAssociates = await fetch(getAssociates, fetchRequirements);
        const associates = await fetchAssociates.json();

        if(associates){
            this.setState({
                allAssociates: associates
            });
        }

        const getOffices = `${apiBaseURL}GetOffices?facebookid=${facebookID}`;
        const fetchOffices = await fetch(getOffices, fetchRequirements);
        const offices = await fetchOffices.json();

        if(offices){
            this.setState({
                allOffices: offices
            });
        }

        const getLawSchools = `${apiBaseURL}GetLawSchools?facebookid=${facebookID}`;
        const fetchLawSchools = await fetch(getLawSchools, fetchRequirements);
        const lawSchools = await fetchLawSchools.json();

        if(lawSchools){
            this.setState({
                allSchools: lawSchools
            });
        }

    }catch(err){
      this.setState({
          error: `API Error - Contact Web Technologies - ${err.message}`
      });
    }

  }

  resetAssociateFilters(){
    this.setState({
      filteredList: [],
      currentAssociate: []
    });
  }

  render() {

    let props ={
      allSchools: this.state.allSchools,
      allOffices: this.state.allOffices,
      allAssociates: this.state.allAssociates
    }

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <AppNav />
          </header>
          <main className="container">
            <div>
              <Route exact={true} path='/' component={Welcome}/>
              <Route exact={true} path='/Directory/View-All' component={() => <Directory {...props} sortOrder={'ViewAll'} ></Directory>}/>
              <Route exact={true} path="/Directory/By-Office" render={() => <Directory {...props} sortOrder={'ByOffice'} ></Directory>}/>
              <Route exact={true} path="/Directory/By-School" render={() => <Directory {...props} sortOrder={'BySchool'}/>}/> 
              <Route exact={true} path="/Directory/By-Name" render={() => <Directory  {...props} sortOrder={'ByName'} ></Directory>}/>
            </div>
          </main>
          <footer className="App-footer no-select">
            <div className='footer-grid-container'>
              <img className='footer-branding-image' src={img} alt='none'></img>
              <p>&copy;2019 All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;