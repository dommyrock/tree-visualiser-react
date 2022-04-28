import { createRef, useEffect, useState } from 'react'
import  {Node,Nodes } from './Nodes'

export default function CalculatedTree({nodeCount}) {
    console.log('nodecount',nodeCount);
    const refs = useState(() => [...Array(nodeCount)].map(createRef))[0]
    const [final, setFinal] = useState(null)
  
    useEffect(() => {
      function isOdd(num) {
        return num % 2
      }
      function calcNodePositions() {
        console.log('log 1 ,refs.length =', refs.length);
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
  
    }, [])
    return (
        // <h1>ok</h1>
        <Nodes dashed color="#3FBF8A" lineWidth={1} dashSize={0.2} gapSize={0.1}>
        <Node ref={refs[0]} name="a" position={final[0].position} connectedTo={[refs[1], refs[2], refs[4]]} />
        <Node ref={refs[1]} name="c" position={[-0.25, 0, 0]} />
        <Node ref={refs[2]} name="b" position={[0, 0, 0]} connectedTo={[refs[3], refs[0]]} />
        <Node ref={refs[3]} name="d" position={[2, 0.5, 0]} />
        <Node ref={refs[4]} name="e" position={[-0.5, -1, 0]} />
      </Nodes>
    )
}

