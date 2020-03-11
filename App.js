import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./src/components/Deck";
import { DATA } from "./src/api/data";

class App extends Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
        containerStyle={{
          width: Dimensions.get("window").width,
          paddingHorizontal: 20,
          margin: 0
        }}
      >
        <Text style={{ marginBottom: 10 }}>
          I can customize the card further
        </Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03a9f4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}>There's no more content here</Text>
        <Button backgroundColor="#03A9F4" title="Get More" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});

export default App;
