import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import css from './style.css';
export default function App() {
	return (
		<View style={styles.container}>
		<div className='top-bar-padding'>
				<div className='top-bar'>
					<span className='back-arrow'></span>
					<div className='center-header-container'>
						<h1>Parker Miller</h1>
					</div>
					<span className='ellipses'>
						<div className='ellipse'></div>
						<div className='ellipse'></div>
						<div className='ellipse'></div>
					</span>
					<span className='nav-tab'>
						<h2>Followers</h2>
					</span>
					<span className='nav-tab' style={{float: 'right'}}>
						<h2>Following</h2>
					</span>
				</div>
			</div>
			<div className='following-section'>
				<div className='following-box'></div>
				<div className='following-box'></div>
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	css
});
