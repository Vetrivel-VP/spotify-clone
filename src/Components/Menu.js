import React from "react";
import "../styles/LeftMenu.css";

function Menu({ title, listObject }) {
  return (
    <div className="menuContainer">
      <p>{title}</p>

      <ul>
        {listObject &&
          listObject.map((li) => (
            <li key={li.id}>
              <a href="#">
                <i>{li.icon}</i>
                <span> {li.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
