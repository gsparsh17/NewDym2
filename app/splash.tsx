import { View, Text, Image, Dimensions } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowBigRight, ArrowBigRightDash, ArrowBigRightIcon } from 'lucide-react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Newdym Engineering',
    description: 'Engineering solutions that push technological boundaries.',
    image: require('./assets/images/engineering.png')
  },
  {
    id: '2',
    title: 'Newdym Design',
    description: 'Crafting modern, functional, and aesthetic design solutions.',
    image: require('./assets/images/design.png')
  },
  {
    id: '3',
    title: 'Newdym Architecture',
    description: 'Transforming spaces with sustainable and innovative architecture.',
    image: require('./assets/images/architecture.png')
  },
  {
    id: '4',
    title: 'Trainings',
    description: 'Upskilling professionals with hands-on, industry-relevant training.',
    image: require('./assets/images/training.png')
  }
];

export default function OnboardingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();
    
      let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium,
      });
    
      // const [appReady, setAppReady] = useState(false);
      // useEffect(() => {
      //   if (fontsLoaded) {
      //     setAppReady(true);
      //   }
      // }, [fontsLoaded]);
      
      // if (!fontsLoaded) {
      //   return null;
      // }

  const onViewRef = React.useRef(({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#00989B', alignItems: 'center' }}> 
        <View style={{ alignItems: 'center', justifyContent: 'center', top: height * -0.28 }} className="absolute w-[900px] h-[900px] bg-white rounded-full"/>
        <View className="flex-1">
        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <View style={{ width, alignItems: 'center', justifyContent: 'center', top: height * -0.1 }}>
              <Image source={item.image} style={{ width: width * 0.8, height: height * 0.5, resizeMode: 'contain' }} />
              <Text className="text-2xl text-gray-600" style={{ fontFamily: "Poppins_500Medium" }}>{item.title}</Text>
              <Text className="text-lg text-gray-500 mt-2 text-center px-6" style={{ fontFamily: "Poppins_400Regular" }}>{item.description}</Text>
            </View>
          )}
        />

        {/* Navigation Buttons */}
        <View 
  className={`absolute bottom-10 left-0 right-0 px-8 flex-row ${
    currentIndex === slides.length - 1 ? 'justify-center' : 'justify-between'
  } items-center`}
>
  {/* Skip Button */}
  {currentIndex === slides.length - 1 ? null : (
    <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
      <View style={{backgroundColor: '#1A6AFF'}} className="px-6 py-3 rounded-full shadow-md shadow-black border border-blue-500">
        <Text className="text-white text-lg font-semibold tracking-wider">Skip</Text>
      </View>
    </TouchableOpacity>
  )}

  {/* Next or Home Button */}
  {currentIndex === slides.length - 1 ? (
    <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
      <View className="bg-blue-500 flex-row justify-center px-6 py-3 rounded-full shadow-md shadow-black border border-blue-500">
        <Text className="text-white text-lg font-semibold tracking-wider">Home</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity 
      onPress={handleNext} 
      className="bg-blue-500 p-4 rounded-full shadow-md shadow-black border border-blue-500"
    >
      <ArrowBigRightDash size={40} color="white" strokeWidth={2.5} />
    </TouchableOpacity>
  )}
</View>


      </View>
    </GestureHandlerRootView>
  );
}
