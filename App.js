import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  SafeAreaView,
  Button,
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
      <View
        style={{
          marginHorizontal: 45,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={styles.title}
            style={{
              fontWeight: "bold",
              fontSize: 25,
              width: "88%",
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
          <TextInput placeholder="Full Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Phone" style={styles.input} />
          <TextInput placeholder="Address" style={styles.input} />
          <TextInput placeholder="Address Line 2" style={styles.input} />
          <TextInput placeholder="City" style={styles.input} />
          <TextInput placeholder="State" style={styles.input} />
          <TextInput placeholder="Zip Code" style={styles.input} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View style={[{ width: "30%", margin: 10 }]}>
            <Button
              style={{
                padding: 40,
                marginHorizontal: 40,
                width: 500,
              }}
              title="CANCEL"
              color="#a9a9a9"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={[{ width: "30%", margin: 10 }]}>
            <Button
              title="CONTINUE"
              color="#0d21af"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
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
