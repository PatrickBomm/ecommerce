import styled from 'styled-components';

export const NavbarConteiner = styled.div`width: 100%;
height: 80px;
background-color: rgb(19, 19, 19);
display: flex;
justify-content: space-between;
align-items: center;
`;

export const NavbarLinks = styled.div` display: flex;
align-items: center;
padding-right: 50px;
position: relative;
a{
    text-decoration: none;
    color: white;
    margin-left: 20px;
}`;
    
export const NavbarTitle = styled.div`color: white;
    text-align: left;
    padding-left: 50px;`;

export const HomeButton = styled.div`color: white;
    text-align: left;
    padding-left: 50px;
    position: relative;
    cursor: pointer;
    &:hover{
        color: #48BB78;
        }`;

