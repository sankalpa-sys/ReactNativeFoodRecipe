import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import ProfileHeader from "../components/profileScreen/ProfileHeader";
import ProfileDetailsTop from "../components/profileScreen/ProfileDetails";
import ButtonRow from "../components/profileScreen/ButtonRow";
import ChefRecipes from "../components/profileScreen/ChefRecipes";
import {useState} from "react";
import SavedRecipes from "../components/profileScreen/SavedRecipes";
const ProfileScreen = () => {
    const {container} = styles;
    const [recipeType, setRecipeType] = useState('Owned');
    const handleRecipeType = (type) => {
        setRecipeType(type);
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={container}>
            <SafeAreaView>
               <ProfileHeader/>
                <ProfileDetailsTop/>
                <ButtonRow recipeType={recipeType} handleRecipeType={handleRecipeType}/>
                {recipeType === "Owned" ? <ChefRecipes/>: <SavedRecipes/>}
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