import React from 'react'
import RecentProducts from './RecentProducts'
import CategorySlider from './CategorySlider'
import MainSlider from './MainSlider'

export default function Home() {
  return (
    <>
    <MainSlider/>
    <CategorySlider/>
      <RecentProducts/>
    </>
  )
}
