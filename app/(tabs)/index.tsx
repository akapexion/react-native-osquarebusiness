import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import DashboardGrid from '../../components/DashboardGrid';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <DashboardGrid />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 150, // Space for custom bottom tab bar
  },
});
