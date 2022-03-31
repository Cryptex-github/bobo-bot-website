export default function Header() {
    return (
        <div className="title-bar">
            <a href="." className="no-deco block">
                <div className="align">
                    <img src="/icon.png" alt="icon" className="rounded title" width="112px" height="112px" />
                    <h1 className="title">Bobo Bot</h1>
                </div>
            </a>

            <div className='menu-stats'>
                <a className='no-deco' href='stats'>
                    <span className='hover-underline-animation'>Statistics</span>
                </a>
            </div>

            <div className='menu-roo'>
                <a className='no-deco' href='roo'>
                    <span className='hover-underline-animation'>Roo</span>
                </a>
            </div>
        </div>
    )
}
