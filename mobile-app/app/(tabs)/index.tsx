import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View>
      <h1>I LOVE BUNNIES</h1>

      <Link href="/bunnies">      <FontAwesome5 name="dog" size={32} color="green" /> Bunnies</Link>
      <Link href="/cheese">Cheese</Link>
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}


