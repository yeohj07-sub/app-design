import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={{ ..."light" }} />
      <View style={styles.top}>
        <Image
          source={require("./assets/images/toplogo.png")}
          style={{ width: 100, height: 50 }}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <FontAwesome
              name="search"
              size={24}
              color="black"
              style={{ paddingRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="ios-person-sharp"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="login" size={24} color="#645CBB" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width: SCREEN_WIDTH }}>
          <View style={{ flex: 0.1, backgroundColor: "white" }}></View>
          <View style={styles.main_text}>
            <Text style={{ fontSize: 20, color: "#645CBB" }}>
              컨설팅 분야를 선택해주세요
            </Text>
          </View>
          <View style={styles.main_img}>
            <View style={styles.main_img_in}>
              <TouchableOpacity
                style={{
                  ...styles.main_col,
                  paddingRight: -40,
                }}
              >
                <Image
                  source={require("./assets/images/m1.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>특목고 입시</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main_col}>
                <Image
                  source={require("./assets/images/m2.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>대입</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main_img_in}>
              <TouchableOpacity
                style={{
                  ...styles.main_col,
                  paddingRight: -40,
                }}
              >
                <Image
                  source={require("./assets/images/m3.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>편입</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main_col}>
                <Image
                  source={require("./assets/images/m4.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>실기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white" }}></View>
        </View>
        <View style={{ width: SCREEN_WIDTH }}>
          <View style={{ flex: 0.1, backgroundColor: "white" }}></View>
          <View style={styles.main_text}>
            <Text style={{ fontSize: 20, color: "#645CBB" }}>내용</Text>
          </View>
          <View style={styles.main_img}>
            <View style={styles.main_img_in}>
              <TouchableOpacity
                style={{
                  ...styles.main_col,
                  paddingRight: -40,
                }}
              >
                <Image
                  // source={require("./assets/images/m1.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>항목</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main_col}>
                <Image
                  // source={require("./assets/images/m2.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>항목</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main_img_in}>
              <TouchableOpacity
                style={{
                  ...styles.main_col,
                  paddingRight: -40,
                }}
              >
                <Image
                  // source={require("./assets/images/m3.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>항목</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main_col}>
                <Image
                  // source={require("./assets/images/m4.png")}
                  style={styles.main_img_each}
                />
                <Text style={styles.main_img_text}>항목</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white" }}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flex: 0.1,
    paddingTop: 27,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  main_text: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  main_img: {
    flex: 0.7,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  main_col: {
    width: SCREEN_WIDTH,
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 33,
    backgroundColor: "white",
  },
  main_img_in: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  main_img_each: {
    width: "100%",
    height: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "white",
  },
  main_img_text: {
    marginTop: 10,
    color: "#5D3891",
    fontSize: 18,
    backgroundColor: "white",
  },
});
