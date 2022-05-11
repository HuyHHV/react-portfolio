import React from 'react';
import resume from './resume.pdf';
import './ResumeViewer.css'
function ResumeViewer() {
  return (
      <>
         <div className='resume-wrapper'>
            <iframe src={resume} width="100%" height="100%">
            </iframe>
        </div>
      </>
  )
}

export default ResumeViewer