import React, {Component} from 'react';
import { Consumer } from '../../context';
// import uuid from 'uuid';
import axios from 'axios';

import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    const { name, email, phone} = contact;

    this.setState({
      name, email, phone
    })
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});
  // async/await
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Error
    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }});
      return;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'Email is required' }});
      return;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' }});
      return;
    }

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // Redirect To Home
    this.props.history.push('/')
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Edit Contact
              </div>
              <div className="card-body">
                <form noValidate onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;