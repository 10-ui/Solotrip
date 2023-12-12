'use client';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Instagram() {
  return (
    <>
      <div className="flex justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/Cqp0VUjNwb7"
          width={354}
        />
      </div>
    </>
  );
}
