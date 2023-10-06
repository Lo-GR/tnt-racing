import classNames from 'classnames';
import './styles.css';

interface BoatCardTypes {
  boatImage: string
  boatName: string
  boatSponsors: {
    image: string
    alt: string
  }[]
  boatDescription: string
  reverse: string
}

export const BoatCard = ({ boatImage, boatName, boatSponsors, boatDescription, reverse }: BoatCardTypes) => {

  return (
    <div className={classNames(reverse, "boat-card-container w-full overflow-hidden bg-sp-tertiary-500 rounded-lg flex items-center flex-col lg:h-[400px]")}>
      <div className="h-[400px] w-full lg:h-full lg:w-1/2 flex">
        <img className="h-full w-full object-cover" src={boatImage} />
      </div>
      <div className="p-4 w-full h-96 flex items-center lg:items-start lg:mt-16 flex-col lg:pt-0 gap-5">
        <h2 className="text-[40px] text-sp-primary-200">{boatName}</h2>
        <h2 className="text-[40px] text-sp-primary-200 underline">Sponsors</h2>
        <div className="flex items-center justify-center lg:justify-start w-full gap-2">
          {boatSponsors.map((sponsor) => {
            return <img className="max-h-20" src={sponsor.image} alt={sponsor.alt} />
          })}
        </div>
        <h2 className="text-[30px] underline text-sp-primary-200">Stats</h2>
        <p className="text-sp-primary-200" >{boatDescription}</p>
      </div>
    </div >
  )
}