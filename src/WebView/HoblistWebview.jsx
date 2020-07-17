import React, { useState, useRef } from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

export default function WebScreen() {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView
        source={{ uri: "https://heartbeat.fritz.ai/" }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="black"
            size="large"
            style={styles.flexContainer}
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
