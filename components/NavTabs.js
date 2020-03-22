import React, {useState} from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
//   alert
} from "react-native";
import { SimpleText } from "./StyledText";


export const NavTabs = () => {

  const [activeTabId, setActiveTabId] = useState(1);

  const activeTab =  (id) => {
      setActiveTabId(id);
  } 
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          { id: 1, name: "All" },
          { id: 2, name: "Grocery" },
          { id: 3, name: "Fruits" },
          { id: 4, name: "Fast Food" },
          { id: 5, name: "Vegitabbles" }
        ]}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => activeTab(item.id)}>
              <SimpleText style={(item.id === activeTabId ? styles.activeTab : styles.tab)}>{item.name}</SimpleText>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#B5B5B5",
    color: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    minWidth: 50,
    textAlign: "center",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  activeTab: {
    backgroundColor: "#515C6F",
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 20,
    color: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    minWidth: 50,
    textAlign: "center",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.3,
  }
});
