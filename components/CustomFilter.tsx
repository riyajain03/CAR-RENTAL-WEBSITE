import React from 'react'

const CustomFilter = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default CustomFilter
