import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs'

function Social() {
  return (
    <div className="social_media">
        <a className='media' rel="noreferrer" href="https://www.linkedin.com/in/geoguncay/" target={'_blank'}> <BsLinkedin/> </a>
        <a className='media'rel="noreferrer" href="https://github.com/geoguncay/" target={'_blank'}> <BsGithub/></a>
        <a className='media' rel="noreferrer"href="https://instagram.com/geogunky/" target={'_blank'}> <BsInstagram/></a>
        <a className='media' rel="noreferrer" href="https://youtube.com" target={'_blank'}> <BsYoutube/></a>
    </div>
  )
}

export default Social