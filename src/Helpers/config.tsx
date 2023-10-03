import Dillon from "../images/Dillon-Racer.jpg"
import Teri from "../images/Teri-Navigator.jpg"
import Mike from "../images/Mike-Navigator.jpg"
import Tim from "../images/Tim-Driver.jpg"

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