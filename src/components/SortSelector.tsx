import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void
    selectedOrder:string
}

const SortSelector = ({onSelectSortOrder,selectedOrder}:Props) => {
  const sortOrder = [
    { value: " ", label: "Relevance" },
    { value: "name", label: "name" },
    { value: "-added", label: "Date" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularty" },
    { value: "-rating", label: "Rating" },
  ];

  const orderSorted = sortOrder.find(order=>order.value === selectedOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort by {orderSorted?.label}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={()=>onSelectSortOrder(order.value)} value={order.value} key={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
