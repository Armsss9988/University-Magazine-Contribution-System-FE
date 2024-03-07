import React from 'react';
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';

const ProfileStudent = () => {
    // Sample data (replace with your actual data)
    const profileData = {
        avatar: 'https://i.imgur.com/3g3yXyJ.png',
        fullName: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main Street, Anytown, CA 12345',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus eget nibh blandit, vitae maximus nisl aliquam. Sed vel leo dui. Mauris eget leo tortor. Nulla facilisi odio nec augue fringilla, vitae finibus magna tincidunt.',
    };

    return (
        <div className="container">
            <HeaderStudent />

            <div className="line"></div>

            <h1>Profile</h1>
            <div className="profile-container">
                <img src={profileData.avatar} alt="Profile Avatar" className="avatar-profile" />
                <div className="profile-info">
                    <h2 className='full-name'>{profileData.fullName}</h2>
                    <p className='age'>Age: {profileData.age}</p>
                    <ul className='secon-info'>
                        <li className='epa'>Email: {profileData.email}</li>
                        <li className='epa'>Phone: {profileData.phone}</li>
                        <li className='epa'>Address: {profileData.address}</li>
                    </ul>
                    <p>{profileData.description}</p>
                </div>
            </div>

            <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
                <a href="/editprofilestudent">
                    <button style={{ textAlign: 'center' }}>
                        Edit profile
                    </button>
                </a>
            </div>

            <div className="line"></div>

            <Footer />
        </div>


    );
};

export default ProfileStudent;

// CSS (styles.css)

