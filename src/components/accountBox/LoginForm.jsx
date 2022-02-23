import { Marginer } from '../marginer';
import {
  BoldLink,
   BoxContainer,
   FormContainer,
   Input,
   MutedLink,
   SubmitButton,
} from './Common';

const LoginForm = () => {
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
         <MutedLink href='#'>Don't have an account? <BoldLink>Sign Up</BoldLink></MutedLink>
      </BoxContainer>
   );
};

export default LoginForm;
