import React, { useContext } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BlogContext } from "../Context/BlogContext";

const { width, height } = Dimensions.get("window");

const CustomComponent = () => {
  const { blogs, createBlog } = useContext(BlogContext);

  const handleAddNew = () => {
    createBlog({
      id: Date.now().toString(),
      image: require("../assets/images/1.png"),
      title: "New Blog Title",
      content: "Dynamic content goes here...",
      createdAt: new Date(),
    });
  };

  const data = [
    {
      id: "1",
      image: require("../assets/images/1.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
    {
      id: "2",
      image: require("../assets/images/2nd.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
    {
      id: "3",
      image: require("../assets/images/3.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
    {
      id: "4",
      image: require("../assets/images/4.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
    {
      id: "5",
      image: require("../assets/images/5.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
    {
      id: "6",
      image: require("../assets/images/6.png"),
      title: "Company",
      content: "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum...",
      createdAt: new Date(),
    },
  ];

  return (
    <ScrollView>
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 40 : 20,
          paddingHorizontal: 20,
        }}
      >
        {/* Header with Logo and Icons */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1, alignItems: "center", left: 40 }}>
            <Image
              style={{ width: 75, height: 21 }}
              source={require("../assets/images/test.png")}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <TouchableOpacity style={{ left: 40 }}>
              <AntDesign name="search1" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 42, height: 42, left: 30 }}
                source={require("../assets/images/tranmautritam.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar and Dropdown */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          {/* Dropdown Container */}
          <View
            style={{
              borderWidth: 1,
              height: 36,
              width: width * 0.5, // Make width responsive
              borderColor: "#d1d1d1",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 5 }}>Afterglow</Text>
            <AntDesign name="down" size={12} />
          </View>

          {/* Scenario Text and Icon Container */}
          <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 40 }}>
            <Text style={{ color: "#9D9DAA" }}>Scenario</Text>
            <Text style={{ color: "#676E7E", marginLeft: 15 }}>Default</Text>
            <AntDesign name="down" size={12} style={{ marginLeft: 10 }} />
          </View>
        </View>

        {/* Blog Section Header */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Blog</Text>
          <Text style={{ color: "#6C5DD3", left: 90 }} onPress={handleAddNew}>
            Add New
          </Text>
          <TouchableOpacity
            style={{
              width: 74,
              height: 30,
              backgroundColor: "#6C5DD3",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Preview</Text>
          </TouchableOpacity>
        </View>

        {/* Blog List */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2} // Display items in two columns
          renderItem={({ item }) => (
            <View
              style={{
                width: width * 0.45, // Adjust width based on screen size
                height: 252,
                margin: 4, // Adjust margin for spacing
                borderRadius: 10,
                backgroundColor: "#fff",
                padding: 5,
                elevation: 3, // Shadow effect for Android
                shadowColor: "#000", // Shadow properties for iOS
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 94, height: 69, borderRadius: 8, marginTop: 15 }}
              />
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text style={{ color: "#888", marginTop: 5 }}>
                  {item.content}
                </Text>

                {/* Date with Calendar Icon */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <AntDesign
                    name="calendar"
                    size={14}
                    color="#888"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ color: "#888" }}>
                    {item.createdAt.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
    </ScrollView>
  );
};

export default CustomComponent;
