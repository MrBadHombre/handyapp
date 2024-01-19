import { Button, buttonVariants } from './components/ui/button'

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './components/ui/carousel'

function App() {
  return (
    <>
      <Button>Click me</Button>

      <Carousel>
        <CarouselContent>
          <CarouselItem className='basis-1/3'>item 1</CarouselItem>
          <CarouselItem className='basis-1/3'>item 2</CarouselItem>
          <CarouselItem className='basis-1/3'>item 3</CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default App
