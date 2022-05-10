import { useCallback, useState} from "react";
import axios from "axios";
import {User} from "../types/user";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {});
  }, []);

  return {getUsers, users}
}