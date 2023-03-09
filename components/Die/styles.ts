import { StyleSheet } from 'react-native';
//react native border radius style 
export const styles = StyleSheet.create({
    die: {
        margin: 5,
        width: 90,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    held: {
        backgroundColor: '#59E391',
    },
    dieH1: {
        fontWeight: '700',
        fontSize: 35,
        color: '#2B283A',
    },
})