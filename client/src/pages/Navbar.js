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
                    <img src="images/logo.png" className="logo" alt="Logo" />
                </a>
                <ul className="">
                    <li className=""><img src="images/notification.png" alt="Notification" /></li>
                    <li className=""><img src="images/inbox.png" alt="Inbox" /></li>
                    <li className=""><img src="images/video.png" alt="Video" /></li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src="images/search.png" alt="search-bar" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="nav-user-icon online" onClick={toggleMenu}>
                    <img src="images/profile-pic.png" alt="Profile" />
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
                                <img src="images/profile-pic.png" alt="" />
                                <div>
                                    <p>John Gray</p>
                                    <a href="profile.html">See your profile</a>
                                </div>
                            </div>
                            <hr />
                            <div className="user-profile">
                                <img src="images/feedback.png" alt="" />
                                <div>
                                    <p>Give feedback</p>
                                    <a href="mailto:mailto:abhishke9872615721@gmail.com">help us to improve this website</a>
                                </div>
                            </div>
                            <hr />
                            <div className="setting-links">
                                <img src="images/setting.png" className="settings-icon" alt="" />
                                <a href="#">Settings and Privacy <img src="images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="images/help.png" className="settings-icon" alt="" />
                                <a href="#">Help and Support <img src="images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="images/display.png" className="settings-icon" alt="" />
                                <a href="#">Display and Accessibility <img src="images/arrow.png" width="10px" /></a>

                            </div>
                            <div className="setting-links">
                                <img src="images/logout.png" className="settings-icon" alt="" />
                                <a href="#">Logout <img src="images/arrow.png" width="10px" /></a>

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
