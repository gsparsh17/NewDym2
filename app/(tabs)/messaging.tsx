import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { PaperAirplaneIcon } from "react-native-heroicons/solid";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const messages = [
  { id: 1, text: "Hey! How are you?", sender: "user", avatar: require("../assets/images/user (1).png") },
  { id: 2, text: "I'm good! What about you?", sender: "receiver", avatar: require("../assets/images/user (2).png") },
  { id: 3, text: "Doing great! Working on a project.", sender: "user", avatar: require("../assets/images/user (1).png") },
  { id: 4, text: "That's awesome! Keep it up.", sender: "receiver", avatar: require("../assets/images/user (2).png") }
];

const MessagingPage = () => {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="p-4 flex-row items-center shadow-lg shadow-black" style={{ backgroundColor: '#00989B'}}>
        <Image source={require("../assets/images/user (1).png")} className="w-10 h-10 rounded-full" />
        <Text className="text-purple-200 text-xl ml-3" style={{ fontFamily: "PoppinsBold" }}>Janardhan Pal</Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className={`flex-row items-end ${item.sender === "user" ? "justify-end" : "justify-start"} p-3`}>
            {item.sender === "receiver" && <Image source={item.avatar} className="w-8 h-8 rounded-full mr-2" />}
            <View
              className={`p-3 rounded-lg max-w-[70%] text-xs ${
                item.sender === "user" ? "bg-blue-400 ml-auto" : "bg-white"
              }`}
            >
              <Text className={`${item.sender === "user" ? "text-white text-sm" : "text-gray-700 text-sm"}`} style={{ fontFamily: "PoppinsRegular" }}>
                {item.text}
              </Text>
            </View>
            {item.sender === "user" && <Image source={item.avatar} className="w-8 h-8 rounded-full ml-2" />}
          </View>
        )}
      />

      {/* Input Field */}
      <View className="flex-row items-center bg-white p-3 border-t border-gray-200">
        <TextInput
          placeholder="Type a message..."
          className="flex-1 bg-gray-100 p-3 text-sm rounded-full text-gray-700"
          style={{ fontFamily: "PoppinsRegular" }}
        />
        <TouchableOpacity className="ml-3 p-3 rounded-full" style={{ backgroundColor: '#00989B'}}>
          <PaperAirplaneIcon size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagingPage;
