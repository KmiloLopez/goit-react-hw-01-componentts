import Proptypes from "prop-types";
import {
    ListElement,
    ListContainer,
    ListElementRed,
} from "./FriendList.styled";

function FriendList({ friends }) {
    return (
        <div>
            {friends.map((eachfriend) => {
                return (
                    <ListContainer key={eachfriend.id}>
                        {eachfriend.isOnline ? (
                            
                                <ListElement
                                    className="item"
                                    key={eachfriend.id}>
                                    <span className="status"></span>
                                    <img
                                        className="avatar"
                                        src={eachfriend.avatar}
                                        alt="User avatar"
                                        width="48"
                                    />
                                    <p className="name">{eachfriend.name}</p>
                                </ListElement>
                            
                        ) : (
                            
                                <ListElementRed
                                    className="item"
                                    key={eachfriend.id}>
                                    <span className="status"></span>
                                    <img
                                        className="avatar"
                                        src={eachfriend.avatar}
                                        alt="User avatar"
                                        width="48"
                                    />
                                    <p className="name">{eachfriend.name}</p>
                                </ListElementRed>
                            
                        )}
                    </ListContainer>
                );
            })}
        </div>
    );
}
FriendList.propTypes = {
    friends: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            avatar: Proptypes.string, //imagen
            name: Proptypes.string,
            isOnline: Proptypes.bool,
        })
    ),
};
export default FriendList;
