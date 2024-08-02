import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type TitleComponentProps = {
    children: ReactNode
};

const TitleComponent: React.FC<TitleComponentProps> = (props) => {
    return (
        <View>
            <Text style = {styles.title}>{props.children}</Text>
        </View>
    );
};

export default TitleComponent;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,   
        margin: 20,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#000000",
    },
});