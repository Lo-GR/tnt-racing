
import { Link } from 'react-router-dom';


type HeaderOneProps = {
  logo: string;
};

export const HeaderOne = ({
  logo,
}: HeaderOneProps) => {
  return (
    <div className="bg-sp-primary-200 h-[70px] ">
      <div className="container mx-auto px-8 flex flex-row  justify-center h-full">
        <div className="flex h-full justify-start items-center">
          <Link to={'/'} className="">
            <img className="h-12" src={logo} />
          </Link>
        </div>
        {/* <div className="flex-row w-full justify-end items-center h-full space-x-8 hidden lg:flex">
          {headerRoutes.map((route) => {
            return (
              <Link
                className="text-sp-secondary-300 text-[30px] font-bold uppercase hover:text-sp-tertiary-600"
                key={`key ${route.title}`}
                to={route.route}>
                {route.title}
              </Link>
            );
          })}
        </div> */}
        {/* <div className="flex lg:hidden items-center justify-end w-full">
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
        </div> */}
      </div>
    </div>
  );
};
