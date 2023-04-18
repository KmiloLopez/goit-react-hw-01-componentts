import { Container } from "./App.styled";

import user from "../json/user.json";
import Profile from "./Profile";

import Statistics from "./Statistics";
import data from "../json/data.json"

import FriendList from "./FriendList"
import friends from "../json/friends.json"

import TransactionHistory from "./TransactionHistory"
import transactions from "../json/transactions.json"

function App() {
    return (
        <Container>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
                
            />
            
          
            <Statistics
                title="Upload Stats"
                stats={data}
            />
            <FriendList friends={friends}
            />
            <TransactionHistory items={transactions}/>
        </Container>
    );
}

export default App;
