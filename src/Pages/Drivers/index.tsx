import { ProfileCard } from "../../Components/Cards/ProfileCard"
import { profiles } from "../../Helpers/config"

export const Drivers = ({ }) => {
  return (
    <div className="mx-auto container flex flex-col justify-center items-center gap-10 p-8">
      {profiles.map(({ image, name, role, description, position }) => <ProfileCard profileImage={image} profileName={name} profileSubtitle={role} profileDescription={description} reverse={position} />)}
    </div>
  )
}