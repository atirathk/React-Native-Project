import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import css from './style.css';
import EntrepreneurPic from './assets/Entrepreneur.PNG';
import OprahPic from './assets/Entrepreneur.PNG';
import SportPic from './assets/Sport.PNG';
import WomenPic from './assets/Women.PNG';
import ParkerPic from './assets/Parker.PNG';
import FollowingBox from './FollowingBox';
	export const followers = [
		{
			"name": "Entrepreneur",
			"picture": './assets/Entrepreneur.PNG',
			"description": "A group of builders talking about they\'ve build already and what\'s ahead",
			"members": "8",
			"thanks": "1.2M",
			"followers": "57k"
		},
		{
			"name": "Oprah's Book Club",
			"picture": './assets/Women.PNG',
			"description": "Highlighting books chosen by Oprah Winfreysince 1996",
			"members": "6",
			"thanks": "1M",
			"followers": "49k"
		},
		{
			"name": "Entrepreneur",
			"picture": './assets/Entrepreneur.PNG',
			"description": "A group of builders talking about they\'ve build already and what\'s ahead",
			"members": "8",
			"thanks": "1.2M",
			"followers": "57k"
		},
		{
			"name": "Oprah's Book Club",
			"picture": './assets/Women.PNG',
			"description": "A group of builders talking about they\'ve build already and what\'s ahead",
			"members": "6",
			"thanks": "1M",
			"followers": "49k"
		},
		{
			"name": "Oprah's OTHER Book Club",
			"picture": './assets/Women.PNG',
			"description": "A group of builders talking about they\'ve build already and what\'s ahead",
			"members": "6",
			"thanks": "1M",
			"followers": "49k"
		},
	];
export default function App(props) {
	function getFollowers() {
		return (
			<div>
			{followers.map((box, i) => (
				<FollowingBox {...box} key={i} />
			))}
			</div>
		)
	}
	function getContent() {
		if (!followers) return null;
		return getFollowers();
	}
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
					<span className='nav-tab following-tab' style={{float: 'right'}}>
						<h2>Following</h2>
					</span>
				</div>
			</div>
			<div className='red-line'></div>
			<div className='following-section'>
				{getContent()}
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	css
});
