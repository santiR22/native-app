import { StyleSheet, Text, View } from "react-native";
// import { usePosts } from "../context/PostContext";

export const Home = () => {
  // const { post } = usePosts();

  // const renderMain = () => {
  //   console.log("text")
  //   if (post.length === 0) {
  //     return (
  //       <View style={styles.container}>
  //         <Text>No se ha encontrado ninguna publicacion &#x1F610;</Text>
  //       </View>
  //     );
  //   }

  //   return <PostCard posts={post} />;
  // };

  return (
    <View style={styles.container}>
      <Text>No se ha encontrado ninguna publicacion &#x1F610;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
