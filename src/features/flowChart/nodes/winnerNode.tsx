import React, { memo } from "react"
import { Handle, Position } from "react-flow-renderer"
import "./nodes.css"

export const WinnerNode = memo(({ data, isConnectable }: { data: { label: string }; isConnectable: boolean }) => {
  return (
    <div className="node winner-node">
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        style={{ top: -10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <h4>Winner</h4>
      <h5>{data.label}</h5>
    </div>
  )
})
