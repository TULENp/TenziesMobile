
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './screens/MainScreen';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<MainScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 1,
		minWidth: 100,
	},
});
