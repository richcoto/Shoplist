import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, ImageBackground } from "react-native";
import TitleComponent from "@/components/ui/TitleComponent";
import IconBtn from "@/components/IconBtn";


type MainPageOps = {};

const MainPage: React.FC<MainPageOps> = () => {

    type ShoppingItem = {
        id: string;
        text: string;
    };
    
    const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

    function addShoppingItemHandler(enteredShoppingItem: string) {
        setShoppingItems((currentShoppingItems: ShoppingItem[]) => [
          ...currentShoppingItems,
          { id: Math.random().toString(), text: enteredShoppingItem }
        ]);
      };
    
      function deleteShoppingItemHandler(shoppingItemId: string){
        setShoppingItems(currentShoppingItems => {
          return currentShoppingItems.filter(shoppingItem => shoppingItem.id !== shoppingItemId);
        }); 
      };    

      useEffect(() => {
        addShoppingItemHandler("Leche");
        addShoppingItemHandler("Jamon");
        addShoppingItemHandler("Cereal");
        addShoppingItemHandler("Tortas de Salmon");
        addShoppingItemHandler("Papas a la francesa");
        addShoppingItemHandler("Crema liquida");
  
    }, []);


    return (
        <View>
            <TitleComponent>Shopping List</TitleComponent>
            <FlatList
                style={styles.flatContainer}
                data={shoppingItems}
                renderItem={(itemData) => (
                    <Text style={styles.text}>{itemData.item.text}</Text> 
                )}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.btnHolder}>
                <IconBtn src={require('../assets/images/gridicon.png')}></IconBtn>
                <IconBtn style={styles.addIcon} src={require('../assets/images/addicon.png')}></IconBtn>
                <IconBtn src={require('../assets/images/clearicon.png')}></IconBtn>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    flatContainer: {
        padding: 10,
        height: 500,
    },
    text: {
        fontSize: 16,
    },
    btnHolder:{
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10
    },
    addIcon: {
        height: 120,
        width: 120, 
    },
    clearIcon: {
    }
});
export default MainPage;