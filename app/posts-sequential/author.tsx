type User = {
  id: number;
  firstName: string;
};

export async function Author({ Id }: { Id: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://dummyjson.com/users/${Id}`);
  const user: User = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
        {user.firstName}
      </span>
    </div>
  );
}
