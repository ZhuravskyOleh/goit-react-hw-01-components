import { FriendCard, Status, Name, Avatar } from './FriendListItem.styled';
import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendCard>
            <Status color={isOnline ? "green" : "red"}></Status>
            <Avatar  src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendCard>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}