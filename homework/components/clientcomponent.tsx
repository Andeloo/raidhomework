'use client'
import { Fruit } from '@prisma/client';
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useRef, useState } from 'react';
import FruitsDropDown from './fruitdropdown';

function CalculateCostButton( {fruits}:{fruits: Fruit[]}, {Quantity}:{Quantity:number} ) {

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Fruit"]));
    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    ); 

    const [costText, setCostText] = useState('0.0');   
    const [quantity, setQuantity] = useState(0);
    const [productCost, setProductCost] = useState('0');   

    const updateQuantity = (event: { target: { value: any; }; }) => {
        setQuantity(event.target.value);
      };
      
    const handleCost = () => { 
        setProductCost(fruits.find(x=>x.name == selectedValue)?.price); 
    };
    
    const handleClick = () => { 
        
        setProductCost(fruits.find(x=>x.name == selectedValue)?.price); 
        //console.log("price " + fruits.find(x=>x.name == selectedValue)?.price); 
        setCostText((fruits.find(x=>x.name == selectedValue)?.price * quantity));
        //console.log("tri " + selectedValue) 
    };

    return (
        <div className="flex flex-col items-center space-x-24">
            <div className="flex flex-rol items-center space-x-24">
                <div>
                    <h1 className="text-3xl font-bold">Product Name</h1>
                    <h1 className="text-2x p-4 rounder-xl border-4 bg-white" onChange={handleCost}>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                            variant="bordered" 
                            className="capitalize"
                            onClick={handleCost}
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
                    </h1>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Product Cost</h1>
                    <h1 className="text-2xl" id='costId'>${productCost}</h1>   
                </div> 
                <div>
                    <h1 className="text-3xl font-bold">Quantity</h1>
                    <input id="quantity" onChange={updateQuantity} type="number" className="text-2x p-4 rounder-xl border-2" placeholder='Quantity'></input>
                </div> 
            </div>
            <div className="flex flex-rol items-center space-x-24" style={{paddingTop: "150px"}}>
                <h1 className="text-2xl">Total Cost : </h1>  
                <h1 className="text-2xl" id='costId'>${costText}</h1>  
                <div className="text-2xl p-4 rounder-xl border-4 ">
                    <button className='border bg-blue-500 round-md w-48' onClick={handleClick}>Calculate Price</button> 
                </div>
            </div>
        </div> 
        
    )
}

export default CalculateCostButton