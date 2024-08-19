import { SafeAreaView, Text } from "react-native";
import style from "./style";

const Title = prop => {
    return (
        <SafeAreaView>
            <Text style={style.title}>{prop.title}</Text>
        </SafeAreaView>
    );
}

export default Title;