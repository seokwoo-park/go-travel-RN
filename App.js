import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Open up App.js to start working on your aeddpp!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}
