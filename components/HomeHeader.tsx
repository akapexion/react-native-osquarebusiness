import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      {/* Custom Curve */}
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{
                width: 180, height: 45
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <FontAwesome5 name="user-tie" size={40} color="#272E5C" />
            </View>
            <View style={styles.statusDot} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>JUNAID ASHRAF</Text>
            <Text style={styles.profileId}>ID: 1363347</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.headerCurve} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#272E5C',
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    overflow: 'visible',
    zIndex: 1,
  },
  headerCurve: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    backgroundColor: '#272E5C',
    height: 60,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: -1,
  },
  safeArea: {
    flex: 1,
  },
  headerTop: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 10,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#A0B2CD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00E676',
    borderWidth: 2,
    borderColor: '#272E5C',
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  profileId: {
    fontSize: 12,
    color: '#D0D0D0',
    marginTop: 2,
  },
});
