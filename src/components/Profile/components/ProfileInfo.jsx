
function ProfileInfo() {
  const localUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="text-center">
    <h2>{localUser.firstName} {localUser.lastName}</h2>
    <div className="mt-3">
      <p className="mb-1">Email: {localUser.email}</p>
      <p>Phone: {localUser.id}</p>
    </div>
  </div>
  )
}

export default ProfileInfo