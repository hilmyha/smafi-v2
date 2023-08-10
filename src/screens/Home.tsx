import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const statusBarColor = '#EFF7FF';
const buttonColor = '#A2D2FF';

export default function Home() {
  return (
    <SafeAreaView className="bg-[#EFF7FF] w-screen h-full">
      <StatusBar
        translucent
        backgroundColor={statusBarColor}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-8">
          {/* welcome header */}
          <View className="flex-row pt-[28px] justify-center items-center">
            <Image
              source={require('../assets/smafi-logo.png')}
              className="w-6 h-6"
            />
            <Text className="ml-1 text-lg font-bold text-secondary">Smafi</Text>
          </View>
          <View className="mt-12">
            <Text className="text-4xl text-center font-semibold text-primary">
              Selamat
            </Text>
            <Text className="text-4xl text-center font-semibold text-primary">
              Datang, User!
            </Text>
          </View>

          {/* card */}
          <View className="my-12 relative">
            <View className="bg-secondary p-8 pb-12 rounded-3xl">
              {/* fish image */}
              <View className="absolute right-0 top-1">
                <Image
                  source={require('../assets/fish.png')}
                  className="w-32"
                />
              </View>
              <View className="absolute left-4 bottom-4">
                <Image
                  source={require('../assets/bubble.png')}
                  className="w-10"
                />
              </View>

              {/* card information */}
              <View className="">
                <Text className="text-base mb-5 text-white">Saldo saya</Text>
                <Text className="text-3xl mb-5 font-bold text-white">
                  Rp 1.000.000
                </Text>
              </View>
            </View>
            <View className="absolute -bottom-7 rounded-full bg-white w-[80%] p-4 self-center">
              <View className="flex-row justify-between px-6">
                <Text className="text-base text-black">Keuntungan</Text>
                <Text className="text-base text-primary">Rp 500.000</Text>
              </View>
            </View>
          </View>

          {/* investasi button */}
          <View className="items-center mt-6">
            <TouchableOpacity className="bg-[#A2D2FF] w-[80%] rounded-full p-4">
              <View className="flex-row justify-center items-center">
                <Text className="text-base text-white">Investasi Sekarang</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* transaksi terbaru */}
        <View className="mt-12 bg-quaternary rounded-t-3xl p-8">
          <View className="mb-8 w-full items-center">
            <View className="w-[30%] h-[4px] rounded-full bg-secondary" />
          </View>
          <Text className="text-2xl font-semibold text-center text-primary">
            Transaksi Terkini
          </Text>

          <View className="mt-8">
            
            {/* transaksi 1 */}
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-base font-semibold mb-2 text-primary">Penjualan telur ikan</Text>
                <Text className="text-base font-bold text-tertiary">22 Agustus 2023</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-base font-bold text-primary">Rp 500.000</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-base font-semibold mb-2 text-primary">Penjualan telur ikan</Text>
                <Text className="text-base font-bold text-tertiary">22 Agustus 2023</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-base font-bold text-primary">Rp 500.000</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-base font-semibold mb-2 text-primary">Penjualan telur ikan</Text>
                <Text className="text-base font-bold text-tertiary">22 Agustus 2023</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-base font-bold text-primary">Rp 500.000</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-base font-semibold mb-2 text-primary">Penjualan telur ikan</Text>
                <Text className="text-base font-bold text-tertiary">22 Agustus 2023</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-base font-bold text-primary">Rp 500.000</Text>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
