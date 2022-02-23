import { Marginer } from '../marginer';
import {
   BoldLink,
   BoxContainer,
   FormContainer,
   Input,
   MutedLink,
   SubmitButton,
} from './Common';

const SignUpForm = () => {
   return (
      <BoxContainer>
         <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
         </FormContainer>
         <Marginer direction="vertical" margin={10} />
         <MutedLink href="#">Forget your password?</MutedLink>
         <Marginer direction="vertical" margin="1.5em" />
         <SubmitButton type="submit">SignUp</SubmitButton>
         <Marginer direction="vertical" margin="1em" />
         <MutedLink href="#">
            Already have an account? <BoldLink>Login</BoldLink>
         </MutedLink>
      </BoxContainer>
   );
};

export default SignUpForm;
