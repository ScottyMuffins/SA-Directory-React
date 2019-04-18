import React from 'react';
import {Alert} from 'reactstrap';

const Error = (props) => { 

    return(
      <div>
          {props.error && <Alert>props.error</Alert>}
      </div>
    );
}

export default Error;