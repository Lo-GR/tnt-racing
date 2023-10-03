import classNames from 'classnames';
import './styles.css';

interface ProfileCardTypes {
  profileImage: string
  profileName: string
  profileSubtitle: string
  profileDescription: string
  reverse: string
}

export const ProfileCard = ({ profileImage, profileName, profileSubtitle, profileDescription, reverse }: ProfileCardTypes) => {

  return (
    <div className={classNames(reverse, "profile-card-container w-full overflow-hidden bg-sp-tertiary-500 rounded-lg flex items-center justify-evenly flex-col lg:h-[400px]")}>
      <div className="h-[300px] w-full lg:h-full lg:w-1/3 justify-center flex">
        <img className="h-full w-full object-cover" src={profileImage} />
      </div>
      <div className="text-center  p-4 w-full h-96 lg:flex lg:mt-16 lg:flex-col lg:pt-0 ">
        <h2 className="text-[40px]">{profileName}</h2>
        <h2 className="text-[32px]">{profileSubtitle}</h2>
        <p className="pt-20 text-sp-primary-200">{profileDescription}</p>
      </div>
    </div>
  )
}