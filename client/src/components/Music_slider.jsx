import React from 'react'
import musicIcon from '../img/speaker.png'
import musicIconMuted from '../img/speaker_muted.png'
import './Music_slider.css'

export default function Music_slider({ volume, setVolume }) {
    return (
        <div className='speaker'>
            <img className='icon_speaker' src={volume == 0 ? musicIconMuted : musicIcon} />
            <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} />
        </div>
    )
}
