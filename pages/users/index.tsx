import {useAllUsers} from "../../hooks/useAllUsers";
import {useEffect} from "react";

import Link from 'next/link'

export default function Plans() {
  const {getUsers, users} = useAllUsers()

  useEffect(() => getUsers(), [])

  console.log(users)
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Collections</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
          {users.map((user) => (
            <div key={user.id}>
              <Link href={'plans/'+ user.name }>
                <a className="group block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 p-1 lg:mb-3">
                  <div className="flex flex-col">
                    <span className="text-gray-500">{user.username}</span>
                    <p
                      className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">
                      {user.name}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
