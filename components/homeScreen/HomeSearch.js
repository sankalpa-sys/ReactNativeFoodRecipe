import {View, Text, TextInput} from "react-native";
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeSearch = () => {
    const {container, searchContainer, searchIcon,filterContainer, slidersIcon} = styles;
    return (
        <View style={container}>
           <View style={searchContainer}>
               <Icon style={searchIcon} name="search" />
               <TextInput placeholder='Search recipe'/>
           </View>
            <View style={filterContainer}>
                <Icon style={slidersIcon} name="sliders" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9'
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 10,
        color: '#D9D9D9'
    },
    filterContainer: {
        alignItems: 'flex-end',
        backgroundColor: '#129575',
        padding: 15,
        borderRadius: 10,
    },
    slidersIcon: {
        color: 'white',
        fontSize: 20
    }
})

export default HomeSearch;