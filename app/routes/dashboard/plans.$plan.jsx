export async function loader({params}) {
  console.log(params)
  return null
}

function Index() {
  return (
    <div>Index</div>
  )
}

export default Index