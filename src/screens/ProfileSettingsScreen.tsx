import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const ProfileSettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const SettingRow = ({ title, children }) => (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>
      {children}
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0a0a1a', '#000']} style={styles.background} />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Settings</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <SettingRow title="Dark Mode">
          <Switch
            trackColor={{ false: "#767577", true: "#00FFFF" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </SettingRow>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>User Preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About Parallel You</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  content: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  rowTitle: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    borderColor: 'rgba(255, 59, 48, 0.5)',
    borderWidth: 1,
  },
  logoutButtonText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileSettingsScreen;
