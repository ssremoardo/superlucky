import styled from "styled-components";

export const Container = styled.div`
 height:100vh;
 width:100vw; 
background-color: #141E30; 
background-image: linear-gradient(to bottom right, #141E30, #243B55);
 display:flex;
 align-items:center;
 flex-direction:column;
 overflow:auto;
 font-family:"inter-medium";
`
export const ContainerBlockInfo = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  width:100%;
  `

export const ContainerInfoEvent = styled.div`
    padding: 2px 2px 2px 2px;
    border-radius: 10px;
    margin-top: 25px;
    min-height: 210px;
    background: linear-gradient(#DCE6F2, #EDF2F8);
    //background:#DCE6F2;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: 0px 0px 10px 5px rgba(170, 170, 170, 0.50);
    display:flex;
    flex-direction:row;  
    width:80%;
    margin:30px;
    overflow:hidden; 
 `

export const LabelInfoEvent = styled.div`
   color:#ODODOD;    
   margin:15px;
   font-size:18px;
 `
export const Button = styled.button`
    background:#009966;
    color:#ffffff;
    border-radius:10px;
    border:0;    
    max-width:200px;
    min-width:200px;
    min-height:80px;
    padding:10px;   
    margin:50px;
    font-size:18px;
    cursor:pointer;
    &:hover{
        zoom:101% !important;        
    }
 `
export const ElementInfoEvent = styled.div`
   width:100%;
   height:100%;
   min-height:120px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   color:#004e92; 
    `
export const ElementInfoProduct = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
margin-left:50px;
position:relative;
margin-top:20px;
color:#004e92;
overflow:auto;
padding-top:15px;
border-radius:10px;
`
export const DescInfoProduct = styled.div`
color:#ODODOD;
font-size:14px;
font-family:"inter-medium";
margin-left:10px;
`
export const DiplayHeader = styled.div`
display:flex;
align-items: center;
justify-content:space-around;
width:100%;
`
export const ContainerDisplayImageWithInfo = styled.div`
display:flex;
margin-bottom: 7px;
align-items: center;
background:#c9d9eb;
border-radius:10px;
padding-top: 6px;

`
export const ImgProduct = styled.img`
 width:50px;
 height:50px;
 border:0;
 border-radius:5px;
 border:1px solid #ODODOD;
 margin-bottom:10px;
 display:flex;
 margin-left:5px;
`
export const ImgLogo = styled.img`
width:200px;
border:0;
border-radius:5px;
margin-bottom:10px;
display:flex;
margin-left:5px;
margin-top:10px;
`

export const LegendStatus = styled.div`
color:#ODODOD;
font-size:14px;
margin-right:15px;
margin-top:15px;
`

export const CountClock = styled.div`
color:#ODODOD;
font-size:14px;
margin-right:15px;
position:relative;
margin-bottom:10px;
`