import { ProfileCard } from "../../Components/Cards/ProfileCard"
import { profiles } from "../../Helpers/config"
import { motion } from 'framer-motion';
import TimAward from '../../images/Award-Received.jpg'

export const Drivers = (props: any) => {
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
        <div className=" h-[450px] w-full justify-center flex">
          <img className="h-full w-full object-cover" src={TimAward} alt="Tim Cummings receiving a sprint boat award" />
        </div>
        <h3 className="py-10 px-10 lg:px-32 text-[30px] text-sp-secondary-300">
          Our award winning team is made up of family and friends as close to family as possible. TNT Racing isn't just about speed; it's about winning. Our drivers frequently make numerous podium finishes.
        </h3>
      </div>
      {profiles.map(({ image, name, role, description, position }, index) => {
        return (
          <motion.div
            variants={cardVariants}
            custom={index}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            key={`key ${index}`}
            className="w-full mx-auto">
            <ProfileCard profileImage={image} profileName={name} profileSubtitle={role} profileDescription={description} reverse={position} />
          </motion.div>
        )
      })}
    </div>
  )
}