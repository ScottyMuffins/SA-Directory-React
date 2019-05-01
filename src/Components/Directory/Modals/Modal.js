import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, UncontrolledTooltip } from 'reactstrap';

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

class OfficeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false, 
      focusAfterClose: false,
      unmountOnClose: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount(){
    this.props.toggleModalButton();
  }

  render() {

    return (
      <div>
        <Button id='office-modal-btn' color="primary" onClick={this.toggle}>Recruiting Contacts</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.currentOffice.officeDescription}</ModalHeader>
          <ModalBody>
            <ListGroup flush>
              {/* <ListGroupItem>
                <ListGroupItemHeading>Address</ListGroupItemHeading>
                <ListGroupItemText>{this.props.currentOffice.address} <br/> {this.props.currentOffice.city}, {this.props.currentOffice.stateCode} {this.props.currentOffice.zip}</ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Phone</ListGroupItemHeading>
                <ListGroupItemText><p>{formatPhoneNumber(this.props.currentOffice.phone) ? this.props.currentOffice.phone : formatPhoneNumber(this.props.currentOffice.phone)}</p> <p className='text-secondary'>Tie Line: {this.props.currentOffice.tieLine}</p></ListGroupItemText>
              </ListGroupItem>
              { this.props.currentOffice.fax && this.props.currentOffice.fax.trim()!=='' && <ListGroupItem>
                <ListGroupItemHeading>Fax</ListGroupItemHeading>
                <ListGroupItemText>{this.props.currentOffice.fax}</ListGroupItemText>
              </ListGroupItem>} */}
              {this.props.officeContacts[0] &&<ListGroupItem>
                <ListGroupItemHeading>Recruiting Contacts</ListGroupItemHeading>
                <ListGroupItemText>
                  {this.props.officeContacts[0].recruitingContacts.map((con) => <p>{`${con.firstName} ${con.lastName} - ${formatPhoneNumber(con.phone) ? con.phone : formatPhoneNumber(con.phone)}`}</p>)}
                </ListGroupItemText>
              </ListGroupItem>}
              {this.props.currentOffice.fusionUrl && <ListGroupItem>
                <ListGroupItemHeading>Fusion Page</ListGroupItemHeading>
                <ListGroupItemText>
                  Click <a style={{textDecoration: "underline", color:"blue"}} href={this.props.currentOffice.fusionUrl === null ? 'http://Fusion/' : this.props.currentOffice.fusionUrl} id="fusionToolTip" target="_blank"  rel="noopener noreferrer">here</a> to visit the {this.props.currentOffice.officeDescription} Office Fusion Page
                  <UncontrolledTooltip placement="bottom" target="fusionToolTip">
                    {`Open in a new tab.`}
                  </UncontrolledTooltip>
                </ListGroupItemText>
              </ListGroupItem>}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default OfficeModal;