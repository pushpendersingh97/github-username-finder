import CardLayout from "../common/CardLayout";

const Card = () => {
  return (
    <CardLayout>
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="avatar"
          className="rounded-full w-24 h-24"
        />
        <div className="flex flex-col w-full px-4">
          <d className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">mojombo</h1>
            <span className="text-sm text-gray-300">Joined on 2007-10-20</span>
          </d>
          <p className="text-md text-gray-300">@mojombo</p>
          <p className="text-sm text-gray-300 my-4">This profile has no bio</p>
          <div className="flex justify-around items-center bg-custom-primary p-4 rounded-lg">
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Repos <span className="text-lg">61</span>
            </p>
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Followers <span className="text-lg">61</span>
            </p>
            <p className="text-sm text-gray-300 flex flex-col justify-center items-center">
              Following <span className="text-lg">61</span>
            </p>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Card;
