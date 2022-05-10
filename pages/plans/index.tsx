import {useAllUsers} from "../../hooks/useAllUsers";
import {useEffect} from "react";



export default function Plans() {
  const {getUsers, users} = useAllUsers()

  useEffect(() => getUsers(), [])

  console.log(users)
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Collections</h2>

          <a href="#"
             className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Show
            more</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
          {users.map((user) => (
            <div>
              <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy" alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"/>
              </a>

              <div className="flex flex-col">
                <span className="text-gray-500">{user.username}</span>
                <a href="#"
                   className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">
                  {user.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}