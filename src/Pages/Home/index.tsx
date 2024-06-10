
import { HeroVideo } from '../../Components/Heros/HeroVideo'
import { InfoBox } from '../../Components/InfoBox'
import { Drivers } from '../Drivers'
import { Boats } from '../Boats'
import { images } from '../../Helpers/config'

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
      image: images.JeepersCreepersHeadShot,
      alt: "Sprint Boat Crashing and Flipping",
      textHeader: "Sprint Boating",
      textContent: "Sprint Boating  crew of two race against the clock in less than a metre of water."
    },
    {
      image: images.BoatFlip,
      alt: "Sprint Boat Turning and Navigator Navigating",
      textHeader: "Extreme Boat Racing",
      textContent: "We're here to take you on an exhilarating journey through the heart-pounding action of Sprint Boat racing."
    },
    {
      image: images.BoatTurn,
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