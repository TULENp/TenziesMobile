import { StyleSheet } from 'react-native';
//react native border radius style 
export const styles = StyleSheet.create({
    root: {
        padding: 10,
        textAlign: 'center',
    },
    a: {
        fontWeight: '700',
        fontSize: 20,
        color: '#4A4E74',
        textAlign:'center',
    },
    h1: {
        fontWeight: '700',
        fontSize: 35,
        color: '#2B283A',
        margin: 10,
        textAlign: 'center',
    },
    h2: {
        fontSize: 20,
        color: '#4A4E74',
        textAlign: 'center',
    },
    score: {
        display: 'flex',
        flexDirection: 'column',
    },
    block: {
        width: '90%',
        height: '95%',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 24,
    },
    infoLink: {
        color: '#4A4E74',
    },
    tools: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    toolsH2: {
        margin: '0.5rem',
    },
    button: {
        backgroundColor: '#5035FF',
        borderRadius: 10,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 45,
        color: '#FFFFFF',
    },
    dice: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
