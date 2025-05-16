import { useState } from "react";
import { Link } from "react-router-dom";
import { BsTable } from "react-icons/bs";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { IoAddCircleOutline, IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const [menu, setMenu] = useState(false)

  return (
    <aside>
      <div className={!menu ? "bg-cyan-950 h-dvh px-4 w-[70px] transition-all" : " bg-cyan-950 w-[200px] h-dvh transition-all px-4"}>
        <div className="pt-2 pb-5">
          <h3 className={menu ? "text-[25px] font-bold text-white" : "bg-green-700 text-white text-[20px] flex justify-center items-center rounded-full w-10 h-10 "}>{menu ? "CRM Panel" : "C"}</h3>
        </div>
        <div className="sidebar-menu">
          <div className={"sidebar-router" && menu ? "block space-y-4 text-white" : "flex justify-center items-center flex-col space-y-4 text-white"}>
            <Link className="flex items-center gap-2" to={"/newaddclient"}>
              <span className="inline text-[20px]">
                <IoAddCircleOutline />
              </span>
              {menu && "New add client"}
            </Link>
            <Link className="flex items-center gap-2" to={"/allclient"}>
              <span className="text-[20px]">
                <BsTable />
              </span>
              {menu && "All client"}
            </Link>
            <Link className="flex items-center gap-2" to={"/"}>
              <span className="text-[20px]">
                <FiLogOut />
              </span>
              {menu && "Logout"}
            </Link>
            <Link className="flex items-center gap-2" to={"/settings"}>
              <span className="text-[20px]">
                <IoSettingsOutline />
              </span>
              {menu && "Settings"}
            </Link>
            <div className="sidebar-mobile-menu">
              <button className="cursor-pointer bg-green-700 text-white rounded-lg p-3 text-[25px]" onClick={() => setMenu(!menu)}><FiMenu /></button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
