import { useState } from "react";

function NavComponent({ element }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <p onMouseEnter={() => setVisible(!visible)}>{element.name}</p>
      <div
        className={` bg-slate-100 border rounded-lg   absolute top-28 w-[13%] p-2 shadow-sm ${
          visible ? "" : "hidden"
        }  `}
      >
        <ul className="">
          {element.data.map((element) => (
            <li className="p-2 text-green-800 font-medium">{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavComponent;
