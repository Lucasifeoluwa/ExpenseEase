import React, { useState } from "react";
import { View, TextInput } from "react-native";
import AppScreen from "../../../components/AppScreen";
import styles from "./styles";
import AppText from "../../../components/AppText";
import AppTextInput from "../../../components/AppTextInput/TextInput";
import { fontPixel, normalise } from "../../../config/normalize";
import colors from "../../../config/colors";
import AppPicker from "../../../components/AppPicker/AppPicker";
import AppForm from "../../../components/AppForm/AppForm";
import * as Yup from "yup";

const NewGoals = ({ navigation }: any) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: any) => {
    console.log("done", event);
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required("Please enter Amount"),
    description: Yup.string().required("Please enter description"),
  });

  return (
    <AppScreen scrollable={false}>
      <View style={styles.container}>
        <View>
          <AppText style={styles.headerTxt}>Add Transaction</AppText>
        </View>
        <View style={styles.amountCtn}>
          <AppForm
            initialValues={{
              amount: "",
              description: "",
              category: "",
              date: "",
              time: "",
            }}
            onSubmit={(value) => handleSubmit(value)}
            validationSchema={validationSchema}
          >
            <AppText style={{ fontSize: fontPixel(20), fontWeight: "bold" }}>
              Amount
            </AppText>
            <View style={styles.valueCtn}>
              <AppText
                style={{
                  fontSize: normalise(25),
                  marginRight: normalise(3),
                  color: colors.primary,
                  fontWeight: "bold",
                }}
              >
                $
              </AppText>
              <TextInput
                style={styles.txtInput}
                value={value}
                onChangeText={(text) => setValue(text)}
              />
            </View>
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default NewGoals;
