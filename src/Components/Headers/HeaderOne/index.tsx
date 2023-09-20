import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import TNTLogo from '../../../Images/TNT-Racing-Logo.png'
import { LinkButton } from '../../Buttons/LinkButton';
import { Button } from '../../Buttons/ButtonOne';

export const HeaderOne = () => {
  const [validUser, setValidUser] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('userData')) {
      setValidUser(true);
    }
  });

  const handleLogout = () => {
    const requestOptions: any = {
      method: 'GET',
      credentials: 'include',
    };

    fetch('http://localhost:8080/api/users/logout', requestOptions)
      .then((res) => {
        sessionStorage.removeItem('userData');
        return window.location.replace('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-sp-primary-200 h-[70px] ">
      <div className="container mx-auto px-8 flex flex-row  h-full">
        <div className="flex h-full items-center">
          {/* <Link to={'/'}><TNTLogo /></Link> */}
          <Link to={'/'}><p>LOGO</p></Link>
        </div>
        {/* {validUser ? (
          <div className="flex flex-row w-full justify-end items-center h-full space-x-8">
            <LinkButton to={"/dashboard"}>Dashboard</LinkButton>
            <LinkButton to={"/signup"}>Profile</LinkButton>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="flex flex-row w-full justify-end items-center h-full space-x-8">
            <LinkButton to={"/login"}>Login</LinkButton>
            <LinkButton to={"/signup"}>Signup</LinkButton>
          </div>
        )} */}
      </div>
    </div>
  );
};
