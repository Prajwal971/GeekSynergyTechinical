import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { AsyncStorage } from "react-native";

export default function SignupScreen({ navigation }) {
  //using states to keep the value stored
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [profession, setProfession] = useState("");

  const handleSubmitButton = async () => {
    //performing NULL validation
    if (!name) {
      alert("Please enter Name");
      return;
    }
    if (!password) {
      alert("Please enter Password");
      return;
    }
    if (!email) {
      alert("Please enter Email");
      return;
    }
    if (!phone) {
      alert("Please enter Phone number");
      return;
    }
    if (!profession) {
      alert("Please enter Profession");
      return;
    }
    //using async storage to store the signed in values
    let signUpData = {
      name: name,
      password: password,
      email: email,
      phone: phone,
      profession: profession,
    };
    try {
      await AsyncStorage.setItem("user", JSON.stringify(signUpData));
    } catch (err) {
      console.log(err);
    }

    alert("Successfully registered");
    //navigate to login ONLY after successfull login
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="email-address"
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputText}
          placeholder="Phone no..."
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Profession..."
          placeholderTextColor="#003f5c"
          onChangeText={(profession) => setProfession(profession)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn} onPress={handleSubmitButton}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 4,
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
