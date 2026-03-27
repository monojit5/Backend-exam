import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const listcontext = createContext();
const Listprovider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [readData, setReadData] = useState([]);

  const fatchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/list");
      console.log(res);
      setReadData(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);

  const handelChange = () => {
    navigate("/create");
  };
  const [createdata, Setcreatedata] = useState({
    title: "",
    description: "",
  });

  const handelChanges = async (e) => {
    Setcreatedata({
      ...createdata,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!createdata.title.trim() || !createdata.description.trim()) {
        toast.error("title and descripton is required most");
        return;
      }
      const res = await axios.post(
        "http://localhost:3000/user/list",
        createdata,
      );
      if (res.status !== 201) {
        console.log("server error");
        return;
      }
      Setcreatedata(res.data.data);
      toast.success("Data create successfully")
      navigate("/");
      fatchData();
    } catch (error) {
      console.error(error);
    }
  };
  const hendelDel = async (id) => {
    try {
      const confromDel = window.confirm("Are you sure?");
      if (!confromDel) {
        return;
      }
      const res = await axios.delete(
        `http://localhost:3000/user/list/delete/${id}`,
      );
      if (res.status !== 200) {
        toast.error("Server error");
        return;
      }
      toast.success("Delete successfully")
      navigate("/");
      fatchData();
    } catch (error) {
      console.error(error);
    }
  };
  const handelNxt = (id) => {
    navigate(`/update/${id}`);
  };

  
 



  return (
    <listcontext.Provider
      value={{
        readData,
        handelChange,
        fatchData,
        handelChanges,
        handelSubmit,
        createdata,
        hendelDel,
        handelNxt,
        
      }}
    >
      {children}
    </listcontext.Provider>
  );
};

export default Listprovider;
