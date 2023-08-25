import { Hero } from '@/components'
import { Slider } from '@/components'
import { SliderData } from '../data/SliderData';

export default function Home() {
  return (
   <div>
     <Hero heading="Capture Photography" message="I capture the moments in nature and keep them alive."/>
     <Slider sliders={SliderData}/>
   </div>
  )
}
