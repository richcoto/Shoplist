import React from "react";
import { View, ImageBackground, Pressable, StyleSheet, ViewStyle } from 'react-native';

type IconBtnProps = {
    src: any;
    style?: ViewStyle | ViewStyle[];
};

const IconBtn : React.FC<IconBtnProps> = (props) => {
    return (
        <Pressable style={[styles.imageContainer, props.style]}>  
            <ImageBackground 
                source={props.src} 
                style={styles.image}
                resizeMode="cover">
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: 80, // Set a height for the image container
        width: 80, // Full width of the parent
        padding: 10, // Some spacing from the FlatList
        borderColor: 'black',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default IconBtn;