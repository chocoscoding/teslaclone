import React, {useState} from "react";
import styled from "styled-components";
import {Menu, Close} from '@material-ui/icons';
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";

const Header = () => {
 const [burgerStatus, setBurgerStatus] = useState(false);
 const cars = useSelector(selectCars);

 function changeburger(){
   setBurgerStatus(!burgerStatus)
 }
  
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <MenuB>
          {cars && cars.map((car,index)=>(
          <a href="/" key={index}>{car}</a>
          ))}
      </MenuB>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={changeburger}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>

        <CustomClose onClick={changeburger}/>
        </CloseWrapper>
        {cars && cars.map((car,index)=>(
          <li key={index}><a href="/">{car}</a></li>
          ))}
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-In </a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadster</a></li>
        <li><a href="/">Semi</a></li>
        <li><a href="/">Charging</a></li>
        <li><a href="/">Power</a></li>
      </BurgerNav>
    </Container> 
  ); 
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index:1;
`;
const MenuB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width:768px){
    display:none;
  }
`;

const RightMenu = styled.div`
display:flex;
align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const CustomMenu = styled(Menu)`
  cursor:pointer;
`
const BurgerNav = styled.div`
  position:fixed;
  z-index:5;
  top:0;
  bottom:0;
  right:0;
  width:300px;
  background-color:white;
  list-style-type:none;
  padding:20px;
  display:flex;
  text-align:start;
  flex-direction:column;
  transition: 0.3s all ease;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
      font-weight:600
    }
  }
`
const CloseWrapper = styled.div`
  width:100%;

`
const CustomClose = styled(Close)`
  float:right;
  cursor:pointer;
`