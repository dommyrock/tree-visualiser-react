import React, { useState, createRef,useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Nodes, Node } from './Nodes'
// import CalculatedTree from './CalculatedTree'

export default function App() {
  const refs = useState(() => [...Array(5)].map(createRef))[0]
  const [final, setFinal] = useState(null)

  useEffect(() => {
    function isOdd(num) {
      return num % 2
    }
    function calcNodePositions() {
      let arr = [];
      for (let i = 0; i < refs.length; i++) {
        const element = refs[i]
        const x = 2
        const y = 2
        let pos = i===0 ? [0,6,0] :isOdd(i) ? [x, y, 0] : [x, y, 0]
        let node={value:element,position:pos}
        arr.push(node)
      }
      console.log('nodes added',arr);
      setFinal(arr)
    }
    calcNodePositions()
    console.log('final state',final);
  }, [])
  return (
    //TODO: make component that returns inputed number or nodes instead of hardcoding bellow
    //also problem is passing refs to childer
<>
{final !==null && <Canvas orthographic camera={{ zoom: 50 }} dpr={[1, 2]}>
  <Nodes dashed color="#3FBF8A" lineWidth={1} dashSize={0.2} gapSize={0.1}>
    {/* {final.map((node,index) => {
      return <Node ref={node[index]} key={index} name='1'position={node.position}/>})} */}
      <Node ref={refs[0]} key={0} name='1'position={final[0].position} connectedTo={[refs[3], refs[2]]}/>
      <Node ref={refs[2]} name="b" position={[0, 0, 0]} />
      <Node ref={refs[3]} name="d" position={[2, 0.5, 0]} />
      <Node ref={refs[4]} name="e" position={[-0.5, -1, 0]}  connectedTo={[refs[0]]} /> 
  </Nodes>
  {/* <CalculatedTree {...final}/> this will replace above hardcoded */}
</Canvas>}
</>
  )
}
//original nodes

/* <Node ref={refs[0]} name="a" position={final[0].position} connectedTo={[refs[1], refs[2], refs[4]]} />
<Node ref={refs[1]} name="c" position={[-0.25, 0, 0]} />
<Node ref={refs[2]} name="b" position={[0, 0, 0]} connectedTo={[refs[3], refs[0]]} />
<Node ref={refs[3]} name="d" position={[2, 0.5, 0]} />
<Node ref={refs[4]} name="e" position={[-0.5, -1, 0]} /> */