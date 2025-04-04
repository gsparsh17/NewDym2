import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { SplashScreen } from 'expo-router';
import '../global.css';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    const prepareApp = async () => {
      await SplashScreen.preventAutoHideAsync();
      router.replace('/landing');
      await SplashScreen.hideAsync();
    };

    prepareApp();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" />
      <Stack.Screen name="splash" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="ServiceDetails" 
        options={{ 
          title: 'Service Details',
          presentation: 'modal' // Optional: makes it slide up as a modal
        }} 
      />
    </Stack>
  );
}