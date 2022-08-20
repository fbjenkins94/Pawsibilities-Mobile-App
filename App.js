import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "./src/screens/Home";
import { SignUp_Adoptions, SignUp_Shelters } from "./src/screens/SignUp";
import { SearchScreen } from "./src/screens/SearchScreen";
import { PetsResults } from "./src/screens/PetsResults";
import { PetProfile } from "./src/screens/PetProfile";
import { SignIn } from "./src/screens/SignIn";
import { UserProfile } from "./src/screens/UserProfile";
import { EditProfile } from "./src/screens/EditProfile";
import { ChangePassword } from "./src/screens/ChangePassword";
import { Success } from "./src/screens/Success";
import { DeleteProfile } from "./src/screens/DeleteProfile"
import { Question } from "./src/screens/Question"


const navigator = createStackNavigator(
    {
        //Loading: Loading,
        UserProfile: UserProfile,
        SignIn: SignIn,
        Home: Home,
        SignUp_Adoptions: SignUp_Adoptions,
        SignUp_Shelters: SignUp_Shelters,
        SearchScreen: SearchScreen,
        PetsResults: PetsResults,
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
