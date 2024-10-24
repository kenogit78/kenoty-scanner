import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div>
    {/* <div className=" mt-10">
      <h1 className="text-primary dark:text-white text-2xl font-semibold tracking-wide">
        Settings
      </h1>
    </div> */}
    <div className="mx-auto flex flex-col justify-center items-center">
      <div className="mt-10 md:mt-24">
        <UserProfile path="/user-profile" routing="path" />
      </div>
    </div>
  </div>
);

export default UserProfilePage;
