import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{ color: "#000" }}>Hello world !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App









// override fun getJSBundleFile(): String? {
//         return Stallion.getJSBundleFile(applicationContext)
//       }

{/* <resources>
    <string name="app_name">TestApp</string>
    <string name="StallionProjectId">6899bcdff0de5106a2e8a6f0</string>
    <string name="StallionAppToken">spb_lq36HpfUICDkiQ1sRycmwdPjOxPYVogb7QbFxThH5b</string>
</resources> */}

//  "react-native-stallion": "^2.2.0"
// "stallion-cli": "^2.3.1",

// import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
// import { withStallion } from 'react-native-stallion';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Text>Hello</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default withStallion(App)

