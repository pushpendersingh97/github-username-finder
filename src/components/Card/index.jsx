import CardLayout from "../common/CardLayout";

const Card = ({ user }) => {
  if (!user) {
    return null; 
  }

  if(user.message) {
    return (
      <CardLayout>
        <p className="text-2xl text-center">{user.message}</p>
      </CardLayout>
    );
  }

  return (
    <CardLayout>
      <div className="flex items-center">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="rounded-full w-24 h-24"
        />
        <div className="flex flex-col w-full px-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
            <span className="text-sm text-gray-300">
              Joined on {new Date(user.created_at).toLocaleDateString('en-GB')}
            </span>
          </div>
          <p className="text-md text-gray-300">@{user.login}</p>
          <p className="text-sm text-gray-300 my-4">
            {user.bio || "This profile has no bio"}
          </p>
          <div className="flex justify-around items-center bg-custom-primary p-4 rounded-lg">
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Repos <span className="text-lg">{user.public_repos}</span>
            </p>
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Followers <span className="text-lg">{user.followers}</span>
            </p>
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Following <span className="text-lg">{user.following}</span>
            </p>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Card;
