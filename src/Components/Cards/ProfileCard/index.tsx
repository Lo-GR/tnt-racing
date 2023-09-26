interface ProfileCardTypes {
  profileImage: string
}

export const ProfileCard = ({ profileImage }: ProfileCardTypes) => {
  return (
    <div className="w-full bg-sp-primary-400 flex items-center justify-evenly">
      <div className="w-1/3">
        <img src={profileImage} />
      </div>
    </div>
  )
}