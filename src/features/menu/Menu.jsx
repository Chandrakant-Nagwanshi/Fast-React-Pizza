import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
// @refresh reset
// always use loader at top level
export async function loader() {
  const menu = await getMenu();
  return { menu };
}
function Menu() {
  const { menu } = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2 ">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export default Menu;

// export async function loader() {
//   const menu = await getMenu(); // Assuming getMenu returns an array
//   return { menu };
// }

// export default Menu;
// ////////////////////////////
// import MenuItem from "./MenuItem";
// import { useEffect, useState } from "react";
// import { getMenu } from "../../services/apiRestaurant";

// function Menu() {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     async function fetchMenu() {
//       try {
//         const menuData = await getMenu();
//         setMenu(menuData);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//     }

//     fetchMenu();
//   }, []); // Empty dependency array to fetch data only once on component mount

//   return (
//     <ul>
//       {menu.map((pizza) => (
//         <MenuItem pizza={pizza} key={pizza.id} />
//       ))}
//     </ul>
//   );
// }

// export default Menu;
