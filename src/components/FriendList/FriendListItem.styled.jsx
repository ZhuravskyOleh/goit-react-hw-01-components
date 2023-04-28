import styled from 'styled-components';


export const FriendCard = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 5px 15px;
    border: 1px solid #ced3db;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
`

export const Status = styled.span`
    width: 10px;
    height: 10px;
    background-color:  ${props => props.color};
    border-radius: 50%;
`

export const Avatar = styled.img`
    border-radius: 50%;
    border: 1px solid #ced3db;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
`

export const Name = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: #232323;
`

// {isOnline ? 'green' : 'red'}