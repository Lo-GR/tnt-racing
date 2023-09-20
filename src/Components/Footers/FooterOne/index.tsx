export const FooterOne = () => {
  return (
    <div className="bg-sp-primary-200">
      <div className="container flex flex-col justify-center items-center text-2xl gap-1 mx-auto p-4">
        <div className="container flex flex-row justify-around p-2">
          {/* <div>
            <p>Contact Us</p>
            <p>Support</p>
          </div>
          <div>
            <p>Careers</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Accessibility</p>
            <p>Privacy Agreement</p>
          </div> */}
          <div className="flex flex-row justify-evenly items-center w-full">
            <a href="https://www.facebook.com/JeepersCreepers9966" target="_blank" rel="noreferrer"><p>Facebook</p> </a>
            <a href="https://www.youtube.com/user/tcummings1000" target="_blank" rel="noreferrer"><p>YouTube</p></a>
            <a href="https://www.asbracing.com/" target="_blank" rel="noreferrer"><p>ASBR</p></a>
          </div>
        </div>
        <div className="w-9/12 h-px bg-gradient-to-tl from-sp-tertiary-600 to-sp-tertiary-500" />
        <div>
          <p>©2023 Alex + Logan</p>
        </div>
      </div>
    </div>
  );
};
