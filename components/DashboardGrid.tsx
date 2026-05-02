import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const gridData = [
  {
    id: "1",
    title: "Announcements",
    image: require("../assets/images/announcements.png"),
  },
  {
    id: "2",
    title: "Leaves",
    image: require("../assets/images/leaves.png"),
  },
  {
    id: "3",
    title: "Policies",
    image: require("../assets/images/policies.png"),
  },
  {
    id: "4",
    title: "Polls",
    image: require("../assets/images/polls.png"),
  },
  {
    id: "5",
    title: "Chat",
    image: require("../assets/images/chat.png"),
  },
  {
    id: "6",
    title: "Forms",
    image: require("../assets/images/forms.png"),
  },
  {
    id: "7",
    title: "News",
    image: require("../assets/images/news.png"),
  },
  {
    id: "8",
    title: "Meetings",
    image: require("../assets/images/meeting.png"),
  },
  {
    id: "9",
    title: "Inventory",
    image: require("../assets/images/inventory.png"),
  },
  {
    id: "10",
    title: "Calendar",
    image: require("../assets/images/calender.png"),
  },
  {
    id: "11",
    title: "Posts",
    image: require("../assets/images/posts.png"),
  },
  {
    id: "12",
    title: "Holidays",
    image: require("../assets/images/holiday.png"),
  },
  {
    id: "13",
    title: "Appraisals",
    image: require("../assets/images/Appraial.png"),
  },
  {
    id: "14",
    title: "Birthdays",
    image: require("../assets/images/birthday.png"),
  },
  {
    id: "16",
    title: "JDs",
    image: require("../assets/images/jds.png"),
  },
];

export default function DashboardGrid() {
  const { width } = useWindowDimensions();
  const numColumns = 3;

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
          <View style={[styles.iconContainer]}>
            <Image
              source={item.image}
              style={styles.iconImage}
              resizeMode="contain"
            />
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
    marginTop: 20,
    gap: 15,
    paddingBottom: 30,
  },
  columnWrapper: {
    gap: 15,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    aspectRatio: 1,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  gridItemText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
    textAlign: "center",
  },
});
