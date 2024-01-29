import React,{useState, useEffect} from "react";
import axios from 'axios';
import { IoIosEye } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";


export default function View() {
//     const [data, setData] = useState()

//     const getUsers = async () => {
//     let res = await axios.get(`https://umami.mydomain.com/api/websites/5b7ef0ca-1596-4a1b-be3a-fbd18f650b3b/stats`);
//     // console.log(`{process.env.URL_ANALYTICS}/api/websites/{process.env.ID_ANALYTICS}/stats`)
// console.log(res)
//     // let { data } = res.data;
//     // console.log(data)
//     // this.setState({ users: data });
// };

// getUsers()
// useEffect(() => {
//     const body = document.documentElement;
//     body.setAttribute("data-theme", theme);
//   }, [theme]);
  return (
    <div className="h-72 bg-base-200">
      <div className="flex justify-center items-center">
        <div className="text-center w-3/5">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-info">
                <IoIosEye className="inline-block w-8 h-8 stroke-current" />
              </div>
              <div className="stat-title">View</div>
              <div className="stat-value text-info">0</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <FaUserAlt className="inline-block w-8 h-8 stroke-current" />
              </div>
              <div className="stat-title">Visitors</div>
              <div className="stat-value text-primary">0</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
