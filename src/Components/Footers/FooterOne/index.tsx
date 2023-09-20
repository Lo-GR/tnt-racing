import { Link } from "react-router-dom";

export const FooterOne = () => {

  const socialMediaLinks = [
    {
      link: "https://www.facebook.com/JeepersCreepers9966",
      site: "Facebook"
    },
    {
      link: "https://www.youtube.com/user/tcummings1000",
      site: "YouTube"
    },
    {
      link: "https://www.asbracing.com/",
      site: "ASBR"
    },
  ]

  const hyperLinkGenerator = ({ link, site }: { link: string, site: string }) => {
    return <Link key={site + link} to={link} target="_blank" rel="noreferrer"><p className='underline'>{site}</p> </Link>
  }

  return (
    <div className="bg-sp-primary-200">
      <div className="container flex flex-col justify-between items-center text-2xl gap-1 mx-auto p-4">
        <div className="container flex flex-row justify-around p-1 ">
          <div>
            <p className="text-sm">TNT Racing</p>
          </div>
          {/*
          <div>
            <p>Careers</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Accessibility</p>
            <p>Privacy Agreement</p>
          </div> */}
          <div className="flex flex-row justify-evenly items-center w-1/2">
            {socialMediaLinks.map((social) => {
              return hyperLinkGenerator(social)
            })}
          </div>
        </div>
        <div className="w-9/12 h-px bg-gradient-to-tl from-sp-tertiary-600 to-sp-tertiary-500" />
        <div>
          <p className="text-sm">Website ©2023 Alex + Logan</p>
        </div>
      </div>
    </div>
  );
};
