import React, { useCallback, useEffect } from "react"
import ReactFlow, { addEdge, FlowElement, removeElements } from "react-flow-renderer"
import { AppContext, Elements, IBestResult } from "../appHolder/appHolder"
import "./flowChart.css"
import { AttributeNode } from "./nodes/attributeNode"
import { ProductNode } from "./nodes/productNode"
import { WinnerNode } from "./nodes/winnerNode"

const nodeTypes = {
  attributeNode: AttributeNode,
  productNode: ProductNode,
  winnerNode: WinnerNode,
}

export const FlowChart = () => {
  const [elements, setElements] = React.useState<any>([])
  const [reactflowInstance, setReactflowInstance] = React.useState<any>(null)
  const state = React.useContext(AppContext)

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView()
    }
  }, [reactflowInstance, elements.length])

  const onLoad = useCallback(
    (rfi: any) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi)
      }
    },
    [reactflowInstance]
  )

  useEffect(() => {
    setElements(state.elements)
  }, [state.elements])

  useEffect(() => {
    setElements((els: Elements[]) => {
      const newElements = els.map((el) => {
        if (el.id === "9-best-result") {
          return {
            ...el,
            data: {
              label: state.bestResult.reduce(
                (acc: { value: number | string; label: string }, cum: IBestResult) => {
                  if (acc.value < cum.value) {
                    acc.value = cum.value
                    acc.label = cum.label
                  }
                  return acc
                },
                { label: "", value: 0 }
              ).label,
              value: state.bestResult.reduce(
                (acc: { value: number | string; label: string }, cum: IBestResult) => {
                  if (acc.value < cum.value) {
                    acc.value = cum.value
                    acc.label = cum.label
                  }
                  return acc
                },
                { label: "", value: 0 }
              ).value,
            },
          }
        }
        return el
      })
      return [...newElements]
    })
  }, [state.bestResult])

  const onElementsRemove = useCallback(
    (elementsToRemove) => setElements((els: FlowElement[]) => removeElements(elementsToRemove, els)),
    []
  )
  const onConnect = (params: any) => setElements((els: FlowElement[]) => addEdge(params, els))

  return (
    <div className="flowchart-container">
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onLoad={onLoad}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
      ></ReactFlow>
    </div>
  )
}
