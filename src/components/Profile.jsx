import Proptypes from "prop-types";
import { Stats, LiItem ,Description,Imagbox,Named, MyPara} from "./Profile.styled";

function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
        <div className="profile">
            <Description>
                

                <Imagbox src={avatar} alt="User avatar" className="avatar" />
                
                <Named className="name">{username}</Named>
                <MyPara className="tag">{tag}</MyPara>
                <MyPara className="location">{location}</MyPara>
            </Description>

            <ul className="stats">
                <Stats>
                    <LiItem>
                        <MyPara className="label">Followers</MyPara>
                        <span className="quantity">{followers}</span>
                    </LiItem>
                    <LiItem>
                        <MyPara className="label">Views</MyPara>
                        <span className="quantity">{views}</span>
                    </LiItem>
                    <LiItem>
                        <MyPara className="label">Likes</MyPara>
                        <span className="quantity">{likes}</span>
                    </LiItem>
                </Stats>
            </ul>
        </div>
    );
}
Profile.propTypes = {
    username: Proptypes.string,
    tag: Proptypes.string,
    location: Proptypes.string,
    avatar: Proptypes.string,
    followers: Proptypes.number,
    views: Proptypes.number,
    likes: Proptypes.number,
};
export default Profile;
