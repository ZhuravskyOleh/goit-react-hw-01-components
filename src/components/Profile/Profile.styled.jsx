import styled from 'styled-components';

export const ProfileWrap = styled.div`
    width: 210px;
    margin: 20px auto;
    padding: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
    border:1px solid #ced3db;
    border-radius: 10px;
`

export const Avatar = styled.img`
    width: 100%;
    display: block;
    margin: 20px auto;
`

export const UserName = styled.p`
    margin-bottom: 12px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: #232323;
`

export const Tag = styled.p`
    margin-bottom: 12px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #696c70;
`

export const Location = styled.p`
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #696c70;
`

export const Stats = styled.ul`
    display: flex;
    gap: 15px;
    justify-content: center;
    background-color: #d3d6db;
    padding: 12px;
    border-radius: 5px;
`

export const Label = styled.span`
    margin-bottom: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #696c70;
`

export const Quantity = styled.span`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #232323;
`