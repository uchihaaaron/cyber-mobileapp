import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const recommendedSearches = [
    "Exams",
    "Result",
    "Class",
    "Achievements",
    "Notices",
  ];

  const handleSearch = () => {
    if (searchText && !recentSearches.includes(searchText)) {
      setRecentSearches((prevSearches) => [searchText, ...prevSearches]);
    }
    setSearchText("");
  };

  const removeRecentSearch = (itemToRemove: string) => {
    setRecentSearches((prevSearches) =>
      prevSearches.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search anything"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <Ionicons name="search-outline" size={25} color="#ccc" />
      </View>

      {recentSearches.length > 0 ? (
        <>
          <Text style={styles.sectionTitleR}>Recent Searches</Text>
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => (
              <View style={styles.recentItem}>
                <TouchableOpacity
                  style={styles.itemTextContainer}
                  onPress={() => setSearchText(item.item)}
                >
                  <Text style={styles.itemText}>{item.item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeRecentSearch(item.item)}>
                  <Ionicons name="close-outline" size={24} color="none" />
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.emptyMessage}>No recent searches</Text>
      )}

      <Text style={styles.sectionTitle}>Recommended Searches</Text>
      <FlatList
        data={recommendedSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recentItem}
            onPress={() => setSearchText(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No recommendations available</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: "100%",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  sectionTitleR: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#5E5C5C",
  },
});
