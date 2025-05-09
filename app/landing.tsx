// import { View, Text, Image, Dimensions } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import { useRouter } from 'expo-router';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

// const { width, height } = Dimensions.get('window');

// export default function LandingPage() {
//   const router = useRouter();
//   const [appReady, setAppReady] = useState(false);
  
//     let [fontsLoaded] = useFonts({
//       Poppins_400Regular,
//       Poppins_700Bold,
//     });
  
//     useEffect(() => {
//       async function prepare() {
//         if (fontsLoaded) {
//           setAppReady(true);
//         }
//       }
//       prepare();
//     }, [fontsLoaded]);
  
//     if (!fontsLoaded || !appReady) {
//       return null;
//     }

//   return (
//     <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#00989B', alignItems: 'center'}}> 
//     <View style={{ alignItems: 'center', justifyContent: 'center', top: height * -0.28}} className="absolute w-[900px] h-[900px] bg-white rounded-full"/>
//                 <View style={{ width, alignItems: 'center', justifyContent: 'center' }} className='mt-48'>
//                   <Image source={require('./assets/images/logo.png')} style={{ width: 300, height: 320, resizeMode: 'center' }} />
//                   <Text className="text-3xl text-gray-600 -mt-20" style={{ fontFamily: "Poppins_700Bold" }}>Newdym Global R&D</Text>
//                   <Text className="text-md text-gray-500 text-center px-6">Innovate. Engineer. Design. Build.</Text>
//                 </View>
            // <View className="flex-row justify-center px-8">
            //     <TouchableOpacity onPress={() => router.replace('/splash')} activeOpacity={0.9}>
            //     <View style={{backgroundColor: '#1A6AFF'}} className="px-8 py-4 rounded-full mt-64 shadow-md shadow-black border border-blue-500">
            //     <Text className="text-white text-lg font-semibold tracking-wider">Get Started</Text>
            //     </View>
            //     </TouchableOpacity>

            // </View>
//           </GestureHandlerRootView>
//   );
// }


import { View, Text, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
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

  // Calculate responsive values
  const circleSize = Math.max(width, height) * 0.9;
  const circleTop = height * -0.1;
  const logoWidth = width * 0.5;
  const logoHeight = height * 0.1;
  const titleSize = width * 0.05;
  const subtitleSize = width * 0.04;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#00989B', alignItems: 'center'}}>
      {/* White circle background */}
      <View 
        className="absolute bg-white rounded-full" 
        style={{
          width: circleSize,
          height: circleSize,
          top: circleTop,
        }}
      />
      
      {/* Logo and text section */}
      <View className="items-center justify-center mt-[65%] px-5 w-full">
        <Image 
          source={require('./assets/images/logo.png')} 
          className="max-w-[300px] max-h-[320px]" 
          style={{
            width: logoWidth,
            height: logoHeight,
          }}
          resizeMode="contain"
        />
        <Text 
          className="text-gray-600 text-center max-w-[90%]"
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: titleSize,
            marginTop: height * 0.05,
          }}
        >
          Newdym Global R&D
        </Text>
        <Text 
          className="text-gray-500 text-center px-5 mt-[1%]"
          style={{ fontSize: subtitleSize }}
        >
          Innovate. Engineer. Design. Build.
        </Text>
      </View>
      
      {/* Button section */}
      <View className="flex-row justify-center px-8">
                <TouchableOpacity onPress={() => router.replace('/splash')} activeOpacity={0.9}>
                <View style={{backgroundColor: '#1A6AFF'}} className="px-8 py-4 rounded-full mt-64 shadow-md shadow-black border border-blue-500">
                <Text className="text-white text-sm font-semibold tracking-wider">Get Started</Text>
                </View>
                </TouchableOpacity>

            </View>
    </GestureHandlerRootView>
  );
}