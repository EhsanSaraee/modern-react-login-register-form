import styled from 'styled-components';

const AccountBox = () => {
   return (
      <BoxContainer>
         <TopContainer>
            <BackDrop />
            <HeaderContainer>
               <HeaderText>Welcome</HeaderText>
               <HeaderText>Back</HeaderText>
               <SmallText>Please sign in to Continue</SmallText>
            </HeaderContainer>
         </TopContainer>
      </BoxContainer>
   );
};

const BoxContainer = styled.section`
   width: 280px;
   min-height: 550px;
   display: flex;
   flex-direction: column;
   border-radius: 19px;
   background: #fff;
   box-shadow: 0 0 2px rgba(15, 15, 15, 0.3);
   position: relative;
   overflow: hidden;
`;

const TopContainer = styled.div`
   width: 100%;
   height: 250px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding: 0 1.8em;
   padding-bottom: 5em;
`;

const BackDrop = styled.div`
   width: 160%;
   height: 550px;
   position: absolute;
   top: -290px;
   left: -70px;
   transform: rotate(60deg);
   display: flex;
   flex-direction: column;
   border-radius: 50%;
   background: rgb(241, 196, 15);
   background: linear-gradient(
      58deg,
      rgba(241, 196, 15, 1) 20%,
      rgba(243, 172, 18, 1) 100%
   );
`;

const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const HeaderText = styled.h2`
   font-size: 30px;
   font-weight: 600;
   line-height: 1.24;
   color: #fff;
   z-index: 10;
   margin: 0;
`;

const SmallText = styled.h5`
   font-size: 11px;
   font-weight: 500;
   color: #fff;
   z-index: 10;
   margin: 0;
   margin-top: 10px;
`;

export default AccountBox;
