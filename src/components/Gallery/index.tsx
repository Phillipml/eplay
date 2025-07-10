import Section from '../Section'
import { useState } from 'react'
import { Action, Item, Items, Modal, ModalContainer, Overlay } from './styles'
import { FaPlayCircle, FaSearchPlus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import type { GalleryItem } from '@/types/game'

type GalleryProps = {
  defaultCover: string | undefined
  id: number
  name: string
  items: GalleryItem[]
}

type ModalState = {
  visible: boolean
  image: string
  isVideo: boolean
  videoId: string
}

const Gallery = ({ defaultCover, id, name, items }: GalleryProps) => {
  const [modal, setModal] = useState<ModalState>({
    visible: false,
    image: '',
    isVideo: false,
    videoId: ''
  })

  const openModal = (image: string, isVideo = false, videoId = '') => {
    setModal({
      visible: true,
      image,
      isVideo,
      videoId
    })
  }

  const closeModal = () => {
    setModal({
      visible: false,
      image: '',
      isVideo: false,
      videoId: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.length > 0 ? (
            items.map((item, index: number) => (
              <Item
                key={`${item.type}-${index}`}
                onClick={() => {
                  if (item.type === 'video') {
                    openModal(item.url, true, item.url)
                  } else {
                    openModal(item.url)
                  }
                }}
              >
                {item.type === 'video' ? (
                  <iframe src={item.url} title={name + ' video'} />
                ) : (
                  <img src={item.url} alt={name + ' image'} />
                )}
                <Action>{item.type === 'video' ? <FaPlayCircle /> : <FaSearchPlus />}</Action>
              </Item>
            ))
          ) : (
            <Item>
              <img src={defaultCover} alt={name + ' image'} />
              <Action
                onClick={() => {
                  openModal(defaultCover || '')
                }}
              >
                <FaSearchPlus />
              </Action>
            </Item>
          )}
        </Items>
      </Section>
      <Modal className={modal.visible ? 'visible' : ''}>
        <ModalContainer>
          <header>
            <h4>{name}</h4>
            <IoMdClose onClick={closeModal} />
          </header>
          {modal.isVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${modal.videoId}`}
              title={name + ' modalVideo'}
            />
          ) : (
            <img src={modal.image} alt={name + ' modalImage'} />
          )}
        </ModalContainer>
        <Overlay onClick={closeModal} />
      </Modal>
    </>
  )
}

export default Gallery
