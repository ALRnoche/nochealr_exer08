export default function WrongCounter()
{
    let val = 0;
    return (
        <>
            <h1>Counter: {val}</h1>
            <button onClick={()=>
            {
                val = val + 1;
                alert("Added! "+val);
            }}>Add</button>
        </>
    );
}