import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const numColumns = 2;
const { width } = Dimensions.get('window');
const data = [
  {id: 1, name: 'Pour Your Heart In - Black Romper', image:  require('./images/1.png'), price: '42.00'},
  {id: 2, name: 'Hugged With Lace - Sage Tunic', image:  require('./images/2.png'), price: '34.00'},

  {id: 3, name: 'Katie - Blue Floral Cold Shoulder', image:  require('./images/3.png'), price: '36.00'},
  {id: 4, name: 'Audry - Mauve Laced Dress', image:  require('./images/4.png'), price: '39.00'},

  {id: 5, name: 'Closest To You - Baby Pink Top', image:  require('./images/5.png'), price: '36.00'},
  {id: 6, name: 'Hometown Plaid - Pink', image:  require('./images/6.png'), price: '32.00'},

  {id: 7, name: 'Ditsy Dynasty - Ivory Top', image:  require('./images/7.png'), price: '34.00'},
  {id: 8, name: 'Undercover Star - Short Sleeve', image:  require('./images/8.png'), price: '36.00'},

  {id: 9, name: 'Total Package - Leggings', image:  require('./images/9.png'), price: '32.00'},
  {id: 10, name: 'Proud To Be Me - Cardigan', image:  require('./images/10.png'), price: '54.00'},
 
];


const ProductList = () => {

    const navigation = useNavigation();

  const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { itemId: item.id })}>

    <View style={styles.item}>
    
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image}
      
      
      />

<Text style={styles.label}>New in</Text>

</View>

      <Text style ={styles.textFont}>{item.name}</Text>
      <Text style ={styles.textFont}>${item.price}</Text>
      </View>
      
          </TouchableOpacity>

  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={numColumns}
      columnWrapperStyle={styles.columnWrapper}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    padding: 0,
    backgroundColor: 'white',
    borderRadius: 8,
  
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },

  imageContainer: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: 10, 
    left: 10, 
    backgroundColor: 'rgba(181, 105, 87, 1.0)', 
    color: 'white',
    padding: 5,
    borderRadius: 1,
    fontFamily:'NunitoSans-Regular',
    fontSize: 12,
    maxWidth: width / 2
  },
  textFont: {
    fontFamily:'NunitoSans-Regular',
    fontSize: 14,
    marginTop:2,
  },
  flatList: {
    flex: 1,
    backgroundColor:'white',
  },
});

export default ProductList;




///iPhone 15 Pro Max