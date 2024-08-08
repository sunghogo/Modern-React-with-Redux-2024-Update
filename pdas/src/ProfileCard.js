function ProfileCard({ title, handle, image }) {
  // Destructure objects in code OR directly in arguments since props object is always passed

  return (
    <div>
      <img src={image} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
