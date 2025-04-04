import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";

interface LoadingProps {
  redirectTo?: string; // Optional redirection
  delay?: number; // Optional delay in milliseconds
}

export default function Loading({ redirectTo = '', delay = 3000 }: LoadingProps) {
  const router = useRouter();

  useEffect(() => {
    if (redirectTo) {
      const timeout = setTimeout(() => {
        router.replace(redirectTo);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [redirectTo, delay, router]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <ActivityIndicator size="large" style={{ borderColor: '#00989B'}}/>
      <Text className="text-xl text-gray-500 mt-4" style={{ fontFamily: "Poppins_700Bold", color: '#00989B' }} >Loading...</Text>
    </View>
  );
}
