import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View
        style={styles.logoContainer}
        style={{
          backgroundColor: "lightgrey",
        }}
      >
        <Image
          style={styles.logo}
          source={{
            uri: "https://varep.net/wp-content/uploads/2020/12/s5_logo-1.png",
          }}
          style={{
            resizeMode: "contain",
            height: 100,
            width: "100%",
            marginVertical: 40,
          }}
        />
      </View>
      {/* it will hold the main view */}
      <View
        style={{
          marginHorizontal: 45,
        }}
      >
        <View
          style={styles.main}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={styles.title}
            style={{
              fontWeight: "bold",
              fontSize: 25,
              width: "78%",
              textAlignVertical: "center",
              textAlign: "center",
              marginVertical: 25,
            }}
          >
            THANK YOU FOR MAKING A DIFFERENCE
          </Text>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              alignSelf: "flex-start",

              fontSize: 18,
              color: "gray",
              marginBottom: 15,
            }}
          >
            Donor Information
          </Text>
        </View>
        <View>
          <TextInput placeholder="useless placeholder" style={styles.input} />
          <TextInput placeholder="useless placeholder" style={styles.input} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <button
            style={{
              backgroundColor: "gray",
              color: "white",
            }}
          >
            CANCEL
          </button>
          <button
            style={{
              backgroundColor: "navy",
              color: "white",
            }}
          >
            CONTINUE
          </button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 35,
    marginVertical: 8,
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 8,
  },
});
