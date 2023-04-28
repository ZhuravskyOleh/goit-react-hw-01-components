import styled from 'styled-components';


export const StatisticsWrap = styled.section`
    width: 450px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
    border: 1px solid #ced3db;
    border-radius: 10px;
`

export const Title = styled.h2`
    margin-bottom: 20px ;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #232323;
`

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
`



export const StatItem = styled.li`
    padding: 5px 20px;
    border: 1px solid #ced3db;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
    background-color: ${props => props.backgroundColor};;
`

export const Label = styled.span`
    margin-bottom: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
`

export const Percentage = styled.span`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
`