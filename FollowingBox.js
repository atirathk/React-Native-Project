import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import css from './style.css';
import EntrepreneurPic from './assets/Entrepreneur.PNG';

export default function FollowingBox(props) {
	return (
		<View style={styles.container}>
			<div className='following-box-padding'>
				<div className='following-box'>
					<div className='following-pic'>
						<img src={EntrepreneurPic}></img>
					</div>
					<div className='following-info'>
						<div>
							<div className='follower-follow-status'></div>
							<h2>{props.name}</h2>
						</div>
						<p className='following-handle'></p>
						<p className='following-description'>{props.description}</p>
						<div>
							<p className='following-members'>{props.members} members</p>
							<p className='following-thanks'>{props.thanks} Thanks</p>
							<p className='following-followers'>{props.followers} followers</p>
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