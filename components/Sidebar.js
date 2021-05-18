import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import * as EmailValidator from 'email-validator'
import { auth } from "../firebase";

const Sidebar = () => {
    const createChat = () => {
        const input = prompt("Please enter user's email address");

        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // add chat to db
        }
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

            <SidebarButton onCLick={createChat}>
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