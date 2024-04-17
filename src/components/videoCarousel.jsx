import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

export default function videoCarousel() {
    const [loadedData,setLoadedData]=useState([])
    const videoRef=useRef([]);
    const videoSpanRef=useRef([]);
    const videoDivRef=useRef([]);
    const [video,setVideo]=useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        idLastVideo:false,
        isPlaying:false

    })

    const{isEnd,idLastVideo,startPlay,videoId,isPlaying}=video;
    useEffect(()=>{
        if(loadedData.length>3){
            if(!isPlaying){
                videoRef.current[videoId].pause()
            }
            else{
                startPlay && videoRef.current[videoId].play()
            }
        }
    },[startPlay,videoId,isPlaying,loadedData])
    useEffect(()=>{
        const currentProgress=0;
        let span=videoSpanRef.current;
        if(span[videoId]){
            let anim=gsap.to(span[videoId],{
        onUpdate:()=>{

            },
        onComplete:()=>{

        },
    })
        }
    },[videoId,startPlay])
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list,i)=>(
                <div key={list.id} id="slider" className='sm:pr-20 pr:10'>
                    <div className='video-carousel_container'>
                        <div className='w-full  h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video id="video" playsInline={true} preload='auto' muted ref={(el)=>(videoRef.current[i]=el)} onPlay={()=>{}}>
                                <source src={list.video} type='video/mp4'></source>
                            </video>
                        </div>
                        <div className='absolute top-12 left-[5%] z-10'>{list.textLists.map((text)=>(
                            <p key={text}>{text}</p>
                        ))}</div>
                    </div>

                </div>
            ))}
        </div>
    </>
  )
}
