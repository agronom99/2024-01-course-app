import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2023, 2, 12),
    description: "Холодильник",
    amount: 999,
  },
  {
    id:'c2',
    date: new Date(2023, 11, 25),
    description: "MacBook",
    amount: 1254,
  },
  {
    id:'c3',
    date: new Date(2024, 1, 12),
    description: "Джинси",
    amount: 49,
  },
  {
    id:'c4',
    date: new Date(2022, 5, 17),
    description: "Ліхтар",
    amount: 149,
  },
  {
    id:'c5',
    date: new Date(2022, 9, 27),
    description: "Дисплей",
    amount: 249,
  },
];

function App() {

const [costs, setCosts]= useState(INITIAL_COSTS)

const addCostHandler = (cost) =>{
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  });
}
  
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
