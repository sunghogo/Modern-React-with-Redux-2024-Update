function ProfileCard({ title, handle, image }) {
  // Destructure objects in code OR directly in arguments since props object is always passed

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is=1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <div className="title is-4">Title is {title}</div>
          <div className="subtitle is-6">Handle is {handle}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
