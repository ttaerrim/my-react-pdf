import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
    textIndent: 20,
  },
  bulletPoint: {
    width: 10,
    fontSize: 14,
  },
  itemContent: {
    flex: 1,
    fontSize: 14,
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>• </Text>
    <Text style={styles.itemContent}> {children}</Text>
  </View>
);

export default List;
