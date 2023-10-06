import { BoatCard } from "../../Components/Cards/BoatCard"
import { boats } from "../../Helpers/config"
import { motion } from 'framer-motion';

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
      {boats.map((boat, index) => {
        return (<motion.div
          variants={cardVariants}
          custom={index}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full mx-auto">
          <BoatCard boatImage={boat.image} boatName={boat.name} boatSponsors={boat.sponsors} boatDescription={boat.description} reverse={boat.position} />
        </motion.div>)
      })}

    </div>
  )
}