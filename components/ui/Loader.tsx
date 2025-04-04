import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export default function Loader() {
  const theme = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
