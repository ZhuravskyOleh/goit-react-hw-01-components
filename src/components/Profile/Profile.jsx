// import css from './Profile.module.css';
import { ProfileWrap, Avatar, UserName, Tag, Location, Stats, Label, Quantity } from './Profile.styled.jsx';
import PropTypes from 'prop-types';

export const Profile = ({
    username,
    location,
    tag,
    avatar,
    followers,
    views,
    likes }) => {
    return (
        <ProfileWrap>
        <div>
            <Avatar
            src={avatar}
            alt="User avatar"
            
            />
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </div>
        <Stats>
            <li>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
            </li>
            <li>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
            </li>
            <li>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
            </li>
        </Stats>
        </ProfileWrap>
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};