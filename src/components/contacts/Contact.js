import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // onDeleteClick = (id, dispatch) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({type:
  //         'DELETE_CONTACT', payload: id }));
  // };

  // async/await
   onDeleteClick = async (id, dispatch) => {
     try {
       await axios
         .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
          dispatch({
         type: 'DELETE_CONTACT',
         payload: id
       });
     } catch (e) {
         dispatch({
           type: 'DELETE_CONTACT',
           payload: id
          });
        }



  };
  
  render() {
    const { id, name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
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
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times del"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt edit"
                    style={{ cursor: 'pointer', float: 'right', color: 'blue', marginRight: '1rem' }}
                    // onClick={this.onEditClick.bind(this, id, dispatch)}
                  />
                </Link>
              </h4>
              {showContactInfo ? <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
                : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;