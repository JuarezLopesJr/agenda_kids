import React, { Component, Fragment } from "react";
import { KeyboardAvoidingView, AsyncStorage } from "react-native";
import axios from "axios";
import { Icon } from "react-native-elements";
import { Formik } from "formik";
import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";
import * as Yup from "yup";
import {
  EyeIcon,
  EmailIcon,
  FormContainer,
  Submit,
  SubmitContainer
} from "../utils/styles";

class LoginScreen extends Component {
  state = {
    showPassword: true,
    toggle: false
  };

  togglePassword = () => {
    if (this.state.toggle === false) {
      this.setState(() => {
        return { showPassword: false, toggle: true };
      });
    } else {
      this.setState(() => {
        return { showPassword: true, toggle: false };
      });
    }
  };

  handleSubmit = async (values, bag) => {
    const api = axios.create({
      baseURL: "https://frontend-test.agendaedu.com/api"
    });

    try {
      const {
        data: { token }
      } = await api.post("/login", {
        email: values.email,
        password: values.password
      });
      this.props.navigation.navigate("Events");
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  render() {
    const { showPassword, toggle, isLoading } = this.state;
    return (
      <FormContainer>
        <Fragment>
          <LoginHeader />
        </Fragment>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this.handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Digite um email valido")
              .required("Email ou usuario obrigatorio"),
            password: Yup.string()
              .min(6)
              .required("Senha deve ter minimo de 6 caracteres")
          })}
          render={({
            values: { email, password },
            handleSubmit,
            setFieldValue,
            touched,
            setFieldTouched,
            isValid,
            errors,
            isSubmitting
          }) => (
            <Fragment>
              <KeyboardAvoidingView>
                <LoginForm
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="email"
                  label="Email ou Usuario "
                  autoCapitalize="none"
                  value={email}
                  error={touched.email && errors.email}
                />
                <EmailIcon>
                  <Icon
                    type="font-awesome"
                    name={"envelope-o"}
                    size={16}
                    color={"#AAAAAA"}
                  />
                </EmailIcon>
                <LoginForm
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="password"
                  label="Senha"
                  autoCapitalize="none"
                  secureTextEntry={showPassword}
                  value={password}
                  error={touched.password && errors.password}
                />
                <EyeIcon onPress={this.togglePassword}>
                  <Icon
                    type="entypo"
                    name={toggle === false ? "eye" : "eye-with-line"}
                    size={19}
                    color={"#AAAAAA"}
                  />
                </EyeIcon>
                <SubmitContainer>
                  <Submit
                    title="Entrar"
                    onPress={handleSubmit}
                    color="#733DBE"
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                  />
                </SubmitContainer>
              </KeyboardAvoidingView>
            </Fragment>
          )}
        />
      </FormContainer>
    );
  }
}

export default LoginScreen;
