import React from 'react';
import {connect} from 'react-redux';
import {User, fetchUsers} from '../actions';
import {StoreState} from '../reducers';

interface AppProps {
 users: User[];
 fetchUsers(): any;
}

function App(props: AppProps) {
 return <div>Hello Henrys</div>;
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
 return {
  users: state.users,
 };
};

export default connect(mapStateToProps, {fetchUsers})(App);