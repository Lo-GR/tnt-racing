// Humans
import Dillon from "../images/Dillon-Racer.jpg"
import Teri from "../images/Teri-Navigator.jpg"
import Mike from "../images/Mike-Navigator.jpg"
import Tim from "../images/Tim-Driver.jpg"
// Boats
import JeepersCreepers from "../images/Sprint-Boat-In-Trailer.jpg"
import Boat99 from "../images/Sprint-Boat-In-Tent.jpg"
import placeholder from "../images/TNTLogo.png"

// Sponsors
import DogHouse from "../images/DogHouse.jpg"
import TDLogo from "../images/TDLogo2.png"

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
  {
    image: placeholder,
    name: "Boat 04 (Name TBD)",
    sponsors: [],
    description: "Pending",
    position: "lg:flex-row"
  }
]