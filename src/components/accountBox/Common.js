import styled, { css } from 'styled-components';

export const BoxContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin-top: 10px;
`;

export const FormContainer = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 2.5px rgba(15, 15, 15, 0.2);
`;

const TextLink = css`
   font-size: 12px;
   font-weight: 500;
   text-decoration: none;
`;

export const MutedLink = styled.a`
   ${TextLink}
   color: rgb(200, 200, 200, 0.8);
`;

export const BoldLink = styled.a`
   ${TextLink}
   color: rgb(241, 196, 15);
   margin: 0 4px;
`;

export const Input = styled.input`
   width: 100%;
   height: 42px;
   outline: none;
   border: 1px solid rgba(200, 200, 200, 0.03);
   padding: 0px 10px;
   border-bottom: 1.5px solid transparent;
   transition: all 0.2s ease-in-out;
   font-size: 13px;

   &::placeholder {
      color: rgba(200, 200, 200, 1);
   }

   &:not(:last-of-type) {
      border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
   }

   &:focus {
      outline: none;
      border-bottom: 2px solid rgb(241, 196, 15);
   }
`;

export const SubmitButton = styled.button`
   width: 100%;
   padding: 11px 40%;
   color: #fff;
   font-size: 15px;
   font-weight: 600;
   border: none;
   border-radius: 100px;
   cursor: pointer;
   transition: all 0.25s ease-in-out;
   background: rgb(241, 196, 15);
   background: linear-gradient(
      58deg,
      rgba(241, 196, 15, 1) 20%,
      rgba(243, 172, 18, 1) 100%
   );

   &:hover {
      filter: brightness(1.03);
   }
`;
