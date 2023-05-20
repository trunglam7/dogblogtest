import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

type FullBlogProps = {
    params: {slug: string},
    blogName: string,
}

const FullBlog = ({params, blogName} : FullBlogProps) => {

    const disqusConfig = {
        shortname: 'dog-blog-1',
        config: {
            identifier: params.slug,
            title: blogName
        },
      };

    return (
        <>
            <div>ID: {params.slug}</div>
            <DiscussionEmbed {...disqusConfig}/>
        </>
    )
}

export default FullBlog