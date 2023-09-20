import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../Buttons/LinkButton';
import { Button } from '../../Buttons/ButtonOne';

type HeaderOneProps = {
  logo: string;
};

export const HeaderOne = ({ logo }: HeaderOneProps) => {
  return (
    <div className="bg-sp-primary-200 h-[70px] ">
      <div className="container mx-auto px-8 flex flex-row  h-full">
        <div className="flex h-full items-center">
          <Link to={'/'}>
            <img src={logo} />
          </Link>
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
