import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title/index";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  return (
    <Wrapper>
      <Title>Emoloyees List</Title>
      <EmployeeCard
        name={employees[0].name}
        image={employees[0].image}
        occupation={employees[0].occupation}
        location={employees[0].location}
      />
      <EmployeeCard
        name={employees[1].name}
        image={employees[1].image}
        occupation={employees[1].occupation}
        location={employees[1].location}
      />
      <EmployeeCard
        name={employees[2].name}
        image={employees[2].image}
        occupation={employees[2].occupation}
        location={employees[2].location}
      />
    </Wrapper>
  );
}

export default App;
