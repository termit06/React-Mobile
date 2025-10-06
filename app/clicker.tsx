import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';



interface ClickerProps {
    onBack?: () => void;
}
const Clicker = ({ onBack }: ClickerProps) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const eggImage = () => {
        if (count < 10) {
            return require('../assets/images/egg.png');
        } else if (count < 20) {
            return require('../assets/images/egg_crack.png');
        } else if (count < 30) {
            return require('../assets/images/egg_broken.png');
        } else {
            return require('../assets/images/chick.png');
        }
    };
    const eggTextStatus = () => {
        if (count < 10) {
            return "Целлое яицо";
        } if (count < 20) {
            return "Появились трещины";
        } if (count < 30) {
            return "Яйцо разбивается!";
        } else {
            return "Поздравляем! Вылупился цыпленок!";
        }
    };

    return (
        <View style={styles.container}>
            {onBack && (<TouchableOpacity
                style={styles.backButton}
                onPress={onBack}
            >
                <Text style={styles.backButton}>← Назад</Text>
            </TouchableOpacity>
            )}
            <Text style={styles.title}>Яичный кликер</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.imageButton}>
                <Image 
                    source={eggImage()} 
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>
                  <Text style={styles.hint}>Нажми на яйцо, чтобы инкубировать!</Text>

            <Text style={styles.counter}>Кликов:{count}</Text>
            <Text style={styles.status}>{eggTextStatus()}</Text>
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
                <Text style={styles.buttonText}>Сбросить</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    counter: {
        fontSize: 48,
        marginBottom: 30,
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginVertical: 10,
    },
    resetButton: {
        backgroundColor: '#808080',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
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
    status: {
        fontSize: 18,
        marginBottom: 20,
        color: '#2c3e50',
        textAlign: 'center',
        fontWeight: '500',
    },
    imageButton: {
        marginVertical: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: 200,
        height: 200,
    },
    hint: {
    fontSize: 16,
    marginBottom: 20,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Clicker;