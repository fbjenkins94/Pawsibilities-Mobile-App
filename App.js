import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import SearchScreen from "./src/screens/SearchScreen";
import PetsScreen from "./src/screens/PetsScreen";
import PetProfile from "./src/screens/PetProfile";
import SignIn from "./src/screens/SignIn"; 
import UserProfile from "./src/screens/UserProfile";
import EditProfile from "./src/screens/EditProfile";
import ChangePassword from "./src/screens/ChangePassword";
import Success from "./src/screens/Success";
import DeleteProfile from "./src/screens/DeleteProfile"
import Question from "./src/screens/Question"

const navigator = createStackNavigator(
    {
        //Loading: Loading,
        UserProfile: UserProfile,
        SignIn: SignIn,
        HomeScreen: HomeScreen,
        SignUpScreen: SignUpScreen,
        PasswordScreen: PasswordScreen,
        SearchScreen: SearchScreen,
        PetsScreen: PetsScreen,
        PetProfile: PetProfile,
        EditProfile: EditProfile,
        ChangePassword: ChangePassword,
        Success: Success,
        DeleteProfile: DeleteProfile,
        Question: Question,
    },
    {
        initialRouteName: "PetsScreen",
        defaultNavigationOptions: {
            title: "PetsScreen",
        },
    }
);

export default createAppContainer(navigator);
