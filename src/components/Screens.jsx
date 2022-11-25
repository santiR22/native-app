import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Buttons } from "./Buttons";
import { VentanaModal } from "./VentanaModal";
import { ListaDeTareas } from "../screens/ListaDeTareas";

export const Screens = () => {
  const Menu = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Iniciar sesión" component={Login} />
        <Menu.Screen name="Lista de tareas" component={ListaDeTareas} />
        <Menu.Screen name="Home" component={Home} />
        <Menu.Screen name="Buttons" component={Buttons} />
        <Menu.Screen name="Modal" component={VentanaModal} />
        <Menu.Screen name="Registrarse" component={Register} />
      </Menu.Navigator>
    </NavigationContainer>
  );
};
