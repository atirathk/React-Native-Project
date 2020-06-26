import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import css from './style.css';
export default function App() {
	return (
		<View style={styles.container}>
			<div className='top-bar'>
				<h1>Parker Miller</h1>
				<div className='nav-tab'>
					<h2>Followers</h2>
				</div>
				<div className='nav-tab'>
					<h2>Following</h2>
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
