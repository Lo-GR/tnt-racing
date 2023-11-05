import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface MobileNavProps {
  open: boolean;
  handleOpen: any;
}

const MobileNav = ({ open, handleOpen }: MobileNavProps) => {
  const variants = {
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      x: -800,
      transition: {
        duration: 0.5,
      },
    },
  };

  const location = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={classNames(
            'bg-black h-full w-full fixed inset-0 z-50 items-center overscroll-contain'
          )}>
          <div className="w-full justify-end flex p-4">
            <CloseIcon
              fontSize="large"
              style={{ color: 'white' }}
              onClick={() => handleOpen()}
            />
          </div>
          <div
            onClick={() => handleOpen()}
            className="flex flex-col gap-10 text-center text-3xl uppercase justify-start h-full mt-60">
            <Link key={'Home'} to={`/`}>
              <p
                className={
                  location.pathname === '/'
                    ? 'text-highlight'
                    : 'text-light-500'
                }>
                Home
              </p>
            </Link>
            <Link key={'Boats'} to={`/boats`}>
              <p
                className={
                  location.pathname === '/boats'
                    ? 'text-highlight'
                    : 'text-light-500'
                }>
                Boats
              </p>
            </Link>
            <Link key={'Drivers'} to={`/drivers`}>
              <p
                className={
                  location.pathname === '/drivers'
                    ? 'text-highlight'
                    : 'text-light-500'
                }>
                Drivers
              </p>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
