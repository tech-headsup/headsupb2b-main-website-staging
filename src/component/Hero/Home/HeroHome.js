import CarouselSpacing from '@/component/Carousel/CarouselSpacing';

export default function HeroHome({ initialData }) {

  return (
    <div className='relative'>
      <div className=" ">
        <CarouselSpacing initialData={initialData} />
      </div>
    </div>
  )
}
