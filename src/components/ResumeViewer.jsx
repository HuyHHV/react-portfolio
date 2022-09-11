import React from 'react';
import './ResumeViewer.css'
const resumeURL = "https://docs.google.com/document/d/1BjNkzpP8xbFllNcZ-B0kmOHEHEAmVuuK/edit?usp=sharing&ouid=108370778035003343937&rtpof=true&sd=true"
const embeddedURL = "https://docs.google.com/document/d/e/2PACX-1vRAeiw_xuFtAIsnChtVIWJ-eKG3Xe2kkAax0fB9zF6AkjIvSUkMPc_RxwDNW2M9AA/pub?embedded=true"
function ResumeViewer() {
  return (
      <>
         <div className='resume-wrapper'>
            <a href={resumeURL} target="_blank" rel="noreferrer"> Download Resume</a>
            <div className='iframe-wrapper'>
              <iframe title='resume' src= {embeddedURL}>
            </iframe>
            </div>
        </div>

      </>
  )
}

export default ResumeViewer