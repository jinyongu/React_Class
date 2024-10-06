interface LoginDataProps {
  id: string;
  passwd: string;
}

const Profile: React.FC<{ data: LoginDataProps }> = ({ data }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {data.id}</p>
      <p>Password: {data.passwd}</p>
    </div>
  );
};

export default Profile;
