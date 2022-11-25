import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export const Buttons = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.baseTitle}>Count: {count}</Text>
      </View>
      <View style={styles.fixToButtons}>
        <Button
          style={styles.button}
          title="Add Count"
          color="blue"
          onPress={() => setCount(count + 1)}
        />
        <Button
          title="Remove Count"
          color="red"
          onPress={() => setCount(count - 1)}
        />
      </View>
      {/* <View style={styles.modalButton}>
        <Button
          title="Go to Modal"
          onPress={() => navigation.navigate("ModalWindow")}
        />
      </View> */}
    </SafeAreaView>
  );
};
