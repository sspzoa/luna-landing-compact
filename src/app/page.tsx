import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center relative">
      <div className="absolute w-full h-full inset-0 backdrop-filter backdrop-blur-2xl z-20" />
      <Image className="absolute inset-0 opacity-50 z-10" src="/images/logo.svg" alt="luna" width={300} height={300} />
      <div className="md:max-w-[600px] md:max-h-[300px] w-full h-screen flex flex-col md:flex-row justify-center md:justify-between items-center relative z-30 gap-spacing-700">
        <div className="md:h-full flex flex-col md:justify-between gap-spacing-700">
          <div>
            <span>
              <strong className="text-display">LUNA</strong>{' '}
              <span className="text-label text-luna-bright">Since. 2018</span>
            </span>
            <br />
            <span className="text-title text-luna-purple">IT 소셜벤처 동아리</span>
            <br />
          </div>
          <div className="flex flex-row gap-spacing-400">
            <Link
              href="https://www.instagram.com/dimigo_luna/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
              <FontAwesomeIcon icon={faInstagram} className="w-[14px] h-[14px]" />
              <span className="text-label text-content-standard-secondary">dimigo_luna</span>
            </Link>
            <Link
              href="https://github.com/LUNA-coding"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
              <FontAwesomeIcon icon={faGithub} className="w-[14px] h-[14px]" />
              <span className="text-label text-content-standard-secondary">LUNA-coding</span>
            </Link>
          </div>
        </div>
        <Image
          className="translate-x-1/4 hover:scale-125 ease-in-out duration-500"
          src="/images/dale.png"
          alt="dale"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}
