import React, { createContext, useReducer } from "react"
import { FlowChart } from "../flowChart/flowChart"
import "./appHolder.css"

export interface IData {
  id?: string
  label?: string
  value?: string
  calories?: {
    value: string
  }
  cost?: {
    value: string
  }
  protein?: {
    value: string
  }
  taste?: {
    value: string
  }
  position?: {
    x: number
    y: number
  }
}
export interface Elements {
  id: string
  type: string
  data?: IData
  animated: boolean
}

export interface IWeighting {
  value: string
  label: string
}
export interface IBestResult {
  value: string | number
  label: string
}
export interface IAppState {
  elements: Elements[]
  weighting: IWeighting[]
  bestResult: IBestResult[]
}
export const appState = {
  elements: [
    {
      id: "1",
      type: "productNode",
      data: {
        id: "1",
        label: "Lasagne",
        calories: {
          value: "100",
        },
        cost: {
          value: "200",
        },
        protein: {
          value: "200",
        },
        taste: {
          value: "200",
        },
      },
      position: {
        x: 200,
        y: 200,
      },
      animated: true,
    },
    {
      id: "2",
      type: "productNode",
      data: {
        id: "2",
        label: "Ham and Cheese Toastie",
        calories: {
          value: 32,
        },
        cost: {
          value: 200,
        },
        protein: {
          value: 200,
        },
        taste: {
          value: 200,
        },
      },
      position: {
        x: 440,
        y: 200,
      },
      animated: true,
    },
    {
      id: "3",
      type: "productNode",
      data: {
        label: "Fried Chicken",
        calories: {
          value: "220",
        },
        cost: {
          value: "200",
        },
        protein: {
          value: "200",
        },
        taste: {
          value: "200",
        },
      },
      position: {
        x: 695,
        y: 200,
      },
      animated: true,
    },
    {
      id: "4",
      type: "productNode",
      data: {
        label: "Quinoa Salad",
        calories: {
          value: "240",
        },
        cost: {
          value: "200",
        },
        protein: {
          value: "200",
        },
        taste: {
          value: "200",
        },
      },
      position: {
        x: 895,
        y: 200,
      },
      animated: true,
    },
    {
      id: "5",
      type: "attributeNode",
      data: {
        value: "1",
        label: "Calories",
      },
      position: {
        x: 290,
        y: 0,
      },
      animated: true,
    },
    {
      id: "6",
      type: "attributeNode",
      data: {
        value: "1",
        label: "Cost",
      },
      position: {
        x: 490,
        y: 0,
      },
      animated: true,
    },
    {
      id: "7",
      type: "attributeNode",
      data: {
        value: " 1",
        label: "Taste",
      },
      position: {
        x: 690,
        y: 0,
      },
      animated: true,
    },
    {
      id: "8",
      type: "attributeNode",
      data: {
        value: "1",
        label: "Protein",
      },
      position: {
        x: 890,
        y: 0,
      },
      animated: true,
    },
    {
      id: "9-best-result",
      type: "winnerNode",
      data: {
        value: "0",
        label: "",
      },
      position: {
        x: 560,
        y: 700,
      },
    },
    {
      source: "5",
      sourceHandle: "a",
      target: "1",
      targetHandle: "b",
      id: "reactflow__edge-5a-1b",
      type: "default",
    },
    {
      source: "5",
      sourceHandle: "a",
      target: "2",
      targetHandle: "b",
      id: "reactflow__edge-5a-2b",
      type: "default",
    },
    {
      source: "5",
      sourceHandle: "a",
      target: "3",
      targetHandle: "b",
      id: "reactflow__edge-5a-3b",
      type: "default",
    },
    {
      source: "5",
      sourceHandle: "a",
      target: "4",
      targetHandle: "b",
      id: "reactflow__edge-5a-4b",
      type: "default",
    },
    {
      source: "6",
      sourceHandle: "a",
      target: "1",
      targetHandle: "b",
      id: "reactflow__edge-6a-1b",
      type: "default",
    },
    {
      source: "6",
      sourceHandle: "a",
      target: "2",
      targetHandle: "b",
      id: "reactflow__edge-6a-2b",
      type: "default",
    },
    {
      source: "6",
      sourceHandle: "a",
      target: "3",
      targetHandle: "b",
      id: "reactflow__edge-6a-3b",
      type: "default",
    },
    {
      source: "6",
      sourceHandle: "a",
      target: "4",
      targetHandle: "b",
      id: "reactflow__edge-6a-4b",
      type: "default",
    },
    {
      source: "7",
      sourceHandle: "a",
      target: "1",
      targetHandle: "b",
      id: "reactflow__edge-7a-1b",
      type: "default",
    },
    {
      source: "7",
      sourceHandle: "a",
      target: "2",
      targetHandle: "b",
      id: "reactflow__edge-7a-2b",
      type: "default",
    },
    {
      source: "7",
      sourceHandle: "a",
      target: "3",
      targetHandle: "b",
      id: "reactflow__edge-7a-3b",
      type: "default",
    },
    {
      source: "7",
      sourceHandle: "a",
      target: "4",
      targetHandle: "b",
      id: "reactflow__edge-7a-4b",
      type: "default",
    },
    {
      source: "8",
      sourceHandle: "a",
      target: "1",
      targetHandle: "b",
      id: "reactflow__edge-8a-1b",
      type: "default",
    },
    {
      source: "8",
      sourceHandle: "a",
      target: "2",
      targetHandle: "b",
      id: "reactflow__edge-8a-2b",
      type: "default",
    },
    {
      source: "8",
      sourceHandle: "a",
      target: "3",
      targetHandle: "b",
      id: "reactflow__edge-8a-3b",
      type: "default",
    },
    {
      source: "8",
      sourceHandle: "a",
      target: "4",
      targetHandle: "b",
      id: "reactflow__edge-8a-4b",
      type: "default",
    },
    {
      id: "reactflow__edge-9-best-result-1a",
      source: "4",
      sourceHandle: "a",
      target: "9-best-result",
      targetHandle: "b",
      type: "default",
    },
    {
      id: "reactflow__edge-9-best-result-2a",
      source: "1",
      sourceHandle: "a",
      target: "9-best-result",
      targetHandle: "b",
      type: "default",
    },
    {
      id: "reactflow__edge-9-best-result-3a",
      source: "2",
      sourceHandle: "a",
      target: "9-best-result",
      targetHandle: "b",
      type: "default",
    },
    {
      id: "reactflow__edge-9-best-result-4a",
      source: "3",
      sourceHandle: "a",
      target: "9-best-result",
      targetHandle: "b",
      type: "default",
    },
  ],
  bestResult: [],
  weighting: [],
}

export enum AppAction {
  ADDRESULT = "ADDRESULT",
  ADDWEIGHTING = "ADDWEIGHTING",
}

interface ReducerActionApp {
  type: AppAction
  payload: {
    value: string
    label: string
  }
}

export function reducer(state: any, action: ReducerActionApp) {
  switch (action.type) {
    case AppAction.ADDRESULT:
      return bestResultCheck(state, action.payload)
    case AppAction.ADDWEIGHTING:
      return addWeighting(state, action.payload)
    default:
      return state
  }
}

const addWeighting = (state: IAppState, payload: { label: string; value: string }) => {
  return {
    ...state,
    weighting: [...state.weighting, payload]
      .filter((item) => {
        if (item.label === payload.label) {
          item.value = payload.value
          return item
        }
        return item
      })
      .reduce((unique: IWeighting[], o) => {
        if (!unique.some((obj: { label: string; value: string }) => obj.label === o.label && obj.value === o.value)) {
          unique.push(o)
        }
        return unique
      }, []),
  }
}

const bestResultCheck = (state: IAppState, payload: { value: string; label: string }) => {
  // Potentially could be optimized to remove two loops(filter and reduce)
  return {
    ...state,
    bestResult: [...state.bestResult, payload]
      .filter((item) => {
        if (item.label === payload.label) {
          item.value = payload.value
          return item
        }
        return item
      })
      .reduce((unique: IBestResult[], o) => {
        if (!unique.some((obj) => obj.label === o.label && obj.value === o.value)) {
          unique.push(o)
        }
        return unique
      }, []),
  }
}
export const AppContext = createContext(appState)
export const AppHolder = () => {
  const [state, dispatch] = useReducer(reducer, appState)
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <div className="app">
        <div>Decision Maker</div>
        <p>
          Every product has they own score based on attributes which are multiplied by Weighting of Calories,Cost, Taste
          and Protein{" "}
        </p>
        <FlowChart />
      </div>
    </AppContext.Provider>
  )
}
