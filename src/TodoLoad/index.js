import React from "react"
import ContentLoader from "react-content-loader"
import './TodoLoad.css'

const TodoLoad = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={40}
    viewBox="0 0 280 40"
    backgroundColor="#3d087b"
    foregroundColor="#f43bea"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
)

export { TodoLoad }