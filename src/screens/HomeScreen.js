import Box from '../components/Box'

function HomeScreen() {
  return (
    <div className="container mx-auto">
      <div className="px-10 mx-10">
        <div><h1 className="text-4xl text-center my-10">Figma to HTML - Pixel perfect</h1></div>
        <div className="flex px-10 mx-10 flex-wrap">
          <Box bgColor={true} header={'Tralfagar virtual healthcare'} month={'JUN'} day={4} url={'Trafalgar'} />
          <Box bgColor={false} />
          <Box bgColor={true} />
        
          <Box bgColor={false} header={'Tralfagar virtual healthcare'} month={'JUN'} day={4} />
          <Box bgColor={true} />
          <Box bgColor={false} />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen