import {View, Image, Text} from 'react-native';
import style from "../UserStory/style";

const UserStory = props => {
    return (
      <View style={style.storyContainer}>
        <View style={style.userImageContainer}>
          <Image source={props.profileImage} style={style.image} />
        </View>
        <Text style={style.firstName}>{props.firstName}</Text>
      </View>
    );
};

export default UserStory

