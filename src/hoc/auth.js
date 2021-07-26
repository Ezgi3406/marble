import React, { Component } from 'react';
import { connect } from 'react-redux';

import { auth } from '../redux/actions';

function auth1 (ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };

    componentWillMount() {
      this.props.dispatch(auth());
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false,
      });
      if (!nextProps.user.login.isAuth) {
        if (reload) {
          this.props.history.push('/login');
        }
      } else if (reload === false) {
        this.props.history.push('/profile');
      }
    }

    render() {
      if (this.state.loading) return <div className="loader">Loading...</div>;
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  const mapStateToProps = state => ({ user: state.user });

  return connect(mapStateToProps)(AuthenticationCheck);
}

export default auth1;