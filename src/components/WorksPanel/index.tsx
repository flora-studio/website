import React, { useCallback, useEffect, useState } from 'react'
import works from '../../data/works'
import useEmblaCarousel from 'embla-carousel-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAllWorkImages, WorkImage } from './useAllWorkImages'
import { useAllWorkIcons } from './useAllWorkIcons'
import { PlatformIcon } from '../svg/platform'
import { offToggleWork, onToggleWork } from '../../utils'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"

function WorksPanel() {
  const [item, setItem] = useState(works[0])
  // 外部切换 work 处理
  const toggleWork = useCallback((id: string) => {
    const work = works.find(work => work.id === id)
    work && setItem(work)
  }, [])
  useEffect(() => {
    onToggleWork(toggleWork)
    return () => offToggleWork(toggleWork)
  }, [])

  const imageList = useAllWorkImages()
  const currentImageList = imageList.get(item.id)

  const iconList = useAllWorkIcons()
  const currentIcon = iconList.get(item.id)
  return (
    <>
      <h2 id="works" className="text-center text-4xl font-bold pt-32 pb-12">我们的<span className="text-accent">项目</span>有……</h2>
      <div className="flex flex-col sm:flex-row gap-4 items-start max-w-4xl mx-auto">
        <div className="flex-none card sm:w-48 bg-base-100 shadow-xl">
          <div className="card-body menu menu-horizontal sm:menu-vertical">
            {works.map(work => (
              <li key={work.id}>
                <a className={item === work ? 'active' : ''} onClick={() => setItem(work)}>{work.name}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="w-0 flex-1 card bg-base-100 shadow-xl">
          <div className="card-body">
            <EmblaCarousel key={item.id} images={currentImageList} />
            <h2 className="card-title my-2">
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
            <div className="card-actions mt-4">
              {item.links.map(link => (
                <a key={link.platform} role="button" className="btn btn-circle btn-sm" href={link.url} target="_blank" rel="noreferrer">
                  <PlatformIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorksPanel

function EmblaCarousel({ images = [] }: { images?: WorkImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const [lightBoxOpen, setLightBoxOpen] = useState(false)

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {
              images.map((img, i) => {
                const imgData = getImage(img.thumb)!
                return (
                  <div
                    key={i}
                    className="embla__slide cursor-pointer"
                    style={{ '--w': `${imgData.width}px` } as React.CSSProperties}
                    onClick={() => setLightBoxOpen(true)}
                  >
                    <GatsbyImage alt="screenshot" image={imgData} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      <YLightBox
        images={images}
        index={selectedIndex}
        open={lightBoxOpen}
        onClose={() => setLightBoxOpen(false)}
        onChange={(index) => onDotButtonClick(index)}
      />
    </>
  )
}

interface YLightBoxProps {
  images?: WorkImage[]
  index?: number
  open: boolean
  onClose: () => void
  onChange?: (index: number) => void
}

function YLightBox({ images = [], index = 0, open, onClose, onChange }: YLightBoxProps) {

  const slides = images.map(img => {
    const imgData = getImage(img.picture)!
    return {
      // type: 'custom-slide',
      src: '', // make ts happy
      data: imgData
    }
  })

  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={index}
      controller={{
        // closeOnPullUp: true,
        // closeOnPullDown: true,
        closeOnBackdropClick: true
      }}
      on={{
        view: ({ index }) => onChange?.(index)
      }}
      render={{
        slide: ({ slide }) => <GatsbyImage image={(slide as any).data} alt="screenshot" objectFit="contain" className="max-w-[90vw] max-h-[90vh]" />
      }}
    />
  )
}
