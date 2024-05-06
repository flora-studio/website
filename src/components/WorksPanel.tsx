import React, { useState } from 'react'
import works from '../data/works'
import useEmblaCarousel from 'embla-carousel-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAllWorkImages, WorkImage } from './useAllWorkImages'
import { useAllWorkIcons } from './useAllWorkIcons'
import { PlatformIcon } from './svg/platform'

function WorksPanel() {
  const [item, setItem] = useState(works[0])

  const imageList = useAllWorkImages()
  const currentImageList = imageList.get(item.id)

  const iconList = useAllWorkIcons()
  const currentIcon = iconList.get(item.id)
  return (
    <div className="flex gap-2">
      <div className="flex-none card w-48 bg-base-100 shadow-xl">
        <div className="card-body menu">
          {works.map(work => (
            <li key={work.id}>
              <a className={item === work ? 'active' : ''} onClick={() => setItem(work)}>{work.name}</a>
            </li>
          ))}
        </div>
      </div>
      <div className="flex-1 card bg-base-100 shadow-xl">
        <div className="card-body">
          <EmblaCarousel images={currentImageList} />
          <h2 className="card-title mt-4">
            {currentIcon && (
              <div className="avatar">
                <div className="w-8 rounded">
                  <GatsbyImage alt="icon" image={getImage(currentIcon)!}/>
                </div>
              </div>
            )}
            {item.name}
          </h2>
          {typeof item.desc === 'string' ? <p>{item.desc}</p> : item.desc}
          <div className="card-actions">
            {item.links.map(link => (
              <a key={link.platform} role="button" className="btn btn-circle btn-sm" href={link.url} target="_blank" rel="noreferrer">
                <PlatformIcon platform={link.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksPanel

function EmblaCarousel({ images = [] }: { images?: WorkImage[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          images.map((img, i) => {
            const imgData = getImage(img)!
            return (
              <div key={i} className="embla__slide" style={{ '--w': `${imgData.width}px` } as React.CSSProperties}>
                <GatsbyImage alt="screenshot" image={imgData} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
