import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Интерфейс для пропсов Calculator
interface CalculatorProps {
  onBack?: () => void;
}

// Интерфейс для пропсов компонента OperatorButton
interface OperatorButtonProps {
  op: string;
  symbol: string;
}

const Calculator = ({ onBack }: CalculatorProps) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Введите числа');
      return;
    }

    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = n1 + n2;
        break;
      case '-':
        calculatedResult = n1 - n2;
        break;
      case '*':
        calculatedResult = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResult('Деление на ноль');
          return;
        }
        calculatedResult = n1 / n2;
        break;
      default:
        setResult('Выберите оператор');
        return;
    }

    setResult(calculatedResult.toString());
  };

  // Компонент с типизированными пропсами
  const OperatorButton = ({ op, symbol }: OperatorButtonProps) => (
    <TouchableOpacity
      style={[styles.operatorButton, operator === op && styles.selectedOperator]}
      onPress={() => setOperator(op)}
    >
      <Text style={styles.operatorText}>{symbol}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Кнопка назад - отображается только если передан onBack */}
      {onBack && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>Калькулятор</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Первое число"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      
      <View style={styles.operatorContainer}>
        <OperatorButton op="+" symbol="+" />
        <OperatorButton op="-" symbol="-" />
        <OperatorButton op="*" symbol="×" />
        <OperatorButton op="/" symbol="÷" />
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Второе число"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      
      <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
        <Text style={styles.calculateButtonText}>Посчитать</Text>
      </TouchableOpacity>
      
      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Результат:</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
  },
  operatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  operatorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOperator: {
    borderColor: '#007AFF',
    backgroundColor: '#d0e5ff',
  },
  operatorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  calculateButton: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default Calculator;