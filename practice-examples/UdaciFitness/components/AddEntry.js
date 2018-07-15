import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { getMetricMetaInfo, timeToString, getDailyReminderValue } from '../utils/helpers'
import { white, purple } from './utils/colors'
import { submitEntry, removeEntry } from '../utils/api'
import { addEntry } from '../actions'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'
import TextButton from './TextButton'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity 
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : style.androidSubmitBtn}
			onPress={onPress}
		>
			<Text style={styles.submitBtnText}>SUBMIT</Text>
		</TouchableOpacity>
	)
}

class AddEntry extends Component {

	state = {
		run: 0,
		bike: 0,
		swim: 0,
		sleep: 0,
		eat: 0
	}

	increment = (metric) => {

		const { max, step } = getMetricMetaInfo(metric)
		
		this.setState((state) => {
			const count = state[metric] + step
			return {
				...state,
				[metric]: count > max ? max : count
			}
		})
	}

	decrement = (metric) => {
		this.setState((state) => {
			const count = state[metric] - getMetricMetaInfo(metric).step
			return {
				...state,
				[metric]: count < 0 ? 0 : count
			}
		})
	}

	slide = (metric, value) => {
		this.setState(() => ({
			[metric]: value
		}))
	}

	onSubmit = () => {
		
		const key = timeToString()
		const entry = this.state

		this.props.dispatch(addEntry({
			[key]: entry
		}))

		this.setState(() => ({
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 0,
			eat: 0
		}))

		// Navigate to home

		submitEntry({ key, entry })

		// Clear local notification
	}

	onReset = () => {

		const key = timeToString()

		this.props.dispatch(addEntry({
			[key]: getDailyReminderValue()
		}))

		// Route to Home

		removeEntry(key)
	}

	render() {

		const metaInfo = getMetricMetaInfo()

		if (this.props.alreadyLogged) 
		{
			return (
				<View>
					<Ionicons
						name='ios-happy-outline'
						size={100}
					/>
					<Text>You already logged your information for today</Text>
					<TextButton onPress={this.onReset}>
						Reset
					</TextButton>
				</View>
			)
		}

		return (
			<View>
				<DateHeader date={(new Date()).toLocaleDateString()} />
				{ 
					Object.keys(metaInfo).map((key) => {
						
						const { getIcon, type, ...rest } = metaInfo[key] 
						const value = this.state[key]

						return (
							<View key={key}>
								{ getIcon() }
								{ 
									type === 'slider'
										? <UdaciSlider
												value={value}
												onChange={(value) => this.slide(key, value)}
												{...rest}
											/>
										: <UdaciSteppers
												value={value}
												onIncrement={() => this.increment(key)}
												onDecrement={() => this.decrement(key)}
												{...rest}
											/>
								}
							</View>
						)
					}) 
				}
				<SubmitBtn onPress={this.onSubmit} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40
	},
	androidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alginItems: 'center'
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	}
})

function mapStateToProps(state) {
	const key = timeToString()

	return {
		alreadyLogged: state[key] && typeof state[key].today === 'undefined'
	}
}

export default connect(mapStateToProps)(AddEntry)