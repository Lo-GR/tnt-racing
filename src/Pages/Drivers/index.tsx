import { ProfileCard } from "../../Components/Cards/ProfileCard"
import { profiles } from "../../Helpers/config"
import { motion } from 'framer-motion';
import TimAward from '../../images/Award-Received.jpg'

export const Drivers = ({ }) => {
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
      <div className="bg-sp-primary-300 flex flex-col lg:flex-row h-96">
        <div className="h-[400px] w-full lg:h-full lg:w-1/2 flex">
          <img src={TimAward} alt="Tim Cummings receiving a sprint boat award" />
        </div>
        <p>
          Our award winning team
        </p>
      </div>
      {profiles.map(({ image, name, role, description, position }, index) => {
        return (
          <motion.div
            variants={cardVariants}
            custom={index}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mx-auto">
            <ProfileCard profileImage={image} profileName={name} profileSubtitle={role} profileDescription={description} reverse={position} />
          </motion.div>
        )
      })}
    </div>
  )
}