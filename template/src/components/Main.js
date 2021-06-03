import React from 'react';

export default function Main({ children }) {
  return (
    <main className='main'>
      {children || (
        <section className='main__example-copy'>
          <h2>Heading</h2>
          <h3>Sub-Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            facilis nam sit magnam ducimus ratione aperiam veritatis explicabo
            odio deleniti, optio nulla nesciunt at? In atque vel error
            laudantium fugit.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid dolor illo inventore provident necessitatibus quia, quos,
            corrupti animi officiis, laboriosam suscipit quae sit aliquam quam
            eius ipsum ducimus sed?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            unde atque consequuntur voluptatem cupiditate! Magnam aliquam
            officiis harum dolore aut, doloremque beatae blanditiis quidem
            expedita odio. Ipsam dolores fuga molestiae.
          </p>
        </section>
      )}
    </main>
  );
}
