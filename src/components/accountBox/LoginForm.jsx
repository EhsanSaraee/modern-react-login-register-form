import { Marginer } from '../marginer';
import {
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
            <Marginer direction="vertical" margin={5} />
            <MutedLink href="#">Forget your password</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit">Sign In</SubmitButton>
         </FormContainer>
      </BoxContainer>
   );
};

export default LoginForm;
