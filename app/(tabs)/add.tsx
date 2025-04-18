import { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  Animated,
  StyleSheet,
  SafeAreaView,
  Easing
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SplashScreen, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import services from '../../data/Services';
import { useLocalSearchParams } from 'expo-router';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Create a separate component for animated service items
const AnimatedServiceItem = ({ item, index, onPress }) => {
  const itemAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.spring(itemAnim, {
      toValue: 1,
      delay: index * 50,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: itemAnim,
        transform: [{ scale: itemAnim }]
      }}
    >
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.serviceImageContainer}>
          <Image
            source={typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl}
            style={styles.serviceImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.serviceInfo}>
          <Text style={[styles.serviceTitle, { fontFamily: "Poppins_700Bold" }]} className='text-gray-600'>
            {item.title}
          </Text>
          <Text style={[styles.serviceCategory, { fontFamily: "Poppins_400Regular" }]}>
            {item.category}
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function AddServiceScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(category||"All");
  const [search, setSearch] = useState("");
  const [appReady, setAppReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setAppReady(true);
        // Start animations
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(translateYAnim, {
            toValue: 0,
            duration: 800,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          })
        ]).start();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded || !appReady) {
    return null;
  }

  const categories = ["All", ...new Set(services.map((service) => service.category))];

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "All" || service.category === selectedCategory) &&
      service.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderServiceItem = ({ item, index }) => {
    return (
      <AnimatedServiceItem
        item={item}
        index={index}
        onPress={() => router.push({
          pathname: "/ServiceDetails",
          params: { service: JSON.stringify(item) }
        })}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View 
        style={[
          styles.container,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }]
          }
        ]}
        className="bg-gray-100"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { fontFamily: "Poppins_700Bold" }]} className='text-purple-200'>
            Add a Service
          </Text>

          {/* Search Input */}
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
            <TextInput
              style={[styles.searchInput, { fontFamily: "Poppins_400Regular" }]}
              placeholder="Search services..."
              placeholderTextColor="#9ca3af"
              value={search}
              onChangeText={setSearch}
              className="flex-1 text-gray-600 text-base"
            />
          </View>

          {/* Category Dropdown */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={setSelectedCategory}
              style={[styles.picker, { fontFamily: "Poppins_400Regular" }]}
              dropdownIconColor="#4b5563"
            >
              {categories.map((category, index) => (
                <Picker.Item 
                  key={index} 
                  label={category} 
                  value={category} 
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </View>

        {/* Service List */}
        <FlatList
          data={filteredServices}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={renderServiceItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <MaterialIcons name="search-off" size={48} color="#d1d5db" />
              <Text style={[styles.emptyText, { fontFamily: "Poppins_400Regular" }]}>
                No services found
              </Text>
            </View>
          }
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: '#00989B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  pickerContainer: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingVertical: -16,
    overflow: 'hidden',
  },
  picker: {
    height: 54,
    color: '#111827',
  },
  pickerItem: {
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  serviceImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  serviceImage: {
    width: '100%',
    height: '100%',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  serviceCategory: {
    fontSize: 10,
    color: '#6b7280',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
    color: '#9ca3af',
    marginTop: 16,
  },
});