import { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

const PermaLink = styled.a`
    text-decoration: none;
    font-size: 0.8em;
    padding-left: 8px;
`

export default function TermsOfService() {
    function getPermaLink(section: String): ReactElement {
        return <PermaLink href={'#' + section}>¶</PermaLink>
    }

    return (
        <Content>
            <h2>Terms of Service</h2>
            <ContentItem>
                <h3 id='si'><i>SECTION Ⅰ: Getting Started</i>{getPermaLink('si')}</h3>
                <p>
                    These terms set forth our legal obligations to each other.
                    They apply to your use of our services.
                </p>
                <p>
                    In this policy, the following terms have the following meaning:
                    <br />
                    <br />
                    - "I", "we", "our":
                    Shall include but are not limited to:
                    this service;
                    Whoever operating this service;
                    this website;
                    any associated services.
                    <br />
                    <br />
                    - "you", "your":
                    Shall include but are not limited to:
                    You, the user accessing this service;
                    The legal entity you are representing, if any.
                </p>

                <p><b>
                    By using our service, you agree to our Terms of Service and other legal documents like our
                    <Link href='privacy' passHref><a><span>Privacy Policy</span></a></Link>
                </b></p>
            </ContentItem>

            <ContentItem>
                <h3 id='sii'><i>SECTION Ⅱ: User Content</i>{getPermaLink('sii')}</h3>
                <p>
                    Certain commands and features of our services may allow you to post, upload certain user content,
                    we claim no ownership or control over that content. However, by submitting, posting or uploading user content,
                    you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sublicensable, transferable right
                    to use, copy, modify, publish, translate, create derivative works from, distribute, and display such content in any and all media.
                </p>
            </ContentItem>

            <ContentItem>
                <h3 id='siii'><i>SECTION Ⅲ: Rights to use</i>{getPermaLink('siii')}</h3>
                <p>
                    Subject to your compliance with these Terms of Service, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license
                    to access and make personal, non-commerical use of this website.
                    <br />
                    This license grant does not include: any resale or commerical use of this website or the content therein;
                    You may not, by any means, modify, copy, or redistribute this website or the content therein;
                    <br />
                    You must not use our services for any purpose that is unlawful or prohibited by these terms.
                    <br />
                    You must not, in the use of our services, violate any laws in your jurisdiction (including but not limited to copyright laws).

                </p>
            </ContentItem>

            <ContentItem>
                <h3 id='siv'><i>SECTION Ⅳ: Disclaimers</i>{getPermaLink('siv')}</h3>
                <p>
                    We do not guarantee that our services will be uninterrupted, secure, or error-free.
                    <br />
                    Except as expressly provided, this website including all its content therein, and this service
                    are provided on an "as is" and "as available" and "with all fault" basis.
                    without warranty of any kind, express
                    or implied, including but not limited to the warranties of merchantability,
                    fitness for a particular purpose and noninfringement. in no event shall the
                    authors or copyright holders be liable for any claim, damages or other
                    liability, whether in an action of contract, tort or otherwise, arising
                    from, out of or in connection with the website or service or the use or other
                    dealings in the website or service.
                </p>
            </ContentItem>

            <ContentItem>
                <h3 id='sv'><i>SECTION Ⅴ: Miscellaneous</i>{getPermaLink('sv')}</h3>
                <p>
                    We reserve the right to modify these terms at any time.
                    <br />
                    We reserve the right to terminate your use of our services if you do not comply with these terms.
                    <br />
                    We reserve the right to prohibit you from accessing or using our services in any way if you do not comply with these terms.
                </p>
            </ ContentItem>


        </Content>
    )
}