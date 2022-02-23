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

const SignUpForm = () => {
   const { switchToSignIn } = useAccount();

   return (
      <BoxContainer>
         <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
         </FormContainer>
         <Marginer direction="vertical" margin={10} />
         <SubmitButton type="submit">SignUp</SubmitButton>
         <Marginer direction="vertical" margin="1em" />
         <MutedLink href="#">
            Already have an account?{' '}
            <BoldLink onClick={switchToSignIn}>Login</BoldLink>
         </MutedLink>
      </BoxContainer>
   );
};

export default SignUpForm;
