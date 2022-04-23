import styled from 'styled-components';

import Header from "../components/Header"
import Footer from "../components/Footer"


const Content = styled.div`
    position: relative;
    padding: 25px 30px;
`

const ContentItem = styled.div`
    border-bottom: 1px dotted #FFFFFF;
`

const ListItem = styled.div`
    margin-right: 5vw;
`

const ContentItemTitle = styled.div`
    margin: 0;
`

const ContentItemDescription = styled.div`
    margin: 0;
    margin-left: 1vw;
`

export default function Privacy() {
    return (
        <>
            <Header />
            <Content>
                <h2>Privacy Policy</h2>
                <h3>Getting Started</h3>
                <p>
                    We honor the privacy of our users. 
                    This privacy policy describes 
                    how we collect, use, and share information 
                    about our users' when they use our services.
                </p>
                <p>
                    In this policy, the following terms have the following meaning:
                    <br />
                    <br />
                    - "I", "we", "our": This service.
                </p>
                <ContentItem>
                    <h3>Information We Collect</h3>
                    <p>
                        We collect information about you when you use our services. 
                        This includes:
                    </p>
                    <ul>
                        <ListItem>
                            <ContentItemTitle>Discord User ID</ContentItemTitle>
                            <ContentItemDescription>
                                - This is the unique identifier for user's Discord account.
                                <br />
                                - This is nesscessary for us to identify who they are.
                            </ContentItemDescription>
                        </ListItem>
                    </ul>
                </ContentItem>
                <ContentItem>
                    <h3>Who have access</h3>
                    <p>Users' data are not shared with any third party, 
                        we have direct control over users' data.
                    </p>
                </ContentItem>
                <ContentItem>
                    <h3>Rights of users</h3>
                    <p>
                        You have the right to access, correct, and delete your information.
                        <br />
                        You also have the right to request that your information be corrected, 
                        and to have your information deleted.
                    </p>
                    <h4>
                        How to exercise these rights
                    </h4>
                    <p>
                        User can contact us at our <a href="https://discord.gg/AHYTRPr8hZ">Discord Support Server</a>.
                        <br />
                        Alternatively, user can email us at 
                        <a href="mailto:bot@bobobot.cf">bot@bobobot.cf</a>.
                    </p>
                </ContentItem>
            </Content>
            <Footer />
        </>
    )
}
