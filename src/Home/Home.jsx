import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";
import Movies from "./Component/ListMovies";

const baseURL = "https://hoblist.com/movieList";

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await fetch(baseURL, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        method: "POST",
        body: JSON.stringify({
          category: "movies",
          language: "telugu",
          genre: "all",
          sort: "voting",
        }),
      })
        .then((response) => response.json())
        .then(async (data) => {
          await setLoading(false);
          await setMoviesData(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  if (loading || moviesData == null) {
    return (
      <View style={styles.center}>
        <Image source={require("../../assets/loadingGif.gif")} />
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.body}>
          <Text></Text>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Company:Geeksynergy Technologies Pvt Ltd
                </Text>
                <Text style={styles.modalText}>
                  Address:Sanjayanagar, Bengaluru-56
                </Text>
                <Text style={styles.modalText}>Phone:XXXXXXXXX09</Text>
                <Text style={styles.modalText}>Email: XXXXXX@gmail.com</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Company Info</Text>
          </TouchableHighlight>
          <Text style={styles.hoblist}>.</Text>
        </View>

        <View style={styles.hoblist}>
          <Text
            style={styles.hoblistFont}
            onPress={() => navigation.navigate("HomeWeb")}
          >
            HobList
          </Text>
        </View>
        <View>
          <Movies movie={moviesData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    marginTop: 15,
    marginLeft: 30,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  hoblist: {
    flex: 1,
    marginTop: 9,
    marginRight: 30,
    marginBottom: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  hoblistFont: {
    fontWeight: "bold",
  },
  body: {
    // flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    padding: 40,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
