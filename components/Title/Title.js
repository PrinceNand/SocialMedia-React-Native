import { SafeAreaView, Text } from "react-native";
import style from "./style";
import PropTypes from 'prop-types';

const Title = prop => {
    return (
        <SafeAreaView>
            <Text style={style.title}>{prop.title}</Text>
        </SafeAreaView>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;