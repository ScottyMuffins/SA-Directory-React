import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Welcome = () => { 

    return(
        <div className='App-main'>
            <div className='welcome-container no-select'>
                <br/>
                <h2 id='welcome-header'>Welcome Summer Associates</h2>
                <hr/>
                <br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <br/>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <br/><br/>
                <h5><b>Lorem Ipsum</b></h5>
                <p><i>National Hiring Partner - Associate Recruiting</i><hr/></p>
                <br/>
                <Link className='no-select' to="/SummerAssociateDirectory/Directory/View-All">
                    <Button className='welcome-button' color='primary' size='lg'>View 2019 Associates</Button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;