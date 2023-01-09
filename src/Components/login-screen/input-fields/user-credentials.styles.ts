import styled from 'styled-components/native';

interface LabelProps {
   content: string;
}

interface InputProps {
   textInputSize?: number;
}

export const InputFormContainer = styled.View`
   width: 80%;
   border-width: 2px;
   border-style: dashed;
   border-color: purple;
   
`;
export const UserCredentialContainer = styled.View`
   display: flex;
   flex-direction: row;
   border-width: 2px;
   border-style: dashed;
   border-color: orange; 
   height: auto;
`;

export const UserCredentialLabel = styled.Text<LabelProps>`
   font-family: monospace;
   line-height: 25px;
   width: 150px;
   border-width: 3px;
   vertical-align: middle;
   border-color: blue;
   font-size: 20px;


`;

export const UserCredentialInput = styled.TextInput<InputProps>`
   border-width: 3px;
   height: ${(props: InputProps) => 
      props.textInputSize ? `${Math.round(props.textInputSize * 25.6)}px` : '25px'}; 

`;
