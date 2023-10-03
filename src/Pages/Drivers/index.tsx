import { ProfileCard } from "../../Components/Cards/ProfileCard"
import { profiles } from "../../Helpers/config"
import { motion } from 'framer-motion';

export const Drivers = ({ }) => {
  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    initial: {
      opacity: 0,
      y: 150,
    },
  };


  return (
    <div className="mx-auto container flex flex-col justify-center items-center gap-10 px-8 py-20 ">
      {profiles.map(({ image, name, role, description, position }, index) => {
        return (
          <motion.div
            variants={cardVariants}
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