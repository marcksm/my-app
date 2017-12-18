import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/authenticate';
import { fetchUserData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';

class UserPage extends React.Component
{
  constructor(props) {
  super(props);

  this.state = {
    user: {},
    success: false,
    loading:true
  };
}
    componentDidMount() {
      console.log(localStorage.Id)
      this.props.fetchUserData(localStorage.Id).then(data => this.setState({ user: data }));
      setTimeout(() => {
      this.setState({loading: false});  }, 1);
    }
render() {
  const {isAuth} = this.props
  const { email, first_name, last_name, personal_phone, logout, id} = this.state.user
  if (this.state.loading) {
    return (<div><h1>Wait</h1></div>)
  }
  else {
    return (
      <div>
       {this.props.location.state ?
         (<div>
        <Message>{this.props.location.state.message}</Message></div>
          )
         : (<div></div>)
       }
      <div>
        <h1>Get User</h1>
      </div>

      <div className="ui large message">
      {email}
      </div>

      <div className="ui large message">
      {first_name}
      </div>

      <div className="ui large message">
      {last_name}
      </div>

      <div className="ui large message">
      {personal_phone}
      </div>
      <Link to="/edit" className="ui primary button">Edit User
      </Link><br/><br/>
      <Link to="/reset_password" className="ui primary button">Edit Password
      </Link><br/><br/>
      <button onClick={this.props.logout} className="ui primary button">Logout</button>
      <br/><br/>

      </div>
    );
  }}
};

UserPage.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  personal_phone: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps (state) {
  return {
    isAuth: !!state.user.token,
    email: state.user.email,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    personal_phone:state.user.personal_phone,
    id: state.user.id
  };
}

export default connect(mapStateToProps, {logout, fetchUserData })(UserPage);
