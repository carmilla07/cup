import { StaticImageData } from 'next/image'
import image1 from 'public/slider/NU_Homecoming.png'
import image2 from 'public/slider/NU_Homecoming.png'
import image3 from 'public/slider/NU_Homecoming.png'
import image4 from 'public/slider/NU_Homecoming.png'

export const images: StaticImageData[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex
