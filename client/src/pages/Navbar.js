import React, { useState, useEffect } from 'react';
import "../App.css"
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-theme');
        }
    }, []);
    return (
        <nav>
            <div className="nav-left">
                <a href="index.html">
                    {/* <img src="/home-logo.png" className="logo" alt="Logo" /> */}
                     <svg width="160px" height="38.81932489044821" viewBox="0 0 369.66666666666663 76.79720016737745" class="looka-1j8o68f"><defs id="SvgjsDefs1355"></defs><g id="SvgjsG1356" featurekey="tOsHRK-0" transform="matrix(1.6832261643042017,0,0,1.6832261643042017,-0.49814766561012996,-3.661017228411551)" fill="#ffffff"><g xmlns="http://www.w3.org/2000/svg"><path d="M49.7,43.8c-0.2-0.4-0.6-0.7-1.1-0.7H44l-2.1-3.7l2.1-3.7h4.6c0.5,0,0.9-0.3,1.1-0.7c0.2-0.4,0.1-1-0.2-1.3   c-1.6-1.8-3.9-2.7-6.3-2.7c-4.4,0.1-8.1,3.8-8.2,8.2c-0.1,2.3,0.8,4.4,2.4,6.1c1.6,1.6,3.7,2.5,6,2.5c2.3,0,4.6-1,6.2-2.7   C49.8,44.8,49.8,44.2,49.7,43.8z"></path><path d="M6.9,31c-2.4,0-4.7,0.9-6.3,2.7C0.3,34,0.2,34.5,0.4,35c0.2,0.4,0.6,0.7,1.1,0.7h4.6l2.1,3.7l-2.1,3.7H1.5   c-0.5,0-0.9,0.3-1.1,0.7c-0.2,0.4-0.1,1,0.2,1.3c1.6,1.7,3.8,2.7,6.2,2.7c2.3,0,4.4-0.9,6-2.5c1.6-1.6,2.4-3.8,2.4-6.1   C15,34.8,11.3,31.1,6.9,31z"></path><path d="M27.7,6.9V2.4c-1.8-0.3-3.6-0.3-5.3,0v4.4C22.4,10.5,27.7,10.4,27.7,6.9z"></path><path d="M24.7,14.9c-1.5,0-2.8,1.3-2.8,2.8c0,1.5,1.3,2.8,2.8,2.8c1.5,0,2.8-1.3,2.8-2.8C27.5,16.2,26.3,14.9,24.7,14.9z"></path><path d="M30.9,3.3c-0.6-0.2-1.2-0.4-1.7-0.5v4.2c0,2.2-1.8,4.2-4.2,4.2c-2.4,0-4.1-2-4.1-4.2V2.7C13.4,4.7,6.5,12.2,5.1,23.4h39.8   C43.7,14,38.3,6.1,30.9,3.3z M24.7,22c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3   C29,20.1,27.1,22,24.7,22z"></path><path d="M4.3,28h41.3c0.9,0,1.5-0.7,1.5-1.5c0-0.9-0.7-1.6-1.5-1.6H4.3c-0.9,0-1.5,0.7-1.5,1.6C2.8,27.3,3.5,28,4.3,28z"></path><path d="M15.7,35.2c0.6,1.2,0.9,2.5,1,4c0,1.6-0.3,3.1-0.9,4.5h18.6c-0.7-1.4-1-2.9-0.9-4.5c0-1.4,0.4-2.8,1-4H15.7z"></path></g></g><g id="SvgjsG1357" featurekey="dVtZHI-0" transform="matrix(3.383236078395691,0,0,3.383236078395691,103,-2.3449201980364442)" fill="#ffffff"><path d="M9.96 4.24 l-2.04 12.62 l-2.44 -12.62 l-0.36 0 l-1.74 10.02 c0 0.02666 0.0033398 0.12 0.01 0.28 s0.02 0.34 0.04 0.54 s0.04 0.39 0.06 0.57 s0.03666 0.29 0.05 0.33 c0.36 -1.92 0.65 -3.46 0.87 -4.62 s0.42334 -2.2334 0.61 -3.22 s0.28 -1.5 0.28 -1.54 c0 0.05334 0.13334 0.78334 0.4 2.19 s0.56 2.94 0.88 4.6 s0.74666 3.8634 1.28 6.61 l0.12 0 l2.62 -15.76 l-0.64 0 z M0.6 4.24 l-0.6 0 l2.62 15.76 l0.1 0 l0.3 -1.1 z M20.200000000000003 20 c2.2134 0 4.1 -0.78 5.66 -2.34 c0.77334 -0.76 1.3567 -1.58 1.75 -2.46 s0.59 -1.88 0.59 -3 c0 -2.2266 -0.78 -4.1066 -2.34 -5.64 c-1.56 -1.52 -3.4866 -2.2866 -5.78 -2.3 c-1.4133 0.01334 -2.74 0.36668 -3.98 1.06 c-1.2133 0.70666 -2.18 1.6867 -2.9 2.94 l0.58 0.32 c0.65334 -1.16 1.54 -2.06 2.66 -2.7 c1.1067 -0.64 2.32 -0.96666 3.64 -0.98 c2.1334 0.01334 3.9066 0.72668 5.32 2.14 c1.4133 1.3867 2.1266 3.1066 2.14 5.16 c0 1.0267 -0.18 1.9433 -0.54 2.75 s-0.88666 1.5633 -1.58 2.27 c-1.4267 1.4267 -3.1666 2.14 -5.22 2.14 c-1.28 0 -2.44 -0.27334 -3.48 -0.82 l-0.3 0.58 c1.1333 0.58666 2.3934 0.88 3.78 0.88 z M35.2 15.219999999999999 c0.85334 -0.48 1.5067 -1.1567 1.96 -2.03 s0.68 -1.8633 0.68 -2.97 l0 -0.28 c0 -1.64 -0.49 -3 -1.47 -4.08 s-2.3766 -1.62 -4.19 -1.62 l-1.38 0 l0 6.34 c0.22666 0.01334 0.45332 0.02 0.67998 0.02 l0 -5.72 l0.66 0 c1.64 0 2.88 0.47666 3.72 1.43 s1.26 2.1766 1.26 3.67 l0 0.22 c0 1.48 -0.42 2.6934 -1.26 3.64 s-2.08 1.42 -3.72 1.42 l-0.66 0 l0 0 l-0.68 0 l0 0.64 c0.4 0.01334 0.66666 0.02 0.8 0.02 l0.58 0 c0.92 0 1.7267 -0.14 2.42 -0.42 l2.48 4.5 l0.8 0 z M43.040000000000006 13.36 l3.96 6.64 l0.78 0 l-4.34 -7.28 z M43.120000000000005 12.14 l4.48 -7.84 l-0.8 0 l-5.64 9.94 l0 -9.98 l-0.68 0 l0 11.24 l0.68 0 l0 -0.02 l1.54 -2.68 z M51.06 13.96 l0 -9.72 l-0.68 0 l0 15.76 l0.68 0 l0 -5.4 l0 -0.64 z M51.34 14.6 l5.84 0 l0 5.4 l0.68 0 l0 -11.62 l-0.68 0 l0 5.58 l-5.84 0 l0 0.64 z M60.46 4.24 l0 15.76 l0.52 0 l0 -15.76 l-0.52 0 z M67.98 15.219999999999999 c0.85334 -0.48 1.5067 -1.1567 1.96 -2.03 s0.68 -1.8633 0.68 -2.97 l0 -0.28 c0 -1.64 -0.49 -3 -1.47 -4.08 s-2.3766 -1.62 -4.19 -1.62 l-1.38 0 l0 6.34 c0.22666 0.01334 0.45332 0.02 0.67998 0.02 l0 -5.72 l0.66 0 c1.64 0 2.88 0.47666 3.72 1.43 s1.26 2.1766 1.26 3.67 l0 0.22 c0 1.48 -0.42 2.6934 -1.26 3.64 s-2.08 1.42 -3.72 1.42 l-0.66 0 l0 0 l-0.68 0 l0 0.64 c0.4 0.01334 0.66666 0.02 0.8 0.02 l0.58 0 c0.92 0 1.7267 -0.14 2.42 -0.42 l2.48 4.5 l0.8 0 z M73.82 14.16 l0 -9.36 l4.8 0 l0 -0.56 l-5.36 0 l0 9.92 l0.56 0 z M78.82 20 l0 -0.54 l-5 0 l0 -4.14 l0.8 0 l0 -0.54 l-1.36 0 l0 5.22 l5.56 0 z"></path></g></svg>
                </a>
                <ul className="">
                    <li className=""><img src="/images/notification.png" alt="Notification" /></li>
                    <li className=""><img src="/images/inbox.png" alt="Inbox" /></li>
                    <li className=""><img src="/images/video.png" alt="Video" /></li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src="/images/search.png" alt="search-bar" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="nav-user-icon online" onClick={toggleMenu}>
                    <img src="/images/profile-pic.png" alt="Profile" />
                </div>

                {/* Settings Menu */}
                {isMenuOpen && (
                    <div className={`settings-menu ${isMenuOpen ? 'settings-menu-height' : ''}`}

                    >
                        <div id="dark-btn" className={isDarkMode ? 'dark-btn-on' : ''} onClick={toggleDarkMode}>
                            <span></span>
                        </div>

                        <div className="settings-menu-inner">
                            <div className="user-profile">
                                <img src="/images/profile-pic.png" alt="" />
                                <div>
                                    <p>John Gray</p>
                                    <a href="profile.html">See your profile</a>
                                </div>
                            </div>
                            <hr />
                            <div className="user-profile">
                                <img src="/images/feedback.png" alt="" />
                                <div>
                                    <p>Give feedback</p>
                                    <a href="mailto:mailto:abhishke9872615721@gmail.com">help us to improve this website</a>
                                </div>
                            </div>
                            <hr />
                            <div className="setting-links">
                                <img src="/images/setting.png" className="settings-icon" alt="" />
                                <a href="#">Settings and Privacy <img src="/images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="/images/help.png" className="settings-icon" alt="" />
                                <a href="#">Help and Support <img src="/images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="/images/display.png" className="settings-icon" alt="" />
                                <a href="#">Display and Accessibility <img src="/images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="/images/logout.png" className="settings-icon" alt="" />
                                <a href="#">Logout <img src="/images/arrow.png" width="10px" /></a>

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
