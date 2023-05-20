'use client';

import React from 'react'
import DisqusComments from '../DisqusComments'
import CommentSection from '../components/CommentSection'

const About = () => {
  return (
    <>
        <div>About</div>
        <DisqusComments slug={'test_1'} title={'Welcome to About'}/>
    </>
  )
}

export default About