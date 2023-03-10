
import { SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from './navigation/Navigation';
import { MainScreen } from './screens/MainScreen';

export default function App() {
	return (
			<Navigation/>
		// <SafeAreaView style={styles.container}>
		// 	<MainScreen />
		// </SafeAreaView>
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
