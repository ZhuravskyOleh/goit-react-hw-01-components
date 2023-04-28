import styled from "styled-components";

export const Line = styled.tr`
    text-align: center;
    color: #696c70;
    border-bottom: 1px solid #dddddd;
    :nth-of-type(even) {
        background-color: #f3f3f3;
        }
    :last-of-type {
        border-bottom: 2px solid #009879;
        }
    td {
        padding: 5px;
    }    
`