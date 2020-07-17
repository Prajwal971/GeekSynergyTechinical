import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { AsyncStorage } from "react-native";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // -------------Function() to fetch and send credentials--------------
  const submitLogin = async () => {
    let user = await AsyncStorage.getItem("user");
    let parsed = JSON.parse(user);

    if (!userName) {
      alert("Username required");
    } else if (!password) {
      alert("Password required");
    } else if (userName == parsed.name && password == parsed.password) {
      navigation.navigate("Home");
    } else {
      alert("Invalid");
    }
    console.log(parsed);
    // else {
    //   navigation.navigate("Home");
    // }
  };

  return (
    <View style={styles.container} behavior="padding">
      <Text style={styles.logo}>GeekSynergy </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
    /* </KeyboardAvoidingView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0487D9",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flex: 1,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#5ABF86",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginText: {
    color: "white",
    fontWeight: "700",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#012840",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    // marginBottom: 10,
  },
  signupBtn: {
    width: "80%",
    backgroundColor: "#012840",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
});
