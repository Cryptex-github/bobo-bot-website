import Link from 'next/link';

import styled from 'styled-components';

const FooterBar = styled.div`
    margin-top: 0px;
    padding: 50px 0;
    text-align: center;
`
const LinkInner = styled.a`
    text-decoration: none;
`

const Text = styled.span`
    padding-left: 4px;
    padding-right: 4px;

    :hover {
        color: #FFFFFFD9;
    }
`

export default function Footer() {
    return (
        <FooterBar>
            <p>Copyright(C) 2022 by Cryptex. All rights reserved.</p>
            <Link href='privacy' passHref>
                <LinkInner>
                    <Text>Privacy Policy</Text>
                </LinkInner>
            </Link>
            <Link href='tos' passHref>
                <LinkInner>
                    <Text>Terms of Service</Text>
                </LinkInner>
            </Link>
        </FooterBar>
    )
}
