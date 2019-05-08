import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Welcome = () => { 

    return(
        <div className='App-main'>
            <div className='welcome-container no-select'>
            <br/>
                <h2 id='welcome-header'>Welcome 2019 Summer Associates</h2>
                <hr/>
                <br/>
                <p>On behalf of the entire firm, we offer a warm welcome to the 2019 DLA Piper summer associates.  Our summer class is a foundation for DLA Piper’s future. We are confident that this year’s class and its great diversity in backgrounds, talents and interests will be a long-term source of strength and will serve the firm well as we take on tomorrow's challenges.</p>
                <br/>
                <p>Our summer associates come to us from 28 different law schools and are resident in 17 of the firm's US offices.  Please take the time to review this directory and make the effort to meet as many members of our summer class as you can. We want each of them to feel welcome, and we want to offer each the opportunities to learn as much as possible about the people and practices that make DLA Piper a special place to practice law.</p>
                <br/><br/>
                <h5><b>Katie Riley Grasso and Raj Shah </b></h5>
                <p><i>National Hiring Partners for Associate Recruiting</i><hr/></p>
                <br/>
                <Link className='no-select' to="/SummerAssociateDirectory/Directory/View-All">
                    <Button className='welcome-button' color='primary' size='lg'>View 2019 Associates</Button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;