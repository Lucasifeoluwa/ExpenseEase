import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";

const colors = ["#5C6BC0", "#009688", "#F44336"];

const Try = () => {
  const cardsPan = useRef(new Animated.ValueXY()).current;
  const [cardsStackAnim] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: cardsPan.x,
          dy: cardsPan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: (event, gestureState) => {
      Animated.timing(cardsPan, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(cardsStackAnim, {
        toValue: 1,
        useNativeDriver: false,
        duration: 300,
      }).start(() => {
        cardsStackAnim.setValue(0);
        setCurrentIndex(currentIndex + 1);
        //console.log(currentIndex);
      });
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View // last card
        style={{
          width: 300,
          height: 150,
          position: "absolute",
          zIndex: 1,
          bottom: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [40, 20],
          }),
          backgroundColor: colors[(currentIndex + 2) % 3],
          opacity: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 0.6],
          }),
          transform: [
            {
              scale: cardsStackAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 0.9],
              }),
            },
          ],
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hi</Text>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          width: 300,
          height: 150,
          position: "absolute",
          backgroundColor: colors[(currentIndex + 1) % 3],
          zIndex: 2,
          bottom: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          }),
          transform: [
            {
              scale: cardsStackAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1.0],
              }),
            },
          ],
          opacity: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.6, 1],
          }),
        }}
      />
      <Animated.View // frontmost card
        {...cardsPanResponder.panHandlers}
        style={{
          width: 300,
          height: 150,
          position: "absolute",
          backgroundColor: colors[currentIndex % 3],
          zIndex: cardsStackAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [3, 2, 0],
          }),
          bottom: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 40],
          }),
          opacity: cardsStackAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.3],
          }),
          transform: [
            { translateX: cardsPan.x },
            { translateY: cardsPan.y },
            {
              scale: cardsStackAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.8],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Try;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
