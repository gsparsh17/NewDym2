import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { BellIcon, HeartIcon } from "lucide-react-native";
import categoryData from "../../data/Category";
import Loading from "../../components/loading";
import trendingServices from "../../data/trendingServices"; 
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { Inter_400Regular } from "@expo-google-fonts/inter";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    InterRegular: Inter_400Regular,
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded || isLoading) return <Loading />;

  return (
    <View className="flex-1 bg-gray-100">
      {/* 🏡 Header with Gradient */}
      <View
        className="p-6 rounded-b-xl shadow-lg shadow-black"
        style={{backgroundColor: '#00989B'}}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-purple-200 text-3xl" style={{ fontFamily: "PoppinsBold"}}>
            Welcome back!
          </Text>
          <TouchableOpacity>
            <BellIcon size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl mt-1" style={{ fontFamily: "Poppins_500Medium" }}>
          Nitin
        </Text>
        <TouchableOpacity onPress={() => router.push("/add")} activeOpacity={1}>
          <View className="mt-4 bg-white p-3 rounded-2xl shadow-md flex-row items-center">
            <TextInput
              placeholder="What are you looking for?"
              className="flex-1 text-gray-600 text-lg"
              editable={false}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* 📚 Categories */}
      <View className="p-3 py-8">
        <Text className="text-2xl text-gray-600" style={{ fontFamily: "PoppinsBold" }}>
          Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2 h-[180px]">
          <View className="flex-row w-[95%] justify-around">
            {categoryData.map((category, index) => (
              <View key={index} className="items-center">
              <View className="w-[90px] m-1 items-center bg-white p-4 rounded-full shadow-lg">
                <Image source={category.icon} className="w-16 h-16" />
                
              </View>
              <Text className="mt-2 text-sm text-gray-700 text-center" style={{ fontFamily: "Poppins_500Medium" }}>
              {category.name}
            </Text>
            <Text className="text-gray-400 text-sm">1200 skills</Text>
            </View>
            ))}
          </View>
        </ScrollView>

        {/* 🔥 Trending Services */}
        <Text className="mt-10 mb-6 text-2xl text-gray-600" style={{ fontFamily: "PoppinsBold" }}>
          Trending Services
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} className="mt-3">
          {trendingServices.map((service) => (
            <View key={service.id} className="bg-white p-4 rounded-xl shadow-lg mb-4 flex-row items-center">
              <Image
                source={typeof service.imageUrl === 'string' ? { uri: service.imageUrl } : service.imageUrl}
                className="w-16 h-16 rounded-lg mb-3"
              />
              <View className="ml-4 flex-1">
                <Text className="text-lg text-gray-700" style={{ fontFamily: "PoppinsRegular" }}>
                  {service.title}
                </Text>
                <Text className="text-blue-500 mt-1" style={{ fontFamily: "InterRegular" }}>
                  Starting at {service.fees}
                </Text>
                <Text className="text-yellow-500">{service.rating} ⭐</Text>
              </View>
              <TouchableOpacity>
                <HeartIcon size={24} color="#FF5757" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
