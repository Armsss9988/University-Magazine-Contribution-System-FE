import React from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

const Logout = () => {
  const [cookies, setCookie] = useCookies(['authToken']); // Thay thế 'authToken' bằng tên cookie của bạn

  const handleLogout = () => {
    setCookie('authToken', '', { expires: new Date(0) }); // Xóa cookie token
    window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
  };

  return (
    <button onClick={handleLogout}>Đăng xuất</button>
  );
};

const A = () => {
  return (
    <CookiesProvider>
      <Logout />
    </CookiesProvider>
  );
};

export default A;
