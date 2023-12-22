import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user-route/getAllUser");
      return res.json();
    },
  });

  return [users, refetch];
};

export default useUsers;
