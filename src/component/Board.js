import React, { useEffect, useRef, useState } from 'react'
import './Board.css'
import circle from './assets/circle.png'
import cross from './assets/cross.png'
import toe from './assets/toe.png'

let data=["","","","","","","","",""];
export default function Board() {

    

    let[count,setcount]=useState(0);
    let[win,setwin]=useState(false);
    let[win1,setwin1]=useState(false);
    let[lock,setlock]=useState(false);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box1 = useRef(null);
    let boxar=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
    

    function Toggle1(e,num){

        if(lock){
            return 0;
        }

       
        if(count%2==0){
            e.target.innerHTML='<img src=' +  cross + ' width="50px" height="50px" className="Cross1" />';
            data[num]="x";
            setcount(++count);
        }
        else{
            e.target.innerHTML='<img src=' +  circle + ' width="50px" height="50px" className="Cross1" />';
            data[num]="o";
            setcount(++count);
        }

Check();
    }

function Check(){
    if(data[0]===data[1] && data[1]===data[2] && data[0]!=""){
        Won(data[0]);
    }

    if(data[3]===data[4] && data[4]===data[5] && data[3]!=""){
        Won(data[3]);
    }

    if(data[6]===data[7] && data[7]===data[8] && data[6]!=""){
        Won(data[6]);
    }

    if(data[0]===data[4] && data[4]===data[8] && data[0]!=""){
        Won(data[0]);
    }
    if(data[2]===data[4] && data[4]===data[6] && data[2]!=""){
        Won(data[2]);
    }
    if(data[0]===data[3] && data[3]===data[6] && data[0]!=""){
        Won(data[0]);
    }
    if(data[1]===data[4] && data[4]===data[7] && data[1]!=""){
        Won(data[1]);
    }
    if(data[2]===data[5] && data[5]===data[8] && data[8]!=""){
        Won(data[8]);
    }
    
    
    
}

function Won(winner){
    setlock(true);
    if(winner==="x"){
       setwin(true);
     
    }
    if(winner==="o"){
        setwin1(true);
     }

}

function reset(){
    setlock(false);
    data=["","","","","","","","",""];
    box1.current.innerHTML="";
    box2.current.innerHTML="";
    box3.current.innerHTML="";
    box4.current.innerHTML="";
    box5.current.innerHTML="";
    box6.current.innerHTML="";
    box7.current.innerHTML="";
    box8.current.innerHTML="";
    box9.current.innerHTML="";
    setwin(false);
    setwin1(false);
}

  return (
    <div className='Total'><h1 className='Tictac'>TIC TAC TOE Game</h1>
<div className='Tic'>

<div className='Row1'>
<div className='Boxes1'  ref={box1}  onClick={(e)=>{Toggle1(e,0)}}></div>
<div className='Boxes1'  ref={box2} onClick={(e)=>{Toggle1(e,1)}}></div>
<div className='Boxes1'  ref={box3} onClick={(e)=>{Toggle1(e,2)}}></div>
</div>

<div className='Row2'>
<div className='Boxes2' ref={box4} onClick={(e)=>{Toggle1(e,3)}}></div>
<div className='Boxes2' ref={box5} onClick={(e)=>{Toggle1(e,4)}}></div>
<div className='Boxes2' ref={box6} onClick={(e)=>{Toggle1(e,5)}}></div>
</div>

<div className='Row3'>
<div className='Boxes3'  ref={box7} onClick={(e)=>{Toggle1(e,6)}}></div>
<div className='Boxes3' ref={box8}  onClick={(e)=>{Toggle1(e,7)}}></div>
<div className='Boxes3' ref={box9}  onClick={(e)=>{Toggle1(e,8)}}></div>
</div>


</div>

<img src={toe}  className='Toe'/>

{win &&<h1 className='result'> congrulations <img src={cross}/> wins
    </h1>}

    {win1 &&<h1 className='result'> congrulations <img src={circle}/> wins
        </h1>}

<button  className='Reset' onClick={(e)=>{reset()} }><h1 className='hreset'>reset</h1></button>

    </div>
  )
}
