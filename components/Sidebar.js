import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import * as EmailValidator from 'email-validator'
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Sidebar = () => {
    const [user] = useAuthState(auth);
    // give all chats of this user
    const userChatRef = db.collection('chats').where('users', 'array-contains', user.email);
    const [chatsSnapshot] = useCollection(userChatRef);

    const createChat = () => {
        const input = prompt("Please enter user's email address");

        if (!input) return null;

        if (EmailValidator.validate(input) && !chatExists(input) && input !== user.email) {
            // store a reference to the current chat
            db.collection('chats').add({
                users: [user.email, input]
            })
        }
    }

    const chatExists = recipientEmail => {
        // return t/f to check whether there already is a chat with the provided email
        // !! converts truthy values to true and falsey to false
        !!chatsSnapshot?.docs.find(chat => chat.data().users.find(user => user === recipientEmail)?.length > 0)
    }

    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>

            <SidebarButton onClick={createChat}>
                Start a New Chat
            </SidebarButton>
        </Container>
    )
}

export default Sidebar

const Container = styled.div ``;

const SidebarButton = styled(Button) `
    width: 100%;

    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const SearchInput = styled.input `
    outline-width: 0;
    border: none;
    flex: 1;
`;

const Search = styled.div `
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 3px;
`;

const Header = styled.div `
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height:80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar) `
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div `
`;