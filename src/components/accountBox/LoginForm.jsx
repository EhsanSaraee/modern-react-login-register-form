import { useContext } from 'react';
import { Marginer } from '../marginer';
import { useAccount } from './accountContext';
import {
   BoldLink,
   BoxContainer,
   FormContainer,
   Input,
   MutedLink,
   SubmitButton,
} from './Common';

const LoginForm = () => {
   const { switchToSignUp } = useAccount();

   return (
      <BoxContainer>
         <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
         </FormContainer>
         <Marginer direction="vertical" margin={10} />
         <MutedLink href="#">Forget your password?</MutedLink>
         <Marginer direction="vertical" margin="1.5em" />
         <SubmitButton type="submit">Login</SubmitButton>
         <Marginer direction="vertical" margin="1em" />
         <MutedLink href="#">
            Don't have an account?{' '}
            <BoldLink onClick={switchToSignUp}>Sign Up</BoldLink>
         </MutedLink>
      </BoxContainer>
   );
};

export default LoginForm;
