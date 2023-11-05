import { BoatCard } from "../../Components/Cards/BoatCard"
import { boats } from "../../Helpers/config"
import { motion } from 'framer-motion';
import Boat from '../../images/Boat-Turning-With-Wake.jpg'

export const Boats = ({ }) => {
  const cardVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * .125
      },
    }),
    initial: {
      opacity: 0,
      y: 150,
    },
  }

  return (
    <div className="mx-auto container flex flex-col justify-center items-center gap-10 px-8 py-20 ">
      <div className="bg-sp-primary-300 overflow-hidden flex flex-col justify-center items-center rounded">
        <div className=" h-[300px] w-full justify-center flex">
          <img className="h-full w-full object-cover" src={Boat} alt="Sprint Boat turning with water in it's wake" />
        </div>
        <h3 className="py-10 px-10 lg:px-32 text-[30px] text-sp-secondary-300">
          Our boats are designed for victory, with one of our boats ranking as the third fastest in the world! We're unstoppable on the water. Join us in experiencing the thrill of high-performance sprint boats that are breaking records worldwide.
        </h3>
      </div>
      {boats.map((boat, index) => {
        return (<motion.div
          variants={cardVariants}
          custom={index}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          key={`key ${index}`}
          className="w-full mx-auto">
          <BoatCard boatImage={boat.image} boatName={boat.name} boatSponsors={boat.sponsors} boatDescription={boat.description} reverse={boat.position} />
        </motion.div>)
      })}

    </div>
  )
}