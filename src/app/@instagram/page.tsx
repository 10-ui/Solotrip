'use client';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Instagram() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed
        captioned
        url="https://www.instagram.com/p/Cqp0VUjNwb7"
        width={328}
      />
    </div>
  );
}
