
import { HeroVideo } from '../../Components/Heros/HeroVideo'
import { InfoBox } from '../../Components/InfoBox'
import BoatFlip from "../../images/Sprint-Boat-Flipping.jpg"
import BoatTurn from "../../images/Sprint-Boat-Turning-Race.jpg"
import JeepersCreepersHeadShot from "../../images/Jeepers-Creepers-Sprint-Boat.jpg"
import { Drivers } from '../Drivers'
import { Boats } from '../Boats'

type Props = {}

export default function Home(props: Props) {
  // const cardVariants = {
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 1,
  //       delay: i * .125
  //     },
  //   }),
  //   initial: {
  //     opacity: 0,
  //     y: 150,
  //   },
  // }

  const infoBoxContent = [
    {
      image: JeepersCreepersHeadShot,
      alt: "Sprint Boat Crashing and Flipping",
      textHeader: "Sprint Boating",
      textContent: "Sprint Boating  crew of two race against the clock in less than a metre of water."
    },
    {
      image: BoatFlip,
      alt: "Sprint Boat Turning and Navigator Navigating",
      textHeader: "Extreme Boat Racing",
      textContent: "We're here to take you on an exhilarating journey through the heart-pounding action of Sprint Boat racing."
    },
    {
      image: BoatTurn,
      alt: "Sprint Boat Turning and Navigator Navigating",
      textHeader: "Runs in the Family",
      textContent: "TNT Racing is a family team, racing courses through our veins."
    }
  ]



  return (
    <div>
      <HeroVideo
        youtubeId="cJOn-z9GOIM"
        title="TNT RACING"
        text="It's in our blood" />
      <div className='bg-sp-tertiary-500'>
        <Drivers />
      </div>

      <Boats />

      <div className='bg-sp-tertiary-500 py-12'>
        <InfoBox content={infoBoxContent} />
      </div>
    </div>
  )
}