import { Text, StyleSheet } from "react-native";
import {imc} from "./Result"

const Classification = () => {
    switch (imc) {
        case imc<18.5:
            <Text style={styles.classification}>Abaixo do peso</Text> 
            break;
        case imc>=18.5 && imc<=24.9:
            <Text style={styles.classification}>Peso normal</Text>
            break;
        case imc>= 25 && imc<=29.9:
            <Text style={styles.classification}>Sobrepeso</Text>
            break;
        case imc>=30 && imc<=34.9:
            <Text style={styles.classification}>Obesidade I</Text>
            break;
        case imc>=35 && imc<=39.9:
            <Text style={styles.classification}>Obesidade II</Text>
            break;
        case imc>=40:
            <Text style={styles.classification}>Obesidade III</Text>
            break;
    
        default:
            break;
    }
    
    
};

const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;