import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#114111', dark: '#111111' }}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PATTERNOFY</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Image
          source={{
            uri: 'https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg',
          }}
          style={{width: 200, height: 200}}
        />
        </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">OUR MOTTO: M=pF^2</ThemedText>
        <ThemedText type='subtitle'>Math= pattern x Fun^2 </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          WELCOME TO YOUR OWN PATTERN STUDIO
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText> Create your own maths visual pattern</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    
  );  
}


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    
  },
 
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  
});
