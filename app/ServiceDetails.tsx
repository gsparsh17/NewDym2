import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator, 
  Share, 
  ScrollView, 
  Animated, 
  Easing,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { ArrowLeftIcon, ShareIcon, ExclamationCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import { HeartIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ServiceType = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  fees: string;
  rating?: number;
};

const HIGHLIGHTS = [
  "Professional service",
  "Quality guaranteed",
  "Flexible scheduling",
  "24/7 customer support",
  "Certified experts"
];

export default function ServiceDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [service, setService] = useState<ServiceType | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  
  useEffect(() => {
    const loadServiceData = async () => {
      try {
        if (!params.service) throw new Error('No service data provided');
        
        const parsedService = JSON.parse(params.service as string);
        if (!parsedService) throw new Error('Invalid service data');
        
        // Add mock rating if none exists
        parsedService.rating = parsedService.rating || (Math.random() * 2 + 3).toFixed(1);
        setService(parsedService);
      } catch (error) {
        console.error('Failed to load service:', error);
        setService(null);
      } finally {
        setIsLoading(false);
        // Run animations
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          })
        ]).start();
      }
    };

    loadServiceData();
  }, [params.service]);

  const handleShare = async () => {
    try {
      if (!service) return;
      
      await Share.share({
        title: `Check out ${service.title}`,
        message: `${service.title}\n\n${service.description}\n\nPrice: ${service.fees}\n\nRating: ${service.rating}/5`,
        url: service.imageUrl
      });
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };

  const handleBookNow = () => {
    // Implement booking logic
    console.log('Booking service:', service?.title);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  if (!service) {
    return (
      <View style={styles.errorContainer}>
        <ExclamationCircleIcon size={48} color="#ef4444" />
        <Text style={styles.errorText}>
          Couldn't load service details. Please try again.
        </Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View 
        style={[
          styles.container,
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        {/* Header Image with Floating Actions */}
        <View style={styles.imageContainer}>
          {imageError ? (
            <View style={styles.imageFallback}>
              <Text style={styles.imageFallbackText}>Image not available</Text>
            </View>
          ) : (
            <Image 
              source={typeof service.imageUrl === 'string' ? { uri: service.imageUrl } : service.imageUrl}
              style={styles.image}
              resizeMode="cover"
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
            />
          )}
          
          <View style={[styles.headerActions, { top: insets.top + 16 }]}>
            <TouchableOpacity 
              onPress={() => router.back()}
              style={styles.actionButton}
            >
              <ArrowLeftIcon size={24} color="#4b5563" />
            </TouchableOpacity>
            
            <View style={styles.rightActions}>
              <TouchableOpacity 
                onPress={() => setIsFavorite(!isFavorite)}
                style={styles.actionButton}
              >
                <HeartIcon 
                  size={24} 
                  color={isFavorite ? "#ef4444" : "#4b5563"} 
                  fill={isFavorite ? "#ef4444" : "none"} 
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={handleShare}
                style={styles.actionButton}
              >
                <ShareIcon size={24} color="#4b5563" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Content */}
        <ScrollView 
          style={styles.contentScroll}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={2}>
              {service.title}
            </Text>
            {service.rating && (
              <View style={styles.ratingBadge}>
                <StarIcon size={16} color="#f59e0b" fill="#f59e0b" />
                <Text style={styles.ratingText}>
                  {service.rating}
                </Text>
              </View>
            )}
          </View>
          
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>
              {service.category}
            </Text>
          </View>
          
          <Text style={styles.price}>
            {service.fees}
          </Text>
          
          <Text style={styles.description}>
            {service.description}
          </Text>
          
          {/* Highlights Section */}
          <View style={styles.highlightsSection}>
            <Text style={styles.sectionTitle}>Service Highlights</Text>
            <View style={styles.highlightsList}>
              {HIGHLIGHTS.map((item, index) => (
                <View key={index} style={styles.highlightItem}>
                  <View style={styles.highlightBullet} />
                  <Text style={styles.highlightText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Fixed Bottom Button */}
        <View style={[styles.bookButtonContainer, { bottom: insets.bottom + 16 }]}>
          <TouchableOpacity 
            style={styles.bookButton}
            onPress={handleBookNow}
            activeOpacity={0.9}
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  errorText: {
    fontSize: 18,
    color: '#374151',
    marginTop: 16,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 24,
    backgroundColor: '#6366f1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  imageContainer: {
    width: '100%',
    height: 280,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageFallback: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFallbackText: {
    color: '#64748b',
    fontSize: 16,
  },
  headerActions: {
    position: 'absolute',
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  contentScroll: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    flex: 1,
    marginRight: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    color: '#f59e0b',
    fontWeight: '600',
    marginLeft: 4,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  category: {
    fontSize: 14,
    color: '#4f46e5',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00989B',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
    marginBottom: 32,
  },
  highlightsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  highlightsList: {
    gap: 12,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightBullet: {
    width: 8,
    height: 8,
    backgroundColor: '#4f46e5',
    borderRadius: 4,
    marginRight: 12,
  },
  highlightText: {
    fontSize: 16,
    color: '#334155',
    flex: 1,
  },
  bookButtonContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
  },
  bookButton: {
    backgroundColor: '#00989B',
    paddingVertical: 16,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});