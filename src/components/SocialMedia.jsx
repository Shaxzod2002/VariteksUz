import React, { useEffect, useState } from "react";
import { Axios } from "../Api/Axios";

export default function Socialmedia({ size }) {
  const [socialmedia, setSocialmedia] = useState([]);
  useEffect(() => {
    const getSocialmedia = async (url) => {
      setSocialmedia(await (await Axios.get(url)).data);
    };
    getSocialmedia("socialmedia/");
  });
  if (!socialmedia) return null;
  return (
    <div className="flex gap-3">
      {socialmedia.map((item) => (
        <a href={item.link} key={item.id}>
          <img src={item.icon} className={`w-[${size}px]`} alt={item.name} />
        </a>
      ))}
    </div>
  );
}
