import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

type HeaderOneProps = {
  logo: string;
  headerRoutes: {
    route: string;
    title: string;
  }[];
  open: boolean;
  handleOpen: () => void;
};

export const HeaderOne = ({
  logo,
  headerRoutes,
  open,
  handleOpen,
}: HeaderOneProps) => {
  return (
    <div className="bg-sp-primary-200 h-[70px] ">
      <div className="container mx-auto px-8 flex flex-row  h-full">
        <div className="flex h-full justify-start items-center">
          <Link to={'/'} className="">
            <img className="h-12" src={logo} />
          </Link>
        </div>
        <div className="flex-row w-full justify-end items-center h-full space-x-8 hidden lg:flex">
          {headerRoutes.map((route) => {
            return (
              <Link
                className="text-sp-secondary-300 text-[30px] font-bold uppercase hover:text-sp-tertiary-600"
                to={route.route}>
                {route.title}
              </Link>
            );
          })}
        </div>
        <div className="flex lg:hidden items-center justify-end w-full">
          {open ? (
            <CloseIcon
              fontSize="large"
              style={{ color: 'white' }}
              onClick={() => handleOpen()}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              style={{ color: 'white' }}
              onClick={() => handleOpen()}
            />
          )}
        </div>
      </div>
    </div>
  );
};
