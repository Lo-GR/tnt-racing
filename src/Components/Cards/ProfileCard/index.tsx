import './styles.css';

interface ProfileCardTypes {
  profileImage: string
  profileDescription: string
}

export const ProfileCard = ({ profileImage, profileDescription }: ProfileCardTypes) => {
  return (
    <div className="profile-card-container w-full p-4 bg-sp-tertiary-500 rounded-lg flex items-center justify-evenly flex-col lg:flex-row">
      <div className="w-1/3 justify-center flex">
        <img className=" h-48 w-96 object-cover lg:w-48 " src={profileImage} />
      </div>
      <div className="w-full h-96">
        <p className="text-sp-primary-200">{profileDescription}</p>
      </div>
    </div>
  )
}