import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';

const mapStateToProps = state => {
	const nameCompany = state.map(item => {
		return {
			id: item.id,
			company: item.company
		}
	});
	return {nameCompany};
};

const SidebarContainer = ({nameCompany}) => <Sidebar nameCompany={nameCompany}/>;

export default connect(
	mapStateToProps
)(SidebarContainer);