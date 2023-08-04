import { useState, useEffect } from "react";
import axios from "axios";

const TeamMember = () => {
  const [members, setMembers] = useState([]);

  const getMemberData = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    setMembers(data.data.slice(0, 4));
  };

  useEffect(() => {
    getMemberData();
  }, []);

  return (
    <>
      <p className="text-gray-800 font-bold  text-center text-4xl">Our Team</p>
      <div className="max-w-[700px] mx-auto px-4 py-4 flex justify-between gap-2">
        {members.map((item) => (
          <div key={item.id} >
            <div>
              <img
                src={item.avatar}
                alt="#"
                className="rounded-2xl border-l-4 border-b-4 border-gray-900 shadow-lg"
              />
            </div>
            <div className="flex justify-center mt-5">
              <p className=" text-gray-700 font-bold mr-2 ">
                {item.first_name}
              </p>
              <p className=" text-gray-700 font-bold mr-2 ">
                {item.last_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamMember;
