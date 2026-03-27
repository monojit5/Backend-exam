import { useContext } from "react";
import { listcontext } from "../context/Listprovider";

const Read = () => {
  const { readData, hendelDel, handelNxt } = useContext(listcontext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start md:items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <h2 className="text-2xl font-bold py-5 text-center text-pink-600 border-b">
          User Data
        </h2>

        {readData.length === 0 ? (
          <h1 className="text-center font-bold py-10">Loading...</h1>
        ) : (
          <div className="overflow-x-auto">
            
            <table className="hidden md:table min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {readData.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">{item.title}</td>
                    <td className="px-6 py-4 text-gray-600">{item.description}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <button 
                        className="px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 mr-2" 
                        onClick={() => handelNxt(item._id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700" 
                        onClick={() => hendelDel(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            
            <div className="md:hidden divide-y divide-gray-200">
              {readData.map((item) => (
                <div key={item._id} className="p-4 space-y-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-gray-400">Title</span>
                    <span className="font-semibold text-gray-800">{item.title}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-gray-400">Description</span>
                    <span className="text-gray-600">{item.description}</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button 
                      className="flex-1 px-4 py-2 text-white bg-green-600 rounded-md text-center" 
                      onClick={() => handelNxt(item._id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="flex-1 px-4 py-2 text-white bg-red-600 rounded-md text-center" 
                      onClick={() => hendelDel(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Read;




