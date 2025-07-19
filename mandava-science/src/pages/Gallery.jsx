import React, { useMemo, useRef } from 'react';
import '../styles/Gallery.css';

const galleryData = {
  recognition: {
    title: "Moments of Recognition",
    images: [
      "/images/Awarding/a.jpeg", "/images/Awarding/b.jpeg", "/images/Awarding/c.jpeg",
      "/images/Awarding/e.jpeg", "/images/Awarding/f.jpeg", "/images/Awarding/g.jpeg",
      "/images/Awarding/h.jpeg", "/images/Awarding/i.jpeg", "/images/Awarding/j.jpeg",
      "/images/Awarding/k.jpeg", "/images/Awarding/l.jpeg", "/images/Awarding/m.jpeg",
      "/images/Awarding/n.jpeg"
    ]
  },
  leadership: {
    title: "Leading With Presence",
    images: [
      "/images/Function/1.jpeg", "/images/Function/3.jpeg", "/images/Function/4.jpeg",
      "/images/Function/5.jpeg", "/images/Function/6.jpeg", "/images/Function/7.jpeg",
      "/images/Function/8.jpeg", "/images/Function/9.jpeg", "/images/Function/10.jpeg",
      "/images/Function/11.jpeg", "/images/Function/12.jpeg", "/images/Function/13.jpeg",
      "/images/Function/14.jpeg", "/images/Function/15.jpeg", "/images/Function/16.jpeg",
      "/images/Function/17.jpeg", "/images/Function/18.jpeg", "/images/Function/19.jpeg",
      "/images/Function/21.jpeg", "/images/Function/22.jpeg", "/images/Function/23.jpeg", "/images/Function/24.jpeg",
      "/images/Function/25.jpeg", "/images/Function/26.jpeg", "/images/Function/27.jpeg",
      "/images/Function/28.jpeg", "/images/Function/29.jpeg", "/images/Function/30.jpeg",
      "/images/Function/31.jpeg", "/images/Function/32.jpeg", "/images/Function/33.jpeg",
      "/images/Function/34.jpeg", "/images/Function/35.jpeg", "/images/Function/36.jpeg",
    ]
  },
  partners: {
    title: "Collaborative Milestones",
    images: ["/images/Partners/aaa.jpeg", "/images/Partners/bbb.jpeg", "/images/Partners/ccc.jpeg"]
  },
  projects: {
    title: "Impact in Action",
    images: [
      "/images/Projects/bb.jpeg", "/images/Projects/cc.jpeg", "/images/Projects/dd.jpeg",
      "/images/Projects/ee.jpeg", "/images/Projects/ff.jpeg", "/images/Projects/aa.jpeg",
      "/images/Projects/gg.jpeg", "/images/Projects/hh.jpeg", "/images/Projects/ii.jpeg",
      "/images/Projects/kk.jpeg"
    ]
  },
  pressrelease: {
    title: "Media and Press Release",
    images: ["/images/Articles/1.jpeg","/images/Articles/2.jpeg"]
  }
};

const Gallery = () => {
  const scrollRefs = useRef({});

  const scroll = (key, direction) => {
    const container = scrollRefs.current[key];
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery of Purpose</h1>

      {Object.entries(galleryData).map(([key, section]) => {
        const randomized = useMemo(() =>
          [...section.images].sort(() => 0.5 - Math.random()), []);

        return (
          <section className="gallery-section" key={key}>
            <div className="gallery-title">
              <h2>{section.title}</h2>
            </div>
            <div className="scroll-controls">
              <button className="arrow left" onClick={() => scroll(key, 'left')}>&#10094;</button>
              <div
                className="scrollable-row"
                ref={el => (scrollRefs.current[key] = el)}
              >
                {randomized.map((src, idx) => (
                  <div
                    className={`gallery-card ${key === 'pressrelease' ? 'full-image' : ''}`}
                    key={idx}
                  >
                    <img
                      src={src}
                      alt={`${section.title} ${idx + 1}`}
                      loading="lazy"
                      className={key === 'pressrelease' ? 'no-crop' : ''}
                    />
                    <div className="hover-text">{section.title}</div>
                  </div>
                ))}
              </div>
              <button className="arrow right" onClick={() => scroll(key, 'right')}>&#10095;</button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Gallery;
