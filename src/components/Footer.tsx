import styled from 'styled-components';

const FooterBar = styled.div`
    margin-top: 0px;
    padding: 50px 0;
    text-align: center;
`
const PrivacyPolicyLink = styled.a`
    text-decoration: none;
`

const PrivacyPolicyText = styled.p`
    margin: 0;
`

export default function Footer() {
    return (
        <FooterBar>
            <p>Copyright(C) 2022 by Cryptex. All rights reserved.</p>
            <PrivacyPolicyLink href='privacy'>
                <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
            </PrivacyPolicyLink>
        </FooterBar>
    )
}
