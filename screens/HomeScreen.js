import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-3xl font-semibold">
          Enjoy the trip with
        </Text>
        <Text className="text-[#00bcc9] text-4xl font-bold">Good Moments</Text>

        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View className="absolute w-[400px] h-[400px] bg-[#00bcc9] rounded-full bottom-36 -right-36" />
      <View className="absolute w-[400px] h-[400px] bg-[#e99265] rounded-full -bottom-28 -left-36" />

      <View className="flex-1 relative items-center justify-center">
        <Image
          source={HeroImage}
          className="w-full h-full object-cover -bottom-10"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
