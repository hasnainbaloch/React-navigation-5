import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default CategoriesTabs = () => {
  const [activeTabId, setActiveTabId] = useState(1);

  const activeTab = id => {
    setActiveTabId(id);
  };
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          {id: 1, name: 'All'},
          {id: 2, name: 'Grocery'},
          {id: 3, name: 'Fruits'},
          {id: 4, name: 'Fast Food'},
          {id: 5, name: 'Vegitables'},
        ]}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => activeTab(item.id)}>
              <Text
                style={item.id === activeTabId ? styles.activeTab : styles.tab}>
                {item.name}
              </Text>
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
    marginBottom: 25,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#B5B5B5',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.3,
    overflow: 'hidden',
    
  },
  activeTab: {
    overflow: 'hidden',
    backgroundColor: '#515C6F',
    marginBottom: 25,
    marginRight: 10,
    borderRadius: 20,
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.3,
    
  },
});
