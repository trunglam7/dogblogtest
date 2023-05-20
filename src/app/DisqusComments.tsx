import React from 'react'
import { DiscussionEmbed } from 'disqus-react';

type DisqusCommentsProps = {
    slug: string,
    title: string
}

const DisqusComments = ({ slug, title} : DisqusCommentsProps) => {
    const disqusConfig = {
        shortname: 'dog-blog-1',
        config: {
            url: "http://dogblogtest.netlify.app/about",
            identifier: slug,
            title: title
        },
      };

      return <DiscussionEmbed {...disqusConfig} />;
    };

export default DisqusComments;