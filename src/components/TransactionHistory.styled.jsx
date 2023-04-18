import styled from "styled-components";

export const TableElements= styled.table`


background-color: lightgreen;

text-align: center;
border-collapse: collapse;
`
export const TdElement= styled.td`
    border: solid 1px black;
    padding: 8px;
`
export const TrElement= styled.tr`
    border: solid 1px black;
    
    &:nth-child(even){
        background-color: burlywood;
    }
    &:hover{
        background-color: beige;
    }
    
`

export const ThElement= styled.th`
    border: solid 1px black;
    background-color: #5f5ffd;
    padding: 8px;
    color: white;
`