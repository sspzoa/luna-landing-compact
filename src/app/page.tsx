import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { DallaeImage } from '@/components/dallaeImage';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center relative">
      <div className="absolute w-full h-full inset-0 backdrop-filter backdrop-blur-2xl z-20" />
      <Image className="absolute inset-0 opacity-50 z-10" src="/images/logo.svg" alt="luna" width={300} height={300} />
      <div className="md:ml-spacing-900 md:max-w-[600px] md:max-h-[300px] w-full h-screen flex flex-col md:flex-row justify-center md:justify-between items-center relative z-30 gap-spacing-700">
        <div className="md:h-full flex flex-col md:justify-between gap-spacing-700">
          <div>
            <span className="text-title text-luna-purple">한국디지털미디어고등학교<br/><strong>IT 소셜벤처 동아리</strong></span>
            <br/>
            <span>
              <strong className="text-display">LUNA</strong>{' '}
              <span className="text-label text-luna-purple">Since. 2018</span>
            </span>
            <br/>
            <span className="text-caption text-luna-bright">
              &copy; 2018-{currentYear}{' '}
              <Link className="hover:opacity-50 duration-500 ease-in-out" target="_blank" rel="noreferrer"
                    href="https://github.com/LUNA-coding">
                LUNA
              </Link>
              . All rights reserved.
            </span>
            <br/>
            <span className="text-caption text-luna-bright">
              Inspired by{' '}
              <Link className="hover:opacity-50 duration-500 ease-in-out" target="_blank" rel="noreferrer"
                    href="https://github.com/krisamin">
                noViceMin
              </Link>
              .
              Developed by{' '}
              <Link className="hover:opacity-50 duration-500 ease-in-out" target="_blank" rel="noreferrer"
                    href="https://github.com/sspzoa">
                sspzoa
              </Link>
              .
            </span>
          </div>
          <div className="flex flex-row gap-spacing-400">
            <Link
                href="https://www.instagram.com/dimigo_luna/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
              <FontAwesomeIcon icon={faInstagram} className="w-[14px] h-[14px]"/>
              <span className="text-label text-content-standard-secondary">dimigo_luna</span>
            </Link>
            <Link
                href="https://github.com/LUNA-coding"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
              <FontAwesomeIcon icon={faGithub} className="w-[14px] h-[14px]"/>
              <span className="text-label text-content-standard-secondary">LUNA-coding</span>
            </Link>
          </div>
        </div>
        <DallaeImage/>
      </div>
    </div>
  );
}
