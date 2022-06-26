import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, sizes } from "../../../constants";
import { HomeStackParams } from "../../../navigation/HomeNavigator";

const TrashTypeDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParams, "TrashTypeDetail">>();
  const { item } = route.params;

  const renderMaterials = () => item.materials.map((material: string) => (
    <Text key={material} style={styles.material}>{`\u25CF ${material}`}</Text>
  ));

  return (
    <View style={styles.trashTypeDetailScreenContainer}>
      <View style={styles.trashTypeDetailScreenHeader}>
        <Text style={styles.trashTypeLabel}>{item.label}</Text>
        <Text style={styles.trashTypeMoreInfo}>{item?.moreInfo}</Text>
      </View>
      <View style={styles.trashTypeDetailScreenBody}>
        <Text style={styles.trashTypeBodyHeader}>Giới thiệu chung</Text>
        <Text style={styles.trashTypeBodyContent}>{item.description}</Text>
        <Text style={styles.trashTypeBodyHeader}>Một số loại rác</Text>
        {renderMaterials()}
      </View>
    </View>
  );
};

export default TrashTypeDetailScreen;

const styles = StyleSheet.create({
  trashTypeDetailScreenContainer: {
    backgroundColor: colors.white,
    flex: 1
  },
  trashTypeDetailScreenHeader: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "flex-end"
  },
  trashTypeDetailScreenBody: {
    flex: 7,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  trashTypeLabel: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.white,
    marginVertical: 16
  },
  trashTypeMoreInfo: {
    fontSize: sizes.body,
    color: colors.white,
    marginBottom: 4
  },
  trashTypeBodyHeader: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    marginVertical: 8
  },
  trashTypeBodyContent: {
    lineHeight: 24,
    marginVertical: 16
  },
  material: {
    lineHeight: 32,
    marginLeft: 16
  }
});
