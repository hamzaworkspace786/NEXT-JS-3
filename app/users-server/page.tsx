type User = {
  id: number;
  firstName: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //   optional delay to simulate loading state

  const response = await fetch("https://dummyjson.com/users");

  const data = await response.json();
  const users: User[] = data.users;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.firstName}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
