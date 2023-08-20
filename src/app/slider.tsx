'use client'

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'

export function Slider() {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    return ( <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    )
}