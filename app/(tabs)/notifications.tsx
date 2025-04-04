import { View, Text, ScrollView } from "react-native";
import { BellIcon } from "react-native-heroicons/outline";

const Notifications = () => {
  const notifications = [
    { id: 1, text: "Your post has been liked!", time: "2h ago" },
    { id: 2, text: "New comment on your post.", time: "5h ago" },
    { id: 3, text: "Someone followed you!", time: "1d ago" },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center justify-between p-6 rounded-b-lg shadow-lg shadow-black"  style={{ backgroundColor: '#00989B'}}>
        <Text className="text-purple-200 text-2xl font-bold">Notifications</Text>
        <BellIcon size={24} color="white" />
      </View>

      {/* Notifications List */}
      <ScrollView className="mt-4 px-4">
        {notifications.map((item) => (
          <View key={item.id} className="bg-white p-4 rounded-lg mb-2 shadow-md">
            <Text className="text-lg font-semibold">{item.text}</Text>
            <Text className="text-gray-500 text-sm">{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Notifications;
