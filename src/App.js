import { useState } from "react";
import { BsArrowLeftShort, BsSearch , BsChevronDown, BsFillImageFill, BsReverseLayoutSidebarInsetReverse, BsPerson } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
function App() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setsubMenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" ,icon : <AiOutlineFileText/>},
    { title: "Media", spacing: true , icon : <BsFillImageFill/> },
    {
      title: "Projects",
      icon : <BsReverseLayoutSidebarInsetReverse/>,
      submenu: true,
      submenuItems: [
        { title: "submenu 1" },
        { title: "submenu 2" },
        { title: "submenu 3" },
      ],
    },
    { title: "Analytics" , icon : <AiOutlineBarChart/> },
    { title: "Inbox" , icon : <AiOutlineMail/> },
    { title: "Profile", spacing: true , icon : <BsPerson/> },
    { title: "Setting" , icon : <AiOutlineSetting/> },
    { title: "Logout" , icon : <AiOutlineLogout/> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-3 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300  ${
              !open && "scale-0"
            }`}
          >
            tailwind
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-4 ${
            open ? "px-4" : "px-3"
          } py-3`}
        >
          <BsSearch className="text-white text-lg block float-left cursor-pointer" />
          <input
            type="search"
            className={`text-base bg-transparent ml-2 w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="">
          {Menus.map((menu , index)=> {
             return (
              <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                {menu.icon ? menu.icon :  <RiDashboardFill/>}
                  </span>
               <span className={`text-base font-medium duration-200 flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
               {menu.submenu && open && (
                <BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() => {
                  setsubMenuOpen(!subMenuOpen)
                }}/>
               )}
              </li>
             {menu.submenu && subMenuOpen && open && (
             <ul>
               {menu.submenuItems.map((submenuItem , index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md mt-2">
                  {submenuItem.title}
                </li>
               ))}
             </ul>
             )}
              </>
             )
          })}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
}

export default App;
