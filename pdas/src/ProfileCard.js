function ProfileCard({ title, handle }) {
  // Destructure objects in code OR directly in arguments since props object is always passed

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
