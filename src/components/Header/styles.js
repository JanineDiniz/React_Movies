import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 123px;
  gap: 64px;

  border-bottom: 1px solid ${({theme}) => theme.colors.gray_300};
`;

export const Brand = styled.div`
    color: ${({theme}) => theme.colors.pink};
`;
export const Profile = styled(Link)`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 9px;
  color: ${({theme}) => theme.colors.gray_100};

  >div{
    display: flex;
    flex-direction: column;
    align-items: end;

    span{
      font-size: 14px;
      color: ${({theme}) => theme.colors.gray_200};
    }
  }

  >img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;
