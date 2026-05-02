import { useColorScheme } from '@/hooks/use-color-scheme';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomTabBarButton = ({ children, onPress, style }: any) => (
  <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
    <View style={{
      position: 'absolute',
      top: -32,
      width: 76,
      height: 76,
      borderRadius: 38,
      backgroundColor: '#F5F5F5',
    }} />
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: -24,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#272E5C',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#272E5C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
      }}
      onPress={onPress}
    >
      <AntDesign name="qrcode" size={30} color="#fff" />
    </TouchableOpacity>
    <Text style={{
      position: 'absolute',
      bottom: 8,
      fontSize: 10,
      fontWeight: '600',
      color: '#A0A0A0',
    }}>
      FAQ
    </Text>
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#272E5C',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: '#E1E1E1',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          paddingBottom: 8,
          paddingTop: 12,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="insights" color={color} />,
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: 'FAQ',
          tabBarLabel: 'FAQ',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="qrcode-scan" size={28} color="#fff" />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
