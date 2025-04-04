import { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, ScrollView, Easing } from 'react-native';
import { PencilIcon, CogIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const [isEditing, setIsEditing] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;
  const contentScale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    // Reset values for clean animation start
    fadeAnim.setValue(0);
    slideUpAnim.setValue(30);
    contentScale.setValue(0.95);

    // Staggered animation sequence with easing
    Animated.parallel([
      // Fade animation with smooth easing
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      // Slide up animation with bounce effect
      Animated.spring(slideUpAnim, {
        toValue: 0,
        speed: 12,
        bounciness: 8,
        useNativeDriver: true,
      }),
      // Subtle scale animation for depth
      Animated.timing(contentScale, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    // Add your edit profile logic here
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        { 
          opacity: fadeAnim,
          transform: [
            { translateY: slideUpAnim },
            { scale: contentScale }
          ],
          paddingTop: insets.top,
        }
      ]}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Animated.Image
              source={require('../assets/images/user (1).png')}
              style={[
                styles.avatar,
                {
                  opacity: fadeAnim,
                  transform: [{
                    translateY: slideUpAnim.interpolate({
                      inputRange: [0, 30],
                      outputRange: [0, 15]
                    })
                  }]
                }
              ]}
            />
            <TouchableOpacity style={styles.settingsButton}>
              <CogIcon size={24} color="#00989B" />
            </TouchableOpacity>
          </View>
          
          <Animated.Text style={[
            styles.userName,
            {
              opacity: fadeAnim,
              transform: [{
                translateY: slideUpAnim.interpolate({
                  inputRange: [0, 30],
                  outputRange: [0, 10]
                })
              }]
            }
          ]}>
            Nitin
          </Animated.Text>
          
          <Animated.Text style={[
            styles.userEmail,
            {
              opacity: fadeAnim,
              transform: [{
                translateY: slideUpAnim.interpolate({
                  inputRange: [0, 30],
                  outputRange: [0, 5]
                })
              }]
            }
          ]}>
            nitin@example.com
          </Animated.Text>

          {/* Edit Profile Button */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{
                translateY: slideUpAnim.interpolate({
                  inputRange: [0, 30],
                  outputRange: [0, 5]
                })
              }]
            }}
          >
            <TouchableOpacity 
              style={styles.editButton}
              onPress={handleEditProfile}
              activeOpacity={0.8}
            >
              <PencilIcon size={18} color="white" />
              <Text style={styles.editButtonText}>
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* User Info Section */}
        <Animated.View style={[
          styles.infoSection,
          {
            opacity: fadeAnim,
            transform: [{
              translateY: slideUpAnim.interpolate({
                inputRange: [0, 30],
                outputRange: [0, 20]
              })
            }]
          }
        ]}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>+123 456 7890</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>Lucknow, India</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Member Since</Text>
            <Text style={styles.infoValue}>January 2023</Text>
          </View>
        </Animated.View>

        {/* Additional Sections */}
        <Animated.View style={[
          styles.infoSection,
          {
            opacity: fadeAnim,
            transform: [{
              translateY: slideUpAnim.interpolate({
                inputRange: [0, 30],
                outputRange: [0, 15]
              })
            }],
            marginBottom: 20
          }
        ]}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Language</Text>
            <Text style={styles.infoValue}>English</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Theme</Text>
            <Text style={styles.infoValue}>Light</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileHeader: {
    backgroundColor: '#00989B',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  settingsButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A6AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
});

export default Profile;