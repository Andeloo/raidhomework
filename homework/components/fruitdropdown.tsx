'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Fruit } from "@prisma/client";

export default function FruitsDropDown( {fruits}:{fruits: Fruit[]} ) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Fruit"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  ); 

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      > 
      {fruits.map((fruit) => (
        <DropdownItem key={fruit.name}>{fruit.name}</DropdownItem> 
      ))}
      </DropdownMenu>
    </Dropdown>
  );
}
