// 创建一个react组件，实现一个懒加载的功能，可以借助inersectionObserver 来实现

import { useEffect } from 'react';
function ImageGallery({ images }: { images: { src: string, alt: string }[] }) { 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          (img as HTMLImageElement).src = img.getAttribute('data-src') || '';
          observer.unobserve(img);
        }
      });
    },{
      rootMargin: '100px',
      threshold: 0,
    });

    const imgElements = document.querySelectorAll('img[data-src]');
    imgElements.forEach(img => {
      observer.observe(img);
    });

    return () => {
      imgElements.forEach(img => {
        observer.unobserve(img);
      });
    };


  }, [])
  return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 200px)',
    }}>
    {images.map((image) => (
      <div style={{display: 'inline-block' }}>
        <img
          data-src={image.src}
          src="" // Placeholder image
          style={{ width: '200px', height: '500px' }}
        />
      </div>
    ))}
  </div>
}

export default ImageGallery;