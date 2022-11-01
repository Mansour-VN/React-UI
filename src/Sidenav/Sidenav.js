import React, {Component} from 'react';
import styled from 'styled-components';
import Nacho from "./asset/Nacho-Varga.jpg"
const DivSidenav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100vh;
  background: ghostwhite;
  border-radius: 20PX;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 20PX;
  color: dimgray;

`
const Menu = styled.div`
  flex:1;
  padding-top: 30px;
`
const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  :hover {
    display: flex;
    align-items: center;
    justify-content: center;
    background: cornflowerblue;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;;
    border-radius: 5px;;
    width: 30px;
    height: 30px;
    color: blue;
    cursor: pointer;
  }
`
const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`

class Sidenav extends Component {
    src="./asset/Nacho-Varga.jpg"
    render() {
        return (
            <DivSidenav>
                <Icon className="fa-solid fa-arrow-right-arrow-left"></Icon>
                <Menu>
                    <Divider>
                        <Icon className="fa-solid fa-magnifying-glass"></Icon>
                        <Icon className="fa-solid fa-house"></Icon>
                        <Icon className="fa-solid fa-chart-pie"></Icon>
                    </Divider>
                    <div>......</div>
                    <Divider>
                        <Icon className="fa-solid fa-tag"></Icon>
                        <Icon className="fa-solid fa-font-awesome"></Icon>
                        <Icon className="fa-solid fa-circle-user"></Icon>
                    </Divider>
                    <div>......</div>
                    <Divider>
                        <Icon className="fa-solid fa-basket-shopping"></Icon>
                        <Icon className="fa-solid fa-percent"></Icon>
                        <Icon className="fa-solid fa-credit-card"></Icon>
                    </Divider>
                    <div>......</div>
                    <Divider>
                        <Icon className="fa-solid fa-comment-dots"></Icon>
                        <Icon className="fa-solid fa-sliders fa-rotate-90"></Icon>
                    </Divider>
                </Menu>

            {/*<a>*/}
            {/*    <Image src={this.src} alt="varga"/>*/}
                <Image src="Nacho-Varga.jpg" alt="Nacho"/>
            {/*</a>*/}
            </DivSidenav>
        );
    }
}

export default Sidenav;