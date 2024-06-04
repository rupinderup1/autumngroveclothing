import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity,StyleSheet,Text, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Path } from 'react-native-svg';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import FastImage from 'react-native-fast-image';


const { width } = Dimensions.get('window');

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);


  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };



  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedSizess, setSelectedSize] = useState(''); // State to store selected size



  // Function to handle adding to wishlist
  const handleAddToWishlist = () => {
    setWishlistCount(wishlistCount + 1); 
  };

  // Function to handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };


  


  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const data = [
    {id: 1, name: 'Pour Your Heart In - Black Romper', image: require('./images/1.png'), price: '42.00'},
    {id: 2, name: 'Hugged With Lace - Sage Tunic', image: require('./images/2.png'), price: '34.00'},
    {id: 3, name: 'Katie - Blue Floral Cold Shoulder', image: require('./images/3.png'), price: '36.00'},
    {id: 4, name: 'Audry - Mauve Laced Dress', image: require('./images/4.png'), price: '39.00'},
    {id: 5, name: 'Closest To You - Baby Pink Top', image: require('./images/5.png'), price: '36.00'},
    {id: 6, name: 'Hometown Plaid - Pink', image: require('./images/6.png'), price: '32.00'},
    {id: 7, name: 'Ditsy Dynasty - Ivory Top', image: require('./images/7.png'), price: '34.00'},
    {id: 8, name: 'Undercover Star - Short Sleeve', image: require('./images/8.png'), price: '36.00'},
    {id: 9, name: 'Total Package - Leggings', image: require('./images/9.png'), price: '32.00'},
    {id: 10, name: 'Proud To Be Me - Cardigan', image: require('./images/10.png'), price: '54.00'},
  ];



  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.subHeader}>SHIPS FROM PEORIA, AZ</Text>

      <View style={styles.imageContainer}>
        <FastImage
          source={data[selectedImageIndex].image}
          style={{ width: "100%", height: width / 0.67 }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <Text style={styles.newLabel}>New in</Text>
      </View>

      {/* Scrollable thumbnails */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleThumbnailClick(index)}
          >
            <FastImage
              source={item.image}
              style={{ width: 100, height: 100 / 0.67, marginHorizontal: 5 }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.textFont}>{"So Much Heart To Give - Gabby"}</Text>
        <Text style={styles.textFont}>${"42.00"}</Text>
        <Text style={styles.textstockFont}>
          {
            "Pay in 4 interest-free installments for orders over $50.00 with shop pay"
          }
        </Text>

        <View style={styles.infoContainerwishlist}>
          <TouchableOpacity style={styles.button} onPress={handleAddToWishlist}>
            <FontAwesomeIcon icon={faHeart} color="white" />
            <Text style={styles.text}> ADDED TO WISHLIST</Text>
            <View style={styles.wishlistCountContainer}>
              <Text style={styles.wishlistCount}>{wishlistCount}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerpicker}>
          <Text style={styles.lableQUT}>Quantity</Text>

          <View style={styles.containerQUT}>
            <TouchableOpacity
              style={styles.buttonQUT}
              onPress={decreaseQuantity}
            >
              <Text style={styles.buttonTextQUT}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.buttonQUT}
              onPress={increaseQuantity}
            >
              <Text style={styles.buttonTextQUT}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerBTN}>
          <TouchableOpacity style={styles.buttonBTN1}>
            <Text style={styles.buttonTextBTN1}>ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBTN2}>
            <Text style={styles.buttonTextBTN2}>But with shop pay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerend}>
          <Text style={styles.titleend}>
            Effortlessly chic with So Much Heart To Give!
          </Text>
          <Text style={styles.descriptionend}>
            Gabby's relaxed fit, three quarter sleeves, and mandarin collar make
            it perfect for any occasion. The v-neck adds a touch of elegance,
            while the heart print on luxurious Bulgari fabric shows off your
            playful side. Spread the love!
          </Text>

          <Text style={styles.sectionTitleend}>Material & Care</Text>
          <Text>95% Polyester / 5% Spandex</Text>
          <Text>Wash Cold, Inside Out</Text>
          <Text>Hang Dry</Text>
          <Text>Imported</Text>
          <Text>Lots of Stretch</Text>
          <Text>Color: Black</Text>

          <Text style={styles.sectionTitleend}>Size & Fit</Text>
          <Text>S 2-6, M 8-10, L 12-14, XL 16-18, 2X 20-22, 3X 24-26</Text>
          <Text>True to Size</Text>
          <Text>Model is 5'7 wearing size Small</Text>
          <Text>Model is 5'5 wearing size Medium</Text>
          <Text>Model is 5'6 wearing size 1X</Text>

          <Text style={styles.sectionTitleend}>Measurement</Text>
          <Text>
            Shoulder: S (16"), M (16.5"), L (17"), 1X (17.5"), 2X (18"), 3X
            (18.5")
          </Text>
          <Text>
            Bust: S (20"), M (21"), L (22"), 1X (23"), 2X (24"), 3X (25")
          </Text>
          <Text>
            Length: S (29"), M (29.5"), L (30"), 1X (31"), 2X (31.5"), 3X (32")
          </Text>
          <Text>
            Arm Length: S (12"), M (12.5"), L (12.5"), 1X (12.5"), 2X (13"), 3X
            (13")
          </Text>
        </View>
      </View>
    </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  image: {
       width: width / 2,
    height: (width / 2) / 0.67,
    // width: 100,
    // height: 150,
    marginRight: 10,
  },

  topContainer: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',

  },

  infoContainer: {
    flex: 1,
    marginRight: 10,

  },
  infoContainerwishlist: {
    flex: 1,
    marginRight: 10,
    marginLeft:20,
    paddingTop:10

  }
  
  ,
  textFont: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular',
    paddingLeft:10,
    paddingTop:5


  },

  textsizeFont: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular',
    paddingLeft:10

  },
  textstockFont: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular',
    color: 'rgba(92, 92, 92, 1.0)',
    paddingLeft:10



  },
    subHeader: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily:'NunitoSans-Regular',
    backgroundColor: 'rgba(244, 246, 248, 1.0)',

  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#000',
    borderRadius: 5, 
    padding: 10, 
    width:120,
    fontFamily: 'NunitoSans-Regular',

  },
  quantityButton: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  quantity: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#ccc',
    padding: 20,
    alignItems: 'center',
    fontFamily: 'NunitoSans-Regular',

  },


  subtotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'NunitoSans-Regular',

  },
  taxShipping: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'NunitoSans-Regular',

  },
  addNote: {
    fontSize: 16,
    color: '#007bff', // Link color
    fontFamily: 'NunitoSans-Regular',

  },
  containerbottom: {
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  checkoutButton: {
    backgroundColor: '#B56957',
    paddingVertical: 16,
    paddingHorizontal: 130,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
    
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'NunitoSans-Regular',

  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EB5528',
    borderRadius: 2,
    backgroundColor:'#EB5528',
    height: 44,
    alignSelf: 'flex-start'
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'NunitoSans-Regular',

  },
  wishlistCountContainer: {
    marginLeft: 5,
  },
  wishlistCount: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'NunitoSans-Regular',

  },
   label: {
    fontSize: 16,
    marginBottom: 5,
    color:'red'

  },
  
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
    fontFamily: 'NunitoSans-Regular',

  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: 'NunitoSans-Regular',

  },
    newLabel: {
    position: 'absolute',
    top: 10, 
    right: 10, 
    backgroundColor: 'rgba(181, 105, 87, 1.0)', 
    color: 'white',
    padding: 5,
    borderRadius: 1,
    fontFamily:'NunitoSans-Regular',
      fontSize: 12,
    alignItems: 'flex-end',
  },
  selectedSize: {
    marginTop: 10,
    fontSize: 16,
  },
  containerpicker: {
    marginVertical: 10,
    marginLeft:  20
  },

  containerQUT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    width: 120,

  },
  buttonQUT: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'NunitoSans-Regular',

  },
  buttonTextQUT: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'NunitoSans-Regular',

  },
  quantityQUT: {
    flex: 2,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',

  },
  lableQUT: {
    flex: 1,
    color:'black',
    marginBottom:10,
    fontFamily: 'NunitoSans-Regular',

     },



     containerBTN: {
      justifyContent: 'space-between',
      marginHorizontal: 10,
      fontFamily: 'NunitoSans-Regular',

    
    },
  imageContainer: {
    position: 'relative',
    resizeMode: 'cover'
  },
    buttonBTN1: {
      flex: 1,
      height: 40,
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius: 0,
      borderColor:'black',
      borderWidth:1,
      marginTop:10,
      fontFamily: 'NunitoSans-Regular',
      color:'black'


    },
    buttonBTN2: {
      flex: 1,
      height: 40,
      backgroundColor: '#5433EB',
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius: 0,
      marginTop:10,
      fontFamily: 'NunitoSans-Regular',
      color:'white'

    },
    buttonTextBTN1: {
      color: 'black',
      fontSize: 14,
      marginTop:10,
      fontFamily: 'NunitoSans-Regular',

    },
    buttonTextBTN2: {
      color: 'white',
      fontSize: 14,
      marginTop:10,
      fontFamily: 'NunitoSans-Regular',

    },

    containerend: {
      padding: 20,
    },
    titleend: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'rgba(92, 92, 92, 1.0)',
    },
    descriptionend: {
      marginBottom: 20,
      color: 'rgba(92, 92, 92, 1.0)',
    },
    sectionTitleend: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: 'rgba(92, 92, 92, 1.0)',
    },

  
});


export default ProductDetails;

ProductDetails.navigationOptions = {
  headerLeft: 'Back',
};