import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import { SignUp_Adoptions } from "./src/screens/SignUp";
import { SignUp_Shelters } from "./src/screens/SignUp";
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
        Home: Home,
        SignUp_Adoptions: SignUp_Adoptions,
        SignUp_Shelters: SignUp_Shelters,
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
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Home Screen",
        },
    }
);

export default createAppContainer(navigator);
