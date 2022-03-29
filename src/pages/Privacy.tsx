import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Privacy() {
    return (
        <>
            <Header />
            <div className="privacy-policy-content">
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
                <div className="border">
                    <h3>Information We Collect</h3>
                    <p>
                        We collect information about you when you use our services. 
                        This includes:
                    </p>
                    <ul>
                        <li className="slightly-left">
                            <p className="no-margin">Discord User ID</p>
                            <p className="no-margin description">
                                - This is the unique identifier for user's Discord account.
                                <br />
                                - This is nesscessary for us to identify who they are.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="border">
                    <h3>Who have access</h3>
                    <p>Users' data are not shared with any third party, 
                        we have direct control over users' data.
                    </p>
                </div>
                <div className="border">
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
                </div>
            </div>
            <Footer />
        </>
    )
}
