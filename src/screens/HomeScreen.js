import Box from '../components/Box'

function HomeScreen () {
  const bgPurple = '#544bab'
  const bgGray = '#ececee'
  return (
    <div className="px-10 mx-10">
      <div className="flex px-10 mx-10">
        <Box bgColor={bgPurple} header={'Tralfagar virtual healthcare'} month={'JUN'} day={4} />
        <Box bgColor={bgGray} />
        <Box bgColor={bgPurple} />
      </div>
    </div>
  )
}


export default HomeScreen