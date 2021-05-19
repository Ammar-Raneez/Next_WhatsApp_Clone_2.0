import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth } from "../firebase"

const Message = ({ user, message }) => {
    const [userLoggedIn]  = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender: Receiver;

    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>
                    {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message

const Container = styled.div `
`

const MessageContent = styled.p `
    width: fit-content;
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 20px;
    position: relative;
    text-align: right;
`

// extend styling to user defined styled component
// all components wil be styled by within brackets normal
// html tags are normal
const Sender = styled(MessageContent) `
    margin-left: auto;
    background-color: #dcfec6;
`

const Receiver = styled(MessageContent) `
    background-color: whitesmoke;
    text-align: left;
`

const Timestamp = styled.span `
    color: gray;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    bottom: 0;
    text-align: left;
    right: 0;
`