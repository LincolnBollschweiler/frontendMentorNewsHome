export const header = `
    <header>
        <nav class="flex row">
            <h1 tabindex="0">W.</h1>
            <ul role="list" class="flex row nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#new">New</a></li>
                <li><a href="#popular">Popular</a></li>
                <li><a href="#trending">Trending</a></li>
                <li><a href="#categories">Categories</a></li>
                <li tabindex="0" id="mobile-menu-close" role="button">
                    <img aria-label="close navigation menu" src="images/icon-menu-close.svg" alt="close menu icon" />
                </li>            
            </ul>
            <img role="button" aria-label="open navigation menu" tabindex="0" id="mobile-hamburger" src="images/icon-menu.svg" alt="page menu icon" />
        </nav>
    </header>
`;
