
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listcontext } from "../context/Listprovider";
import toast from "react-hot-toast";

const Editdata = () => {
  const {fatchData} = useContext(listcontext);
  const {id} = useParams()
   const navigte = useNavigate()
  const [updateData, setUpdateData] = useState({
    title: "",
    description: "",
  });
  const singleFatch = async () => {
    const res = await axios.get(`http://localhost:3000/user/list/${id}`);
    setUpdateData({
      title: res.data.data.title,
      description: res.data.data.description,
    });
  };
  useEffect(() => {
    singleFatch();
  }, []);

   const handelChangei = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

    const handelSubmite = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.patch(
          `http://localhost:3000/user/list/update/${id}`,
          updateData,
        );
        setUpdateData(res.data.data);
        toast.success("Data update successfully")
        navigte("/")
        fatchData()
      } catch (error) {
        console.error(error);
      }
    };
  
  
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex items-center">
  <div className="w-full">
    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <form onSubmit={handelSubmite}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Title</label>
          <input type="text" id="name" name="title" placeholder="Put in your title." value={updateData.title} onChange={handelChangei} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>
        <div className="mb-5">
          <label htmlFor="dis" className="block mb-2 font-bold text-gray-600">Description</label>
          <input type="text" id="dis" name="description" value={updateData.description} placeholder="Put in your description." onChange={handelChangei} className="border border-red-300 shadow p-3 w-full rounded mb-" />
        </div>
        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
      </form>
    </div>
  </div>
</div>
    </>
  );
};

export default Editdata;
