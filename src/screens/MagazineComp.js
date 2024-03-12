import React, { useState } from 'react';
import Footer from '../components/Footer';

const MagazineComp = () => {
    const [articles, setArticles] = useState([
        {
            title: 'Bài viết 1',
            content: 'Đây là nội dung của bài viết 1.'
        },
        {
            title: 'Bài viết 2',
            content: 'Đây là nội dung của bài viết 2.'
        },
        {
            title: 'Bài viết 3',
            content: 'Đây là nội dung của bài viết 3.'
        }
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className='container'>
            <header>
                <div className="logoname">
                    <h2 style={{ fontSize: "20px" }}>FGW University Magazine Contribution</h2>

                </div>

                <div className="menu">
                    <a href="/">
                        Home
                    </a>
                    <div className="dropdown">
                        <button onClick={toggleDropdown}>
                            {selectedValue || 'Select an option'}
                        </button>
                        {isOpen && (
                            <ul className="dropdown-content">
                                <a className="drlist-item" href="/magazinecomp">
                                    Magazine of COMP
                                </a>
                                <a className="drlist-item" href="/magazinebus">
                                    Magazine of BUS
                                </a>
                                <a className="drlist-item" href="/magazinegd">
                                    Magazine of GD
                                </a>
                            </ul>
                        )}
                    </div>
                    <a href="/contact">
                        Contact
                    </a>
                </div>

                <div className="loginres">
                    <a href="/login">
                        <button className="btnLogin">
                            Login

                        </button>
                    </a>



                </div>
            </header>

            <div className="line"></div>

            <div style={{flex:'1 1 auto'}}>
                <h1>Magazine of COMP</h1>
                <ul>
                    {articles.map((article) => (
                        <li key={article.title}>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="line"></div>
            <Footer/>
        </div>

    );
};

export default MagazineComp;
