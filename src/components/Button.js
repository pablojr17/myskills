import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ handleAddNewSkill }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={handleAddNewSkill}
    >
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})