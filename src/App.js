import React,{useRef,useEffect,useState} from 'react';
import './style.css';

export default function App() {
  const arr=[1,2,3,4,5,6];
  const parentDivRef = useRef(null);
  const [ref,setRef]=useState(null);
  useEffect(()=>{
    const cir=document.getElementById('circle');
    if(parentDivRef.current){
      const width=parentDivRef.current.offsetWidth;
      const halfwidth=parseInt(width/2);
      setRef(halfwidth);
    }
  },[])
  return (
    <>
      <div id="circle" ref={parentDivRef}>
        <div className="rotate"></div>
        <div className="blur"></div>
       <div className="side"><span></span> <span></span></div>
       <div className="side"><span></span> <span></span></div>
       <div className="side"><span></span> <span></span></div>
       <div className="side"><span></span> <span></span></div>
       <div className="side"><span></span> <span></span></div>
       <div className="side"><span></span> <span></span></div>
      </div>
    </>
  );
}

const Divcomp=(para, reff)=>{
  return(
    <div classNmae='div2' style={{top:'20px'}}>

    </div>
  )
}
