// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/santhoshhegde")
  //     .then((Response) => Response.json())
  //     .then((data) => setData(data)),
  //     [];
  // });
  return (
    <div>
      Github: {data.followers}
      <img src={data.avatar_url} alt="Avatar" />
    </div>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/santhoshhegde");
  return response.json();
};
