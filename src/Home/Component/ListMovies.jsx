import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from "react-native";

export default (props) => {
  console.log(props.movie.result);

  const movieListValues = props.movie.result;

  return (
    <ScrollView>
      {movieListValues.map((row, index) => {
        return (
          <View>
            <Image
              source={{ uri: row.poster }}
              style={{ width: 400, height: 300 }}
            />
            <Text style={styles.titleFont}>{row.title}</Text>
            <Text>DIRECTOR : {row.director}</Text>
            <Text>GENRE : {row.genre}</Text>
            <Text>LANGUAGE : {row.language}</Text>
            <Text>VOTES : {row.totalVoted}</Text>
            <Text>STARRING : {row.stars}</Text>
            <Text style={styles.fontColor}>
              {row.pageViews} Views|Voted by {row.totalVoted} people |{" "}
              {row.runTime} Mins
            </Text>
            <Button
              title="Watch trailer"
              onPress={() => {
                Linking.openURL("https://www.geeksynergy.com/");
                alert("The selected index is " + index);
              }}
            />
            <View>
              <Text></Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleFont: {
    fontSize: 25,
    fontWeight: "bold",
  },
  fontColor: {
    color: "#42adf5",
  },
});
