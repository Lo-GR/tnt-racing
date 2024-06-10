// Humans
import Dillon from "../images/dillonracer.jpg"
import Teri from "../images/terinavigator.jpg"
import Mike from "../images/mikenavigator.jpg"
import Tim from "../images/timdriver.jpg"
// Boats
import JeepersCreepers from "../images/sprintboatintrailer.jpg"
import Boat99 from "../images/sprintboatintent.jpg"

// Sponsors
import DogHouse from "../images/doghouse.jpg"
import TDLogo from "../images/tdlogo.png"

// Images
import logo from '../images/tntlogo.png';
import boat from '../images/boatturningwithwake.jpg'
import BoatFlip from "../images/sprintboatflipping.jpg"
import BoatTurn from "../images/sprintboatturningrace.jpg"
import JeepersCreepersHeadShot from "../images/jeeperscreeperssprintboat.jpg"
import TimAward from '../images/awardreceived.jpg'

export const headerRoutes = [
  {
    route: '/boats',
    title: 'Boats'
  },
  {
    route: '/drivers',
    title: 'Drivers'
  }
]

export const profiles = [
  {
    image: Tim,
    name: "Tim Cummings",
    role: "Driver",
    description: "Description TBD ",
    position: "lg:flex-row"
  },
  {
    image: Mike,
    name: "Mike Kurtze",
    role: "Navigator",
    description: "Description TBD",
    position: "lg:flex-row-reverse"
  },
  {
    image: Dillon,
    name: "Dillon Cummings",
    role: "Driver",
    description: "Description TBD",
    position: "lg:flex-row"
  },
  {
    image: Teri,
    name: "Teri Cummings",
    role: "Navigator",
    description: "Description TBD",
    position: "lg:flex-row-reverse"
  },
]

export const boats = [
  {
    image: JeepersCreepers,
    name: "Jeepers Creepers",
    sponsors: [{ image: DogHouse, alt: "Dog House Logo", link: "http://www.olypen.com/mspares/DogHouse/" }, { image: TDLogo, alt: "T and D Contracting Logo", link: "https://nextdoor.com/pages/td-contracting-inc-sequim-wa/" }],
    description: "Length: 36 ft 6. Hull: Modified Jetco. Engine: 436 CID injected methanol, pump make. Engine Size: Size is Southern pump 8.5",
    position: "lg:flex-row"
  },
  {
    image: Boat99,
    name: "Boat 99 (Name TBD)",
    sponsors: [{ image: DogHouse, alt: "Dog House Logo", link: "http://www.olypen.com/mspares/DogHouse/" }, { image: TDLogo, alt: "T and D Contracting Logo", link: "https://nextdoor.com/pages/td-contracting-inc-sequim-wa/" }],
    description: "Pending",
    position: "lg:flex-row"
  },
  // {
  //   image: placeholder,
  //   name: "Boat 04 (Name TBD)",
  //   sponsors: [],
  //   description: "Pending",
  //   position: "lg:flex-row"
  // }
]

export const images = {
  logo,
  boat,
  BoatFlip,
  BoatTurn,
  JeepersCreepersHeadShot,
  TimAward
}