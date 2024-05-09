'use client'

import { use, useEffect, useState } from 'react'

export default function Home() {

  const [ text, setText ] = useState('')

  useEffect(() => {
    load()
  })

  async function load() {
    const response = await fetch('/api/websocket')
    const text = await response.text()
    setText(text)
  }

  const post = `In this inaugural post, I invite you to join me on a profound exploration of the decentralized web. Rooted in a deep fascination with technology's implications, this journey represents an opportunity to delve into a realm of great significance and potential. The decentralized web offers a promising alternative to the centralized internet, empowering individuals with greater autonomy over their data and interactions. Navigating through technical intricacies, regulatory frameworks, and societal norms, we will explore diverse technologies—from blockchain to peer-to-peer networks—and examine their implications for privacy, security, and digital sovereignty. Together, let's envision a future where the internet serves as a catalyst for positive social change, empowering individuals to participate in a more inclusive and democratic digital society, and chart a course towards a future where knowledge is accessible, power is distributed, and technology is realized for the betterment of all.`

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="blog-container">
        <div className="blog-post">
          <h2>Embarking on a journey to the new frontier of the decentralized web</h2>
          <div className="post-details">
            <p>May 8, 2024</p>
          </div>
          <p>{post}</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-post">
          <h2>Inflation</h2>
          <div className="post-details">
            <p>May 8, 2024</p>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </main>
  )
}
