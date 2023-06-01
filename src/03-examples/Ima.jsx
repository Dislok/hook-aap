import { useLayoutEffect, useRef, useState } from "react"


export const Ima = ({image, name}) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width:0, heigth:0})

  useLayoutEffect(() => {
    const {height, width}= pRef.current.getBoundingClientRect();
    setBoxSize({height, width})
    
  }, [name])
  return (
    <>
    <blockquote className="blockquote text-end"
    style={{ display: "flex"}}
    >
    <p ref={pRef} className="mb-1"> </p>
    <img src={image}  />
    <footer ref={pRef} className="blockquote-footer mt-3"> {name}</footer>
    </blockquote>
    <code>{ JSON.stringify(boxSize)}</code>
    </>
  )
}