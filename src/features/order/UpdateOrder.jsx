import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

export async function action({ params }) {
  const data = { priority: true };

  await updateOrder(params.orderid, data);
  return null;
}
/* eslint-disable no-unused-vars */
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Add Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
