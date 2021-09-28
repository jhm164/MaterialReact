import React from 'react';

function Comp1(){
    return (<div>
        <h1>Comp1</h1>
    </div>)
}


const  Comp2=(props)=>{
    console.log(props)
    return (<div>
        
        <h1>Todays Motivation {(props&&props.value)?props.value:""}</h1>
    </div>)
}

// export default Comp1;
export default Comp2;