import React, { useState } from 'react';
import '../css/styles.css';
import Footer from '../../components/Footer';
import HeaderManger from '../../components/HeaderManger';
import DownloadFileZip from '../../components/DownloadFileZip';

const ManagerMgzBus = () => {
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
           <HeaderManger/>

            <div className="line"></div>

            <div className="body-magazine">
                <h1>Magazine of Business</h1>
                <div>
                    {articles.map((article) => (
                        <div className="row" key={article.id}>
                            <div className="w-full">
                            <div className="card-magazine">
                                <h2>{article.title}</h2>
                                <h5>{article.content}</h5>
                                <div className="fakeimg" >Image</div>
                                <DownloadFileZip />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="line"></div>
            <Footer/>
        </div>

    );
};

export default ManagerMgzBus;