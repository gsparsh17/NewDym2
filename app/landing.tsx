import { View, Text, Image, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');

export default function LandingPage() {
  const router = useRouter();
  const [appReady, setAppReady] = useState(false);
  
    let [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold,
    });
  
    useEffect(() => {
      async function prepare() {
        if (fontsLoaded) {
          setAppReady(true);
        }
      }
      prepare();
    }, [fontsLoaded]);
  
    if (!fontsLoaded || !appReady) {
      return null;
    }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#00989B', alignItems: 'center'}}> 
    <View style={{ alignItems: 'center', justifyContent: 'center', top: height * -0.28}} className="absolute w-[900px] h-[900px] bg-white rounded-full"/>
                <View style={{ width, alignItems: 'center', justifyContent: 'center' }} className='mt-48'>
                  <Image source={require('./assets/images/logo.png')} style={{ width: 300, height: 320, resizeMode: 'center' }} />
                  <Text className="text-3xl text-gray-600 -mt-20" style={{ fontFamily: "Poppins_700Bold" }}>Newdym Global R&D</Text>
                  <Text className="text-md text-gray-500 text-center px-6">Innovate. Engineer. Design. Build.</Text>
                </View>
            <View className="flex-row justify-center px-8">
                <TouchableOpacity onPress={() => router.replace('/splash')} activeOpacity={0.9}>
                <View style={{backgroundColor: '#1A6AFF'}} className="px-8 py-4 rounded-full mt-64 shadow-md shadow-black border border-blue-500">
                <Text className="text-white text-lg font-semibold tracking-wider">Get Started</Text>
                </View>
                </TouchableOpacity>

            </View>
          </GestureHandlerRootView>
  );
}
