import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Engineering', image: require('./assets/images/engineering.png') },
  { id: '2', name: 'Design', image: require('./assets/images/design.png') },
  { id: '3', name: 'Architecture', image: require('./assets/images/architecture.png') },
  { id: '4', name: 'Training', image: require('./assets/images/training.png') },
];

const CategoriesPage = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity className="bg-white p-4 rounded-xl shadow-md items-center w-[45%] m-2">
      <Image source={item.image} style={{ width: 60, height: 60 }} resizeMode="contain" />
      <Text className="text-gray-800 font-semibold mt-2">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="p-2">
        <Ionicons name="arrow-back-circle" size={30} color="#6D288E" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-center text-2xl font-semibold text-purple-700 mb-4">Categories</Text>

      {/* Category Grid */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

export default CategoriesPage;
