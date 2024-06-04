import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    name: "Pour Your Heart In - Black Romper",
    image: require("../images/1.png"),
    price: "42.00",
    quantity: 1,
  },
  {
    id: "2",
    name: "Hugged With Lace - Sage Tunic",
    image: require("../images/2.png"),
    price: "42.00",
    quantity: 1,
  },
  {
    id: "3",
    name: "Katie - Blue Floral Cold Shoulder",
    image: require("../images/3.png"),
    price: "42.00",
    quantity: 1,
  },
];

const CartList = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState(data);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { itemId: item.id })}
    >
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} resizeMode="stretch" />
        <View style={styles.infoContainer}>
          <Text style={styles.textFont}>
            {"Pour Your Heart In - Black Romper"}
          </Text>
          <Text style={styles.textsizeFont}>{"Size: SMALL"}</Text>
          <Text style={styles.textstockFont}>{"2 in stock"}</Text>
          <Text style={styles.textFont}>${"42"}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
            >
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const renderFooter = () => (
    <View style={styles.containerbottom}>
      <Text style={styles.subtotal}>Subtotal: $57.00</Text>
      <Text style={styles.taxShipping}>
        Taxes and shipping calculated at checkout
      </Text>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
  },

  topContainer: {
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
  },

  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  textFont: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "NunitoSans-Regular",
  },

  textsizeFont: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "NunitoSans-Regular",
  },
  textstockFont: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: "NunitoSans-Regular",
    color: "#B56957",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    width: 120,
  },
  quantityButton: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
  },
  quantity: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: "#ccc",
    padding: 20,
    alignItems: "center",
    fontFamily: "NunitoSans-Regular",
  },

  subtotal: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "NunitoSans-Regular",
  },
  taxShipping: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "NunitoSans-Regular",
  },
  addNote: {
    fontSize: 16,
    color: "#007bff", // Link color
    fontFamily: "NunitoSans-Regular",
  },
  containerbottom: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  checkoutButton: {
    backgroundColor: "#B56957",
    paddingVertical: 16,
    paddingHorizontal: 130,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "NunitoSans-Regular",
  },
});

export default CartList;
