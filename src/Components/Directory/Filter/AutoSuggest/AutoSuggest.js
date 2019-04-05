import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react'
import {InputGroup, InputGroupAddon, Button} from 'reactstrap'

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.fullName}</span>
    );
  }
  
  class AutoSuggest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        suggestions: [],
        empID: null
      };    

      this.getSuggestionValue = this.getSuggestionValue.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount(){
        // Enter Key can be used after valid selection
         document.getElementById("autoSuggest-input").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("person-lookup-btn").click();
            }
        });
    }

    associates = this.props.allAssociates.map(emp => ({firstName: emp.firstName, lastName: emp.lastName, fullName: `${emp.firstName} ${emp.lastName}`, employeeID: emp.employeeID }));

    getSuggestionValue(suggestion) {
        this.setState({
            empID: suggestion.employeeID
        })
        return suggestion.fullName;
      }

    getSuggestions(value) {
        const escapedValue = escapeRegexCharacters(value.trim());
        if (escapedValue === '' || escapedValue.length < 2) { // Determine character count before rendering suggestions
          return [];
        }
        const regex = new RegExp('^' + escapedValue, 'i');
        return this.associates.filter(emp => regex.test(emp.firstName) || regex.test(emp.lastName) || regex.test(emp.fullName)).sort();
    }
      
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    handleFilter(){
        this.props.handleFilter('Associate', this.state.empID);
    }
  
    render() {
      const { value, suggestions} = this.state;
      const inputProps = {
        id: 'autoSuggest-input',
        placeholder: "Start Typing",
        value,
        onChange: this.onChange,
      };
  
      return (

        <InputGroup className='search-by-name'>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
            <InputGroupAddon addonType='append'>
                <Button id='person-lookup-btn' color='primary' onClick={this.handleFilter}>Look Up</Button>
            </InputGroupAddon>
        </InputGroup>
      );
    }
  }
  
  export default AutoSuggest;
  