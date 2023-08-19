import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
            <div className="redes">
                <a href="https://linkedin.com/in/Eduardo4Smile">
                    <img src="/img/Linkedin.png" alt="Linkedin"/>
                </a>
                <a href="https://facebook.com/Eduardo4Smile">
                    <img src="/img/Facebook.png" alt="Facebook"/>
                </a>
                <a href="https://x.com/Eduardo4Smile">
                    <img src="/img/Twitter.png" alt="X"/>
                </a>
                <a href="https://instagram.com/Eduardo4Smile">
                    <img src="/img/Instagram.png" alt="Instagram"/>
                </a>
                <a href="https://github.com/Eduardo4Smile">
                    <img src="/img/Github.png" alt="Github"/>
                </a>
            </div>
            <img src="img/Logo.png" alt="org"/>
            <strong>Eduardo Pérez</strong>
    </footer>
}

export default Footer