import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");
const inputWidth = width - 55;

export const RootContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(RootContainer)`
  background-color: #fff;
`;

export const Input = styled.TextInput`
  width: ${inputWidth};
  height: 36px;
  padding: 5px;
  margin-right: 30px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #733dbe;
`;

export const InputContainer = styled.View`
  width: ${inputWidth};
  align-self: center;
`;

export const SubmitContainer = styled.View`
  margin-top: 200px;
`;

export const Submit = styled.Button`
  color: #fff;
  border: none;
  font-size: 18px;
`;

export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  top: 93px;
  right: 10px;
`;

export const EmailIcon = styled.View`
  position: absolute;
  top: 27px;
  right: 10px;
`;

export const KeyIcon = styled.ImageBackground`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 115px;
  right: 45px;
`;

export const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 25px;
  left: -70px;
  margin-top: 110px;
  margin-bottom: 30px;
`;

export const EventItems = styled.View`
  border-bottom-width: 1px;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  border-color: #ddd;
  position: relative;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ClockIcon = styled.View`
  position: absolute;
  bottom: 128px;
  left: -2px;
`;

export const Spinner = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.View`
  position: absolute;
  top: 42px;
  left: 26px;
`;

export const ModalContainer = styled(RootContainer);
