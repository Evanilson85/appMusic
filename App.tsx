import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from './src/themes';

import { ProviderMusic } from './src/context/playMusicCurrent';

import { CurrentMusic } from './src/components/music/currentMusic';
import { Home } from './src/pages/Home';
import { PlayMusic } from './src/pages/play';

export default function App() {

  const colorDefault = useColorScheme() 
  const theme = colorDefault ? themes[colorDefault] : themes.dark
  const colorStatus = colorDefault == 'dark' ? 'light' : 'dark'

  return (
    <ProviderMusic>
      <ThemeProvider theme={theme}>
        {/* // <View style={styles.container}>
        //   <Text>Open up App.tsx to start working on your app!</Text>
        // </View> */}
          <PlayMusic />
          <View style={styles.container}>
            <StatusBar style={colorStatus} backgroundColor={theme.colors.statusbar}  translucent animated networkActivityIndicatorVisible={true}  />
            <CurrentMusic />
          </View>
      </ThemeProvider>
    </ProviderMusic>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
});
