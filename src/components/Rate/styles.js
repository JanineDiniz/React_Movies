import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.pink};
    gap: 8px;
    font-size: 16px;
`;