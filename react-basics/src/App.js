import React from 'react';
import TempConverter from './TempConverter';
import SubjectList from "./SubjectList";
import Counter from "./Counter";
import WrongCounter from "./WrongCounter";

function App() {
  return (
    <div>
      <div>Hello World
        {/* <SubjectList/> */}
        <SubjectList data={CMSCSubjects} title={'Computer Science Subjects'}/>
        <SubjectList data={CHEMSubjects} title={'Chemistry Subjects'}/>
        <Counter val={10}/>
        <WrongCounter val={10}/>
      </div>
      <div>Hello again!
      <TempConverter/>
      </div>
    </div>
  );
}

export default App;

const CMSCSubjects = 
[
  { code: "CMSC100", description: "Web Programming", id: 1 },
  { code: "CMSC150", description: "Scientific Computation", id: 2 },
  { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
];

const CHEMSubjects = 
[
  { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
  { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
  { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
];