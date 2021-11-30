import styled from "styled-components";

export const Container = styled.div`
 height:100vh;
 width:100vw;
 background:rgb(224, 224, 224);
`

export const ContainerDisplaySelect = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:10px;
`

export const ContainerDisplayTextWithSelect = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin-left:15px;
`

export const LabelSelect = styled.div`
  color:#000000
`

export const Select = styled.select`
    height: 51px;
    padding: 2px 2px 2px 11px;
    border: 1px solid #e8f0f7;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 1px 1px 3px 0px rgba(215, 215, 215, 0.35);
    color: #4e5f6f;
    width: 500px;
    border-radius:5px;
    outline: none !important;
    font-size:18px;
    margin-top:10px;
`