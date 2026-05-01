import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const gridData = [
  { id: '1', title: 'Announcements', iconName: 'bullhorn', IconFamily: FontAwesome, color: '#fbc531', bgColor: '#fef1cf' },
  { id: '2', title: 'Invoices', iconName: 'receipt', IconFamily: FontAwesome5, color: '#e84118', bgColor: '#fbdcd5' },
  { id: '3', title: 'Time Tracking', iconName: 'user-clock', IconFamily: FontAwesome5, color: '#f368e0', bgColor: '#fbe2f8' },
  { id: '4', title: 'Reviews', iconName: 'rate-review', IconFamily: MaterialIcons, color: '#ff9f43', bgColor: '#ffeccc' },
  { id: '5', title: 'Support', iconName: 'headset', IconFamily: FontAwesome5, color: '#0abde3', bgColor: '#d7f6fb' },
  { id: '6', title: 'Approvals', iconName: 'envelope-open-text', IconFamily: FontAwesome5, color: '#e15f41', bgColor: '#f9e3de' },
  { id: '7', title: 'Ideas', iconName: 'lightbulb-on', IconFamily: MaterialCommunityIcons, color: '#feca57', bgColor: '#fef3d8' },
  { id: '8', title: 'Issues', iconName: 'report-problem', IconFamily: MaterialIcons, color: '#ff6b6b', bgColor: '#ffe5e5' },
  { id: '9', title: 'Recruitment', iconName: 'briefcase', IconFamily: FontAwesome5, color: '#5f27cd', bgColor: '#e8ddf8' },
];

export default function DashboardGrid() {
  const { width } = useWindowDimensions();
  const numColumns = width < 450 ? 2 : width < 800 ? 3 : 4;

  return (
    <FlatList
      key={numColumns}
      data={gridData}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.gridContainer}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.gridItem}>
          <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
            <item.IconFamily name={item.iconName as any} size={28} color={item.color} />
          </View>
          <Text style={styles.gridItemText}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: 15,
    marginTop: 30,
    gap: 15,
    paddingBottom: 30,
  },
  columnWrapper: {
    gap: 15,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridItemText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
});
