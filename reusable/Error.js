import {Image, Text, View} from "react-native";

const Error = () => {
    return(
       <View>
           <Image
               style={{width: '100%', height: 300}}
               source={require("../assets/error.jpeg")}/>
           <Text style={{textAlign: "center", marginVertical: 20, fontWeight: "bold", fontSize: 24}}>Something went wrong!!</Text>
       </View>
    )
}

export default Error;