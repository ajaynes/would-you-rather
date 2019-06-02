import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
	const isUserAuthed = () => {
		const {authedUser} = props;
		return authedUser !== null;
	};

	return (
		<Route {...props} render={(p) => (
			<>
				{isUserAuthed() ?
          <Component {...p} /> :
          <Redirect to={{
            pathname: '/',
            state: {from: props.location}
          }}/>}
			</>
		)}/>
	)
};

const mapStateToProps = ({authedUser}) => {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(PrivateRoute);
