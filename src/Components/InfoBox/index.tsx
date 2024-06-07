import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


type InfoBoxProps = {
  content: {
    image: string
    alt: string
    textHeader: string
    textContent: string
  }[]
}

export const InfoBox = ({ content }: InfoBoxProps) => {
  const [currentContent, setCurrentContent] = useState(content[0]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {

    const changeCurrentContent = () => {
      if (currentContentIndex === content.length - 1) {
        setCurrentContent(content[0])
        setCurrentContentIndex(0)
      } else {
        setCurrentContentIndex(currentContentIndex + 1)
        setCurrentContent(content[currentContentIndex + 1])
      }
    }

    setTimeout(changeCurrentContent, 7000)
  }, [currentContentIndex])


  const infoBoxContentVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    initial: {
      opacity: 0,
      x: 1000,
    },
  };

  return (
    <div className="bg-sp-primary-200 overflow-hidden">
      <motion.div
        className="flex w-full h-[700px] flex-col items-center justify-center"
        variants={infoBoxContentVariants}
        key={currentContent.textHeader}
        initial="initial"
        animate="visible">
        <div className="h-[500px] w-full lg:w-3/4 justify-center flex">
          <img src={currentContent.image} alt={currentContent.alt} className="h-full w-full object-cover rounded" />
        </div>
        <div className="w-3/4 mx-auto text-center mt-2">
          <h2>{currentContent.textHeader}</h2>
          <p className="mt-2">{currentContent.textContent}</p>
        </div>
      </motion.div>
    </div >
  )
}