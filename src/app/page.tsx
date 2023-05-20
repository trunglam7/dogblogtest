"use client";

import style from './page.module.css'
import { client } from './backend/contentful'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import BlogPost from './components/BlogPost';

export default function Home() {

  const [blogEntries, setBlogEntries] = useState<any>();

  useEffect(() => {
    client.getEntries()
    .then((response) => setBlogEntries(response.items))
    .catch(err => console.log('Unable to get blog entries', err));
  }, [])

  return (
    <main className={style.main}>
      {blogEntries?.map((x : any, index: any) =>
          <BlogPost key={index}
            blogName={x.fields.name}
            blogAuthor={x.fields.authorName}
            blogDate={x.sys.createdAt}
            blogImg={x.fields.image.fields.file.url}
            blogContent={x.fields.content}
          />
      )}
    </main>
  )
}
