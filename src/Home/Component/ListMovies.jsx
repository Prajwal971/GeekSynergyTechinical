import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  List,
  ListItem,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Button,
  Item,
  Input,
  Image,
} from "react-native";

export default (props) => {
  //   console.log(props.movie.result);

  //   const movieListValuesFiltered = props.movie.result;

  //   let [movieListValuesFiltered, setMovieListValuesFiltered] = useState(
  //     props.movie.result
  //   );

  return (
    <ScrollView>
      <Image
        source={{ uri: props.movie.result[0].poster }}
        style={{ width: 400, height: 300 }}
      />
      <Text>Title:{props.movie.result[0].title}</Text>
      <Text>Director : {props.movie.result[0].director}</Text>
      <Text>Genre:{props.movie.result[0].genre}</Text>
      <Text>Languages:{props.movie.result[0].language}</Text>
      <Text>PageViews:{props.movie.result[0].pageViews}</Text>
      <Text>Votes:{props.movie.result[0].totalVoted}</Text>
      <Text>Starring:{props.movie.result[0].stars}</Text>

      <Image
        source={{ uri: props.movie.result[1].poster }}
        style={{ width: 400, height: 300 }}
      />
      <Text>Title:{props.movie.result[1].title}</Text>
      <Text>Director : {props.movie.result[1].director}</Text>
      <Text>Genre:{props.movie.result[1].genre}</Text>
      <Text>Languages:{props.movie.result[1].language}</Text>
      <Text>PageViews:{props.movie.result[1].pageViews}</Text>
      <Text>Votes:{props.movie.result[1].totalVoted}</Text>
      <Text>Starring:{props.movie.result[1].stars}</Text>

      <Image
        source={{ uri: props.movie.result[2].poster }}
        style={{ width: 400, height: 300 }}
      />
      <Text>Title:{props.movie.result[2].title}</Text>
      <Text>Director : {props.movie.result[2].director}</Text>
      <Text>Genre:{props.movie.result[2].genre}</Text>
      <Text>Languages:{props.movie.result[2].language}</Text>
      <Text>PageViews:{props.movie.result[2].pageViews}</Text>
      <Text>Votes:{props.movie.result[2].totalVoted}</Text>
      <Text>Starring:{props.movie.result[2].stars}</Text>

      <Image
        source={{ uri: props.movie.result[3].poster }}
        style={{ width: 400, height: 300 }}
      />
      <Text>Title:{props.movie.result[3].title}</Text>
      <Text>Director : {props.movie.result[3].director}</Text>
      <Text>Genre:{props.movie.result[3].genre}</Text>
      <Text>Languages:{props.movie.result[3].language}</Text>
      <Text>PageViews:{props.movie.result[3].pageViews}</Text>
      <Text>Votes:{props.movie.result[3].totalVoted}</Text>
      <Text>Starring:{props.movie.result[3].stars}</Text>
    </ScrollView>
    // <ScrollView>
    //   <List>
    //     {props.movie.result &&
    //       props.movie.result.map((row, index) => {
    //         return (
    //           <ListItem thumbnail key={index} style={styles.list}>
    //Items that are to be on the left side
    //             <Left>
    //               <Icon active name="md-home" />
    //             </Left>
    //Body
    //             <Body>
    //               <Text>{row.title}</Text>
    //               {/* <Text note numberOfLines={1}>Mivie ID : {row._id}</Text> */}
    //             </Body>
    //Items that are to be right side
    //             <Right>
    //               <Button
    //                 transparent
    //               >
    //                 <Text>View</Text>
    //               </Button>
    //             </Right>
    //           </ListItem>
    //         );
    //       })}
    //   </List>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  modalContainerInner: {
    backgroundColor: "#ffffff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },
  modalText: {
    fontSize: 14,
  },
  modalTextHeader: {
    fontSize: 40,
    alignItems: "stretch",
  },
});
