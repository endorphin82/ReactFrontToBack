import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  render() {
    const { name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;

    return (

      <div className="card card-body mb-3">
        <h4>{name} {' '}
          <i
            onClick={() =>
              this.setState({ showContactInfo:
                  !this.state.showContactInfo })}
            className={
              classnames(
                "fas",
                {"fa-sort-up": !showContactInfo,
                  "fa-sort-down": showContactInfo}
              )
            }
          />
        </h4>
        {showContactInfo ? <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
        : null}

      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;