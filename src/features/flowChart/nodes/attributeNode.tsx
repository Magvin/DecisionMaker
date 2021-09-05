import React, { memo, useContext, useEffect } from "react"

import { Handle, Position } from "react-flow-renderer"
import { AppAction, AppContext, IData } from "../../appHolder/appHolder"
import "./nodes.css"

export const AttributeNode = memo(({ data, isConnectable }: { data: IData; isConnectable: boolean }) => {
  const [weighting, setWeighting] = React.useState<string>(data.value || "1")
  const { dispatch }: any = useContext(AppContext)

  useEffect(() => {
    dispatch({ type: AppAction.ADDWEIGHTING, payload: { value: "1", label: data.label } })
  }, [data.label, dispatch])

  const addWeighting = React.useCallback(
    (value: string) => {
      setWeighting(value)
      dispatch({ type: AppAction.ADDWEIGHTING, payload: { value, label: data.label } })
    },
    [data.label, dispatch]
  )

  return (
    <div className="node">
      <div>{data.label}</div>
      <div>
        <p>Weighting: {weighting}</p>
        <input
          className="nodrag"
          type="range"
          onChange={(event) => addWeighting(event.target.value)}
          defaultValue={data.value}
          max="1"
          step="0.1"
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ bottom: -10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  )
})
