import React from 'react'
import { HeroVideo } from '../../Components/Heros/HeroVideo'
import { InfoBox } from '../../Components/InfoBox'
import BoatFlip from "../../images/Sprint-Boat-Flipping.jpg"
import BoatTurn from "../../images/Sprint-Boat-Turning-Race.jpg"
import JeepersCreepersHeadShot from "../../images/Jeepers-Creepers-Sprint-Boat.jpg"

type Props = {}

export default function Home({ }: Props) {
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
        youtubeId="xpVvBpgZvFE"
        title="TNT RACING"
        text="It's in our blood" />
      <InfoBox content={infoBoxContent} />
    </div>
  )
}