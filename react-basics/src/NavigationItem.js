import React from 'react';
import { useState } from "react";

// subject list will be used as reusable items list
export function NavigationItem(props)
{
    let items = props.data;

    return (
        <div>
        <ol>
        {
            items.map((item) => {
            return <li>{item.name} - {item.url}</li>
            })
        }
        </ol>
  	  </div>
    );
}

/*
export function SubjectList(props){
    const subjectlist = props.list;
    const [subjects, setSubjects] = useState(subjectlist);
    
    function addSubject() 
    {
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(nval);
            return nval;
        });
    }

    return (
        <>
        <p>Show list: </p>
        <ol>
            {
            subjects.map((subject)=>{
                return <li>{subject.code} - {subject.desc}</li>
            })
            }
        </ol>
        <button onClick={addSubject}>Add Subject</button>
        </>
    );
}
*/
export default NavigationItem