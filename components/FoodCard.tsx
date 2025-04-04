import { View, Text, TouchableOpacity } from 'react-native';

export default function FoodCard({ name, price }) {
  return (
    <View className="flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
      <View>
        <Text className="text-lg font-semibold">{name}</Text>
        <Text className="text-gray-500">{price}</Text>
      </View>
      <TouchableOpacity className="px-4 py-2 bg-green-500 rounded-lg">
        <Text className="text-white">Add ➕</Text>
      </TouchableOpacity>
    </View>
  );
}
