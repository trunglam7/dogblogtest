import React, { useState } from 'react'
import style from './styles/BlogPost.module.css'
import DisqusComments from '../DisqusComments'
import CommentSection from './CommentSection'
import { useRouter } from 'next/navigation'

type BlogPostProps = {
    blogName: string,
    blogAuthor: string,
    blogDate: string,
    blogImg: any,
    blogContent: string
}

const BlogPost = ({blogName, blogAuthor, blogDate, blogImg, blogContent} : BlogPostProps) => {

    const router = useRouter();

    const modifiedDate = new Date(blogDate);
    const year = modifiedDate.getFullYear();
    const month = modifiedDate.getMonth() + 1;
    const day = modifiedDate.getDate();

    const newDate = `${month}-${day}-${year}`;

    return (
        <div className={style.blogContainer}>
            <div className={style.blogHeading}>
                <div className="heading-left">
                    <h1 className={style.blogName}>{blogName}</h1>
                    <p>{blogAuthor}</p>
                </div>
                <p>{newDate}</p>
            </div>
            <div className={style.blogContent}>
                <img className={style.blogImg} src={blogImg} alt='blog-img' />
            </div>
            {/* {content && <CommentSection commentThreadId={blogName.split(" ").join("_") + '_' + blogAuthor.split(" ").join("_")}/>} */}
        </div>
  )

  function routeHandler(slug : string){
    router.push(`/blog/${slug}`)
  }
}

export default BlogPost