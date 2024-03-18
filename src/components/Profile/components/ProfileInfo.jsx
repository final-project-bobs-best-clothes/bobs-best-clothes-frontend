
function ProfileInfo() {
  const localUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="text-center">
    <h2>{localUser.firstName}</h2>
    <h5>{localUser.lastName}</h5>
    <div className="mt-3">
      <p className="mb-1">Email: {localUser.email}</p>
      <p>Phone: {localUser.id}</p>
    </div>
  </div>
  )
}

export default ProfileInfo