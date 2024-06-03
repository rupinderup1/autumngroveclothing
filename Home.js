import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList, StatusBar,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


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

const Home = ({ item }) => {

            const navigation = useNavigation();

  return (

                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { itemId: item.id })}>

    <View style={styles.item}>

<View style={styles.imageContainer}>

      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
       resizeMode="stretch"
      />

<Text style={styles.label}>New in</Text>


</View>
<View style={{flexDirection: 'column', alignItems: 'left', top: 12}}>
<Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemText}>{'$45'}</Text>
</View>

      </View>
      
                                            </TouchableOpacity>

  );
};

export default () => {


  return (



    

    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.subHeader}>SHIPS FROM PEORIA, AZ</Text>
        


   
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <Home item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <Home item={item} />;
          }}
            

          />
          

      </SafeAreaView>
      </View>
      

  );
};

const SECTIONS = [
  {
    
    title: 'Restocked and New Arrivals',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Pour Your Heart In - Black Romper',
        uri: 'https://www.autumngroveclothing.com/cdn/shop/files/SummertimeFun-PinkOmbreCoverup_2_900x.jpg?v=1714767070',
      },
      {
        key: '2',
        text: 'Hugged With Lace - Sage Tunic',
        uri: 'https://www.autumngroveclothing.com/cdn/shop/files/ElectricPaisley-ShortSleeve_720x.png?v=1715615243',
      },

      {
        key: '3',
        text: 'Katie - Blue Floral Cold Shoulder',
        uri: 'https://www.autumngroveclothing.com/cdn/shop/files/CrazyDreams-Maxi_2.jpg?v=1715369525&width=1285',
      },
      {
        key: '4',
        text: 'Audry - Mauve Laced Dress',
        uri: 'https://www.autumngroveclothing.com/cdn/shop/files/TotalPackage-Leggings_2_720x.jpg?v=1715369698',
      },
      {
        key: '5',
        text: 'Audry - Mauve Laced Dress',
        uri: 'https://www.autumngroveclothing.com/cdn/shop/files/HometownPlaid-Pink_1_720x.png?v=1715369875',
      },
    ],
  },
  {
    title: ' Fourth of July Picks 25% OFF',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/PourYourHeartIn-BlackRomper_1.png?v=1715369988&width=1229',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/FloralInCoral-RuffleSleeve_2_720x.jpg?v=1715369535',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/SummertimeFun-PinkOmbreCoverup_2_900x.jpg?v=1714767070',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/HuggedWithLace-SageTunic_1_720x.png?v=1715369919',
          },
          {
            key: '5',
            text: 'Item text 5',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/BYT-RJ2645-0040_big_a16e7a56-e0a5-45e6-8fb3-a199bbac62ad.jpg?v=1712950250',
          },
    ],
  },
  {
    title: ' Swimwear 25% Off',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/Audry-MauveLacedDress_720x.png?v=1715369898',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/HuggedWithLace-SageTunic.png?v=1715369918&width=1313',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/Katie-BlueFloralColdShoulder_1.jpg?v=1715369896&width=1229',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/Audry-MauveLacedDress_1.png?v=1715369893&width=930',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/FloralCascade-Dress.jpg?v=1715185264&width=1229',
          },


      
    ],
  },

  {
    title: 'Dresses',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/22422-193.jpg?v=1712434297&width=2725',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/AlwaysBeKind-ShortSleeve_720x.png?v=1715615187',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/ThrowOn_Play-BlackDress_Coverup_3.jpg?v=1712427884&width=2374',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/LovingLibertyTank_2_900x.jpg?v=1712426923',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/NothingCanCompare-Tank_3_720x.png?v=1715615326',
          },

      
    ],
  },
  {
    title: 'Free Spirit Collection',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/OldMemories-BlueDress.jpg?v=1715100466&width=1267',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/PaisleyRay-SwingDress_1_720x.png?v=1715615344',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/VintageRoseSwingDress_1.jpg?v=1715104087&width=1229',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/IMG_1446_HEIC_720x.png?v=1715369875',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/ProudToBeMe-Cardigan_1_900x.jpg?v=1715369669',
          },


      
    ],
  },
  {
    title: 'Graphic Tops',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/TotalPackage-Leggings_4_720x.jpg?v=1715369695',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/bs06012022-246_900x.jpg?v=1712433212',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/FaintFloralDress_2.jpg?v=1715101272&width=1229',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/KeepingItCool-JudyBlueTummyControlShorts_1_720x.jpg?v=1715369525',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/PassionForFreedom-Dress_2.jpg?v=1712421291&width=615',
          },



          
          
          
          
          
          
          

    ],
  },
  {
    title: 'Shop All Now!',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/Katie-BlueFloralColdShoulder_720x.jpg?v=1715369898',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/FreedomRings-JudyBlueFlares.jpg?v=1712420885',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/collections/89083413-fb4b-4efa-9f9f-00a0ed9228ec.jpg?v=1715677928&width=800',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/RetroVibes-Swimsuit_1.jpg?v=1712676828',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/ElectricPaisley-ShortSleeve_2_720x.png?v=1715615241',
          },

    ],
  },
  {
    title: 'Shoes',
    horizontal: true,

    data: [
        {
            key: '1',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/FreedomRings-JudyBlueFlares_3.jpg?v=1712420883',
          },
          {
            key: '2',
            text: 'Hugged With Lace - Sage Tunic',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/OhSayCanYouSeeSleevelessTop_1_900x.jpg?v=1712426999',
          },
    
          {
            key: '3',
            text: 'Katie - Blue Floral Cold Shoulder',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/SomethingInTheOrange-Swimsuit_1_900x.jpg?v=1714406554',
          },
          {
            key: '4',
            text: 'Audry - Mauve Laced Dress',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/ProudToBeMe-Cardigan_2_900x.jpg?v=1715369671',
          },
          {
            key: '5',
            text: 'Pour Your Heart In - Black Romper',
            uri: 'https://www.autumngroveclothing.com/cdn/shop/files/SummertimeFun-PinkOmbreCoverup_900x.jpg?v=1714767068',
          },

       
          
          
          
          
       
      
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(249, 242, 231, 1.0)'
  },
  sectionHeader: {
    fontSize: 20,
    color: '',
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular'
  },
  item: {
    margin: 10,
    flex: 1,
  },
  itemPhoto: {
    width: width / 2,
    height: (width / 2) / 0.67,
  },
  itemText: {
    color:'black',
    marginTop: 2,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
maxWidth: width / 2
  },
  imageContainer: {
    position: 'relative',
    resizeMode: 'cover'
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
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily:'NunitoSans-Regular',
    backgroundColor: 'rgba(244, 246, 248, 1.0)',

  }
});