/** @format */

"use client";

import { useState } from "react";
import { ChevronDown, Minus, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Counter = ({ type, count, onIncrement, onDecrement }) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex flex-col">
      <span className="text-sm font-medium">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <span className="text-xs text-muted-foreground">
        {type === "adults"
          ? "13+ years"
          : type === "children"
          ? "2-12 years"
          : "0-2 years"}
      </span>
    </div>
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrement}
        disabled={count === 0}
        aria-label={`Decrease ${type} count`}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center">{count}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrement}
        aria-label={`Increase ${type} count`}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export default function PassengerDropdown({ className }) {
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleIncrement = (type) => {
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => {
    setCounts((prev) => ({ ...prev, [type]: Math.max(0, prev[type] - 1) }));
  };

  const totalTravelers = counts.adults + counts.children + counts.infants;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={className + " " + "justify-between "}
        >
          <div className="flex items-center">
            <Users className=" mr-2 h-4" />
            <span>
              {totalTravelers} Traveler{totalTravelers !== 1 ? "s" : ""}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[280px] p-4">
        <Counter
          type="adults"
          count={counts.adults}
          onIncrement={() => handleIncrement("adults")}
          onDecrement={() => handleDecrement("adults")}
        />
        <Counter
          type="children"
          count={counts.children}
          onIncrement={() => handleIncrement("children")}
          onDecrement={() => handleDecrement("children")}
        />
        <Counter
          type="infants"
          count={counts.infants}
          onIncrement={() => handleIncrement("infants")}
          onDecrement={() => handleDecrement("infants")}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
