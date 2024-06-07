import classNames from 'classnames';
import './styles.css';
import { Link } from 'react-router-dom';

interface BoatCardTypes {
  boatImage: string
  boatName: string
  boatSponsors: {
    image: string
    alt: string
    link: string
  }[]
  boatDescription: string
  reverse: string
}

export const BoatCard = ({ boatImage, boatName, boatSponsors, boatDescription, reverse }: BoatCardTypes) => {

  return (
    <div className={classNames(reverse, "boat-card-container w-full overflow-hidden rounded-lg flex items-center flex-col lg:h-[400px]")}>
      <div className="h-[400px] w-full lg:h-full lg:w-1/2 flex">
        <img className="h-full w-full object-cover" src={boatImage} />
      </div>
      <div className="p-8 w-full text-center flex items-center lg:items-start lg:mt-16 flex-col lg:pt-0 gap-5">
        <h2 className="text-[40px] ">{boatName}</h2>
        <h2 className="text-[40px]  underline">Sponsors</h2>
        <div className="flex items-center justify-center lg:justify-start w-full gap-2">
          {boatSponsors.map((sponsor) => {
            return (
              <Link target="_blank" key={`Key ${sponsor.alt}`} to={sponsor.link}>
                <img className="max-h-20" src={sponsor.image} alt={sponsor.alt} />
              </Link>
            )
          })}
        </div>
        <h2 className="text-[30px] underline ">Stats</h2>
        <p className=" " >{boatDescription}</p>
      </div>
    </div >
  )
}