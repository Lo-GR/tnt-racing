import { ProfileCard } from "../../Components/Cards/ProfileCard"
import Dillon from "../../images/Dillon-Racer.jpg"

export const Drivers = ({ }) => {
  return (
    <div className=" mx-auto container flex flex-col justify-center items-center gap-10">
      <ProfileCard profileImage={Dillon} profileDescription="he drives the boats" />
      <ProfileCard profileImage={Dillon} profileDescription="he drives the boats" />
      <ProfileCard profileImage={Dillon} profileDescription="he drives the boats" />
      <ProfileCard profileImage={Dillon} profileDescription="he drives the boats" />
    </div>
  )
}