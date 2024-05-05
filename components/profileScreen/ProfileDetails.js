import { View, Text, StyleSheet, Image } from 'react-native';

const details = [
    {
        title: "Recipe",
        count: 40
    },
    {
        title: "Followers",
        count: 120
    },
    {
        title: "Following",
        count: 12
    }

]
const DefaultComponent = () => {
    const {container, image, detailsContainer, title, value, name, desc, subDescContainer,subDesc, more} = styles;
    return (
        <View>
            <View style={container}>
                <Image style={image} source={{uri: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
                <View style={detailsContainer}>
                    {details.map((item, index)=>(
                        <View key={index}>
                            <Text style={title}>{item.title}</Text>
                            <Text style={value}>{item.count}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Text style={name}>Sankalpa Neupane</Text>
            <Text style={desc}>Chef</Text>

            <View style={subDescContainer}>
                <Text style={subDesc}>Private Chef</Text>
                <Text style={subDesc}>Passionate about food and life 🥘🍲🍝🍱</Text>
                <Text style={more}>More...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    image: {
        width: 99,
        height: 99,
        borderRadius: 50
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        flex: 1
    },
    title: {
        fontSize: 11,
        fontWeight: 400,
        color: "#A9A9A9"
    },
    value: {
        fontSize: 20,
        color: "#121212",
        fontWeight: "bold",
        textAlign: 'center',
        paddingVertical: 5
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#121212",
        paddingVertical: 5
    },
    desc: {
        fontSize: 11,
        color: "#A9A9A9"
    },
    subDescContainer: {
        paddingVertical: 10,
        gap: 3
    },
    subDesc: {
        fontSize: 11,
        color: "#797979"
    },
    more: {
        fontSize: 11,
        color: "#129575",
        fontWeight: "bold"
    }
});



export default DefaultComponent;