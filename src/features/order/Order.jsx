// // Test ID: IIDSAT

// import { useFetcher, useLoaderData } from "react-router-dom";
// import { getOrder } from "../../services/apiRestaurant";
// import {
//   calcMinutesLeft,
//   formatCurrency,
//   formatDate,
// } from "../../utils/helpers";
// import OrderItem from "./OrderItem";
// import { useEffect } from "react";

// export async function loader({ params }) {
//   const order = await getOrder(params.orderid);
//   return order;
// }
// function Order() {
//   const order = useLoaderData();
//   const fetcher = useFetcher();

//   useEffect(
//     function () {
//       if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
//     },
//     [fetcher],
//   );
//   // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
//   const {
//     id,
//     status,
//     priority,
//     priorityPrice,
//     orderPrice,
//     estimatedDelivery,
//     cart,
//   } = order;
//   const deliveryIn = calcMinutesLeft(estimatedDelivery);

//   return (
//     <div className="space-y-8 px-4 py-3">
//       <div className="flex flex-wrap items-center justify-between gap-2">
//         <h2 className="text-xl font-semibold ">Order # {id}Status</h2>

//         <div className="space-x-2">
//           {priority && (
//             <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
//               Priority
//             </span>
//           )}
//           <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
//             {status} order
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
//         <p className="font-medium">
//           {deliveryIn >= 0
//             ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
//             : "Order should have arrived"}
//         </p>
//         <p className="text-sm text-stone-500">
//           (Estimated delivery: {formatDate(estimatedDelivery)})
//         </p>
//       </div>

//       <ul className="divide-y divide-stone-200 border-b border-t">
//         {cart.map((item) => (
//           <OrderItem
//             item={item}
//             key={item.pizzaId}
//             ingredients={
//               fetcher?.data?.find((el) => el.id === item.pizzaId)
//                 ?.ingredients ?? []
//             }
//             isLoadingIngredients={fetcher.state === "loading"}
//           />
//         ))}
//       </ul>

//       <div className="space-y-2 bg-stone-200 px-6 py-5">
//         <p className="text-sm font-bold text-stone-600">
//           Price pizza: {formatCurrency(orderPrice)}
//         </p>
//         {priority && (
//           <p className="text-sm font-bold text-stone-600">
//             Price priority: {formatCurrency(priorityPrice)}
//           </p>
//         )}
//         <p className="font-semibold">
//           To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Order;
// Test ID: IIDSAT

// import { useFetcher, useLoaderData } from "react-router-dom";
// import { getOrder } from "../../services/apiRestaurant";
// import {
//   calcMinutesLeft,
//   formatCurrency,
//   formatDate,
// } from "../../utils/helpers";
// import OrderItem from "./OrderItem";
// import { useEffect } from "react";

// export async function loader({ params }) {
//   const order = await getOrder(params.orderid);
//   return order;
// }

// function Order() {
//   const order = useLoaderData();
//   const fetcher = useFetcher();
//   console.log(fetcher.data);

//   useEffect(() => {
//     if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
//   }, [fetcher]);
//   // Destructuring order object

//   const {
//     id,
//     status,
//     priority,
//     priorityPrice,
//     orderPrice,
//     estimatedDelivery,
//     cart,
//   } = order;

//   // Calculating delivery time
//   const deliveryIn = calcMinutesLeft(estimatedDelivery);

//   return (
//     <div className="space-y-8 px-4 py-3">
//       <div className="flex flex-wrap items-center justify-between gap-2">
//         <h2 className="text-xl font-semibold">Order # {id} - Status</h2>

//         <div className="space-x-2">
//           {priority && (
//             <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
//               Priority
//             </span>
//           )}
//           <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
//             {status} order
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
//         <p className="font-medium">
//           {deliveryIn >= 0
//             ? `Only ${deliveryIn} minutes left 😃`
//             : "Order should have arrived"}
//         </p>
//         <p className="text-sm text-stone-500">
//           (Estimated delivery: {formatDate(estimatedDelivery)})
//         </p>
//       </div>

//       <ul className="divide-y divide-stone-200 border-b border-t">
//         {cart.map((item) => (
//           <OrderItem
//             item={item}
//             key={item.pizzaId}
//             isLoadingIngredients={fetcher.state === "loading"}
//             ingredients={
//               Array.isArray(fetcher.data)
//                 ? fetcher.data.find((el) => el.id === item.pizzaId)?.ingredients
//                 : []
//             }
//             // ingredients={ingredients}
//           />
//         ))}
//       </ul>

//       <div className="space-y-2 bg-stone-200 px-6 py-5">
//         <p className="text-sm font-bold text-stone-600">
//           Price of pizza: {formatCurrency(orderPrice)}
//         </p>
//         {priority && (
//           <p className="text-sm font-bold text-stone-600">
//             Price of priority: {formatCurrency(priorityPrice)}
//           </p>
//         )}
//         <p className="font-semibold">
//           To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Order;
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect, useState } from "react";
import UpdateOrder from "./UpdateOrder";

export async function loader({ params }) {
  const order = await getOrder(params.orderid);
  return order;
}

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    if (fetcher.data) setMenu(fetcher.data.menu);
  }, [fetcher]);

  // Destructuring order object
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  // Calculating delivery time
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order # {id} - Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => {
          const menuItem = menu.find((el) => el.id === item.pizzaId);
          const ingredients = menuItem ? menuItem.ingredients : [];
          return (
            <OrderItem
              item={item}
              key={item.pizzaId}
              ingredients={ingredients}
              isLoadingIngredients={fetcher.state === "loading"}
            />
          );
        })}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-bold text-stone-600">
          Price of pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-bold text-stone-600">
            Price of priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export default Order;
