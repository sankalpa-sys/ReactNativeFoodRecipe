import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import ProfileHeader from "../components/profileScreen/ProfileHeader";
import ProfileDetailsTop from "../components/profileScreen/ProfileDetails";
import ButtonRow from "../components/profileScreen/ButtonRow";
import ChefRecipes from "../components/profileScreen/ChefRecipes";
const ProfileScreen = () => {
    const {container} = styles;
    return (
        <ScrollView style={container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={container}>
            <SafeAreaView>
               <ProfileHeader/>
                <ProfileDetailsTop/>
                <ButtonRow/>
                <ChefRecipes/>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
});



export default ProfileScreen;