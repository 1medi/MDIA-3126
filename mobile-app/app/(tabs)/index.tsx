import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Home() {
  return (
    <View>
      <h1>I LOVE BUNNIES</h1>
      <Link href="/bunnies">Bunnies</Link>
      <Link href="/cheese">Cheese</Link>
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}
