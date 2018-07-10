import React from 'react'
import { Text, View, Slider } from 'react-native'

export default function UdaciSlider({ max, unit, step, value, onChange }) {
	return (
		<View>
			<Slider 
				minimumValue={0}
				value={value}
				maximumValue={max}
				step={step}
				onValueChange={onChange}
			/>
			<View>
				<Text>{value}</Text>
				<Text>{unit}</Text>
			</View>
		</View>
	)
}