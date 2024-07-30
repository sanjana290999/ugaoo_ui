import { useState } from "react";

function NavComponent({ element }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <p
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-pointer p-2 hover:bg-gray-200 transition"
      >
        {element.name}
      </p>
      <div
        className={`absolute top-full left-0 bg-slate-100 border rounded-lg w-48 p-2 shadow-sm transition-transform transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDuration: "0.3s" }}
      >
        <ul className="space-y-2">
          {element.data &&
            element.data.map((item, index) => (
              <li
                key={index}
                className="p-2 text-green-800 font-medium hover:bg-green-100 rounded-md transition"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default NavComponent;
