import React, { useState } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";
import colors from "../../../config/colors";
import ErrorMessage from "../ErrorMessage/ErrorMEssage";
import AuthTextInput, { IAuthTextInput } from "../AuthTextInput/AuthTextInput";

interface props {
  fieldName: string;
  showErrorMessage?: boolean;
}

function Index({
  fieldName,
  showErrorMessage,
  ...otherProps
}: props & IAuthTextInput) {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext<Record<string, string>>();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <AuthTextInput
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        returnKeyType="done"
        value={values[fieldName]}
        viewStyle={{
          borderColor: isFocused ? colors.primary : colors.lightgray,
        }}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => {
          setIsFocused(false);
        }}
        {...otherProps}
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
      )}
    </View>
  );
}

export default Index;
