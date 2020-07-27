import React from 'react'
import Layout from '../../layouts'

const Featured = () => {
  console.log('Child Featured Rendered')
  const [input, setInput] = React.useState('')

  const handleInput = (val) => {
    setInput(val)
  }
  return (
    <Layout>
      <div>
        <input placeholder="Input" value={input} onChange={(e) => handleInput(e.target.value)} />
      </div>
    </Layout>
  )
}

export default Featured
