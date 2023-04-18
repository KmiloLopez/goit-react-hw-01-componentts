import styled from "styled-components";
/* const randomColor =Math.floor(Math.random()*16777215).toString(16); */


export const NewSection = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



`;
export const Statts = styled.section`

display: flex;
justify-content: center;
align-items: center;
list-style: none;

/* width: 170px;
height: 100px; */


`;


export const Boxi = styled.li`

display: flex;
flex-direction: column;
background-color: #${Math.floor(Math.random()*16777215).toString(16)};
justify-content: space-between;
width: 100px;
border-radius: 10px;
align-items: center;
&:hover{
    background-color: lightgreen;
}

`;
