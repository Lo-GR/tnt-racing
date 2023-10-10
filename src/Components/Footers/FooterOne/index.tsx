import { Link } from "react-router-dom";
import TDLogo from "../../../images/TDContractingLogo.png"

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
        <div className="flex flex-col items-center w-full lg:flex-row justify-around p-1 ">
          <div className="max-w-sm">
            <img src={TDLogo} alt="T and D Contracting Logo" />
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
          <div className="flex flex-col gap-4 md:flex-row justify-evenly items-center w-1/2">
            {socialMediaLinks.map((social) => {
              return hyperLinkGenerator(social)
            })}
          </div>
        </div>
        <div className="w-9/12 h-px bg-gradient-to-tl from-sp-tertiary-600 to-sp-tertiary-500" />
        <div>
          <p className="text-sm">Website ©2023 <Link className="underline" to="https://alexewilliams.com/" target="_blank">Alex</Link> + <Link className="underline" to="https://www.lo-gr.com/" target="_blank">Logan</Link></p>
        </div>
      </div>
    </div>
  );
};
