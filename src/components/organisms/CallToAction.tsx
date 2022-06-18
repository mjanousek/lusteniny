import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ButtonExternalLink, Container } from '../atoms';

export const CallToAction = () => (
  <aside className="relative">
    <Container className="relative z-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-green-400 to-green-600 opacity-30 blur transition duration-500"></div>
        <div className="relative grid gap-8 rounded-[32px] bg-gradient-to-br from-green-500 to-green-600 p-8 sm:p-12 md:p-14 lg:grid-cols-5 lg:p-16">
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Nechceš přijít o novinky ?
            </h2>
            <p className="max-w-lg text-sm font-medium leading-relaxed text-green-50 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
              Sleduj nás na facebooku nebo instagramu a nepřijdeš o nejnovější informace k
              luštěninám.
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-4 lg:col-span-2 lg:items-center">
            <ButtonExternalLink
              href="https://www.facebook.com/lusteniny"
              text="Facebook @lusteniny"
              icon={['fab', 'facebook-f']}
              variant="blue"
            />
            <ButtonExternalLink
              href="https://www.instagram.com/lusteninyzlin"
              text="Instagram @lusteninyzlin"
              icon={['fab', 'instagram']}
              variant="instagram"
            />
          </div>
        </div>
      </div>
    </Container>
    <svg
      viewBox="0 0 1920 86"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 bottom-0 m-0 -mb-1 w-full text-blue-50"
    >
      <path d="M1920 0C1216.18 87.0898 796.828 87.0991 0 0V86H1920V0Z" fill="currentColor" />
    </svg>
  </aside>
);
