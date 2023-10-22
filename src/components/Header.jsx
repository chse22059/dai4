export default function Header() {
    return (
        <header>
            <h1>Birdwatching</h1>
            <div className="header img">
                <img src="https://github.com/chse22059/dai4/blob/main/dove.png?raw=true" alt="a simple dove logo"></img>
            </div>
            <nav>
                <ul>
                    <li><span><strong>Home</strong></span></li>
                    <li><a href="#"><strong>Get started</strong></a></li>
                    <li><a href="#"><strong>Photos</strong></a></li>
                    <li><a href="#"><strong>Gear</strong></a></li>
                    <li><a href="#"><strong>Forum</strong></a></li>
                </ul>
            </nav>
        </header>
    );
}