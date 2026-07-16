import { HiOutlineMusicalNote } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import { TiCodeOutline } from "react-icons/ti";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { HiMusicalNote } from "react-icons/hi2";
import { TiCode } from "react-icons/ti";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
// import { LuIndianRupee } from "react-icons/lu";

const categories = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome style={{ height: "22px", width: "30px" }} />,
    active: <AiFillHome style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 2,
    name: "Web developer",
    icon: <TiCodeOutline style={{ height: "22px", width: "30px" }} />,
    active: <TiCode style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 3,
    name: "poetry",
    icon: <HiOutlineMusicalNote style={{ height: "22px", width: "30px" }} />,
    active: <HiMusicalNote style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 4,
    name: "Stand Up Comedy",
    icon: <BsEmojiLaughing style={{ height: "22px", width: "30px" }} />,
    active: (
      <BsFillEmojiLaughingFill style={{ height: "22px", width: "30px" }} />
    ),
  },
  {
    id: 5,
    name: "Investing",
    icon: <FaRupeeSign style={{ height: "22px", width: "30px" }} />,
    active: <FaRupeeSign style={{ height: "22px", width: "30px" }} />,
  }
];
export default categories;
