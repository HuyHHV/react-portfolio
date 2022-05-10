import React from 'react';
import resume from './resume.pdf';
import './ResumeViewer.css'
function ResumeViewer() {
  return (
      <>
         <div className='resume-wrapper'>
            <iframe src={resume} width="100%" height="500px">
            </iframe>
        </div>
      </>
  )
}

export default ResumeViewer