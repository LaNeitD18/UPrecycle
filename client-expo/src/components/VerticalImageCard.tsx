import { Image } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, sizes } from "../constants";

interface VerticalImageCardProps {
  imageUrl: string;
  title: string;
}

const VerticalImageCard: React.FC<VerticalImageCardProps> = ({
  imageUrl,
  title
}) => (
  <TouchableOpacity style={styles.verticalImageCardContainer}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.contentView}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default VerticalImageCard;

const styles = StyleSheet.create({
  verticalImageCardContainer: {
    // flex: 1,
    flexDirection: "row",
    height: sizes.height * 0.15,
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 4,
    backgroundColor: colors.white,
    margin: 8
  },
  image: {
    width: sizes.width * 0.25,
    borderRadius: 16
  },
  contentView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexShrink: 1
  },
  title: {
    flex: 1,
    fontSize: sizes.body,
    fontWeight: "600"
  }
});
