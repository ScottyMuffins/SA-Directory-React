import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Directory from './Components/Directory/Directory';
import Welcome from './Components/Welcome/Welcome';
import AppNav from './Components/Nav/AppNav';
import img from './img/DLA_Piper_Transparent_White.png';
import './App.css';

const apiBaseURL = process.env.REACT_APP_BASE_URL;
const facebookID = process.env.REACT_APP_FACEBOOK_ID;
const fetchRequirements = {
  method: 'GET',
  headers: {
    'Authorization': process.env.REACT_APP_BEARER_TOKEN
  }
}

class App extends Component {

  state = {
    allAssociates: undefined,
    allOffices: undefined,
    allSchools: undefined
  };

  // Updated for concurrency. Awaits all promises at once. 
  componentDidMount = async () =>{

    try{
        const getAssociates = `${apiBaseURL}GetAllBios?facebookid=${facebookID}`;
        const getOffices = `${apiBaseURL}GetOffices?facebookid=${facebookID}`;
        const getLawSchools = `${apiBaseURL}GetLawSchools?facebookid=${facebookID}`;

        let associates, offices, lawSchools;

        await Promise.all([fetch(getAssociates, fetchRequirements), fetch(getOffices, fetchRequirements), fetch(getLawSchools, fetchRequirements)]).then(values =>{
            associates = values[0].json();
            offices = values[1].json();
            lawSchools = values[2].json();
        });

        await Promise.all([associates, offices, lawSchools]).then(values => {
            this.setState({
                allAssociates: values[0],
                allOffices: values[1],
                allSchools: values[2]
            });
        });
        
    }catch(err){
      this.setState({
          error: `API Error - Contact Web Technologies - ${err.message}`
      });
    }

  }

  // Old way - Not concurrent. This is synchronous. Not terribly slow, but new way is better. 
  /* componentDidMount = async () =>{

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

  } */

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
              <Route exact={true} path='/SummerAssociateDirectory' component={Welcome}/>
              <Route exact={true} path='/SummerAssociateDirectory/Directory/View-All' component={() => <Directory {...props} sortOrder={'ViewAll'} ></Directory>}/>
              <Route exact={true} path="/SummerAssociateDirectory/Directory/By-Office" render={() => <Directory {...props} sortOrder={'ByOffice'} ></Directory>}/>
              <Route exact={true} path="/SummerAssociateDirectory/Directory/By-School" render={() => <Directory {...props} sortOrder={'BySchool'}/>}/> 
              <Route exact={true} path="/SummerAssociateDirectory/Directory/By-Name" render={() => <Directory  {...props} sortOrder={'ByName'} ></Directory>}/>
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