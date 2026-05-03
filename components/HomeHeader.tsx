import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeHeader() {
  return (
    <ImageBackground
      source={require("../assets/images/HeaderBg.png")}
      style={styles.header}
      imageStyle={styles.headerImage}
    >
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/Logo2.png")}
              style={{ width: 140, height: 45 }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.statusDot} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Asad Khan</Text>
            <Text style={styles.profileId}>ID : AK199</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#272E5C",
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
  headerImage: {
    resizeMode: "cover",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  safeArea: {
    flex: 1,
  },
  headerTop: {
    paddingHorizontal: 20,
    paddingTop: 45,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  avatarWrapper: {
    position: "relative",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  statusDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#00E676",
    borderWidth: 2,
    borderColor: "#272E5C",
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  profileId: {
    fontSize: 12,
    color: "#D0D0D0",
    marginTop: 2,
  },
});
