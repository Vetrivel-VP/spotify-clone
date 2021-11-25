import React, { useEffect } from "react";
import "../styles/LeftMenu.css";

function Menu({ title, listObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

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
