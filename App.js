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
					<div className='following-box-padding'>
						<div className='following-box'>
							<div className='following-pic'></div>
							<div className='following-info'>
								<div>
									<span className='follower-follow-status'></span>
									<h2>Entrpreneur</h2>
								</div>
								<p className='following-description'>asdfas</p>
								<div>
									<p className='following-members'>8 members</p>
									<p className='following-thanks'>1.2M Thanks</p>
									<p className='following-followers'>57k followers</p>
								</div>
							</div>
					</div>
				</div>
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	css
});
