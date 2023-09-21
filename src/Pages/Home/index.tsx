import React from 'react'
import { HeroVideo } from '../../Components/Heros/HeroVideo'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div>
      <HeroVideo
        youtubeId="xpVvBpgZvFE"
        title="TNT RACING"
        text="Something something, we gotta go fast something" />
    </div>
  )
}