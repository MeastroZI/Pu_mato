import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import FoodShope from '../Components/FoodShope';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function ShopGallary() {
    const navigation = useNavigation();

    const FoodGalleryData = [
        { Name: "Subway", Logo: require('../Imgs/103849129-Untitled-1.jpg') },
        { Name: "Pizza Hurts", Logo: require('../Imgs/Color-Pizza-Hut-Logo.jpg') },
        { Name: "Subway", Logo: require('../Imgs/pexels-ash-376464.jpg') },
        { Name: "Dominus", Logo: require('../Imgs/dominos-pizza-logo-0.png') },
        { Name: "Subway", Logo: require('../Imgs/pexels-ash-376464.jpg') },
        { Name: "Dominus", Logo: require('../Imgs/dominos-pizza-logo-0.png') },
    ]
    const handleShopePress = (item) => {
        navigation.navigate('ShopePage', { ShopeInfo: item })
    }
    return (
        <View style={styles.FoodGalleryContainer}>
            <SafeAreaView style={styles.SafeAreaCont}>

                <View style={styles.searchContainer}>
                    <AntDesign name="search1" size={20} color="#aaa" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="#aaa"

                    />
                </View>
                <FlatList

                    data={FoodGalleryData}

                    style={{ width: "100%" }}



                    contentContainerStyle={{ width: '100%' }}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.ItemContainer} onPress={() => handleShopePress(item)}>
                            <FoodShope Name={item.Name} Logo={item.Logo} />
                        </TouchableOpacity>
                    )}

                >

                </FlatList>
            </SafeAreaView>
        </View>




    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 5,



    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    FoodGalleryContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#d0c7db",

    },
    ItemContainer: {
        width: '100%',

        alignItems: 'center'
        // margin: 2,
    },

    SafeAreaCont: {
        width: "100%",
        height: "100%",

        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },

})
