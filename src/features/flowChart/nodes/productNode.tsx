import React, { memo, useEffect, useContext } from "react"

import { Handle, Position } from "react-flow-renderer"
import { AppAction, AppContext, IData } from "../../appHolder/appHolder"
import "./nodes.css"

export const ProductNode = memo(({ data, isConnectable }: { data: IData; isConnectable: boolean }) => {
  const [calories, setCalories] = React.useState<string>(data.calories?.value || "0")
  const [cost, setCost] = React.useState<string>(data.cost?.value || "0")
  const [protein, setProtein] = React.useState<string>(data.protein?.value || "0")
  const [taste, setTaste] = React.useState<string>(data.taste?.value || "0")
  const [totalValue, setValue] = React.useState<number>(0)

  const { dispatch, weighting }: any = useContext(AppContext)

  useEffect(() => {
    if (weighting) {
      const value = weighting.reduce((acc: any, cur: any) => {
        if (cur.label.toLowerCase() === "calories") {
          acc += parseFloat(calories) * parseFloat(cur.value)
        }
        if (cur.label.toLowerCase() === "cost") {
          acc += parseFloat(cost) * parseFloat(cur.value)
        }
        if (cur.label.toLowerCase() === "protein") {
          acc += parseFloat(protein) * parseFloat(cur.value)
        }
        if (cur.label.toLowerCase() === "taste") {
          acc += parseFloat(taste) * parseFloat(cur.value)
        }
        return acc
      }, 0)
      setValue(value)
      dispatch({ type: AppAction.ADDRESULT, payload: { value: value, label: data.label } })
    }
  }, [weighting, cost, protein, taste, calories, data.label, dispatch])
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="b"
        style={{ top: -10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <div className="node">
        <div>{data.label}</div>
        <div>
          <p>Calories: {calories}</p>
          <input
            className="nodrag"
            type="range"
            onChange={(event) => setCalories(event.target.value)}
            defaultValue={data.calories?.value || 0}
            max="1000"
            step="1"
          />
        </div>
        <div>
          <p>Cost: {cost}</p>
          <input
            className="nodrag"
            type="range"
            onChange={(event) => setCost(event.target.value)}
            defaultValue={data.cost?.value || 0}
            max="100"
            step="1"
          />
        </div>
        <div>
          <p>Protein: {protein}</p>
          <input
            className="nodrag"
            type="range"
            onChange={(event) => setProtein(event.target.value)}
            defaultValue={data.protein?.value || 0}
            max="300"
            step="1"
          />
        </div>
        <div>
          <p>Taste: {taste}</p>
          <input
            className="nodrag"
            type="range"
            id={data.id}
            onChange={(event) => setTaste(event.target.value)}
            defaultValue={data.taste?.value || 0}
            max="100"
            step="1"
          />
        </div>
        <div>
          <h3>Result: {totalValue}</h3>
        </div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={{ bottom: -10, top: "auto", background: "#555" }}
          isConnectable={isConnectable}
        />
      </div>
    </>
  )
})
