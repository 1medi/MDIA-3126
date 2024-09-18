
import {Text,Pressable,View} from 'react-native'
import { Link } from 'expo-router';

export default function Cheese(){
  return (
    <View>
    <Text>Bunnies Love Cheese!</Text>
    
    <Link href='/bunnies'>bunnies</Link>
    <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  )


}