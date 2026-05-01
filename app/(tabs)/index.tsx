import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DashboardGrid from "../../components/DashboardGrid";
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <DashboardGrid />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    paddingBottom: 150,
  },
});
