import React from "react"
import tw from "twin.macro"

const Footer = () => {
  return (
    <footer css={tw`text-center py-8 bottom-0`}>
      <a css={tw`text-xs font-bold`} href={`https://github.com/Seongwon97`}>
        &copy;Momo
      </a>
    </footer>
  )
}

export default Footer
