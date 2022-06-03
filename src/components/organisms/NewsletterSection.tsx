import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ButtonExternalLink } from '../atoms';

export const NewsletterSection = () => (
  <section className="relative bg-green-100 py-0">
    <div className="container mx-auto px-[25px] lg:px-[50px]">
      <div className="grid grid-cols-6 items-center gap-[50px] py-[50px]">
        <div className="relative z-20 col-span-6 md:col-span-3">
          <h2 className="mb-[30px] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Nechceš přijít o novinky ?
          </h2>
          <p className="mb-[30px] leading-relaxed sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
            Sleduj nás na facebooku nebo instagramu a nepřijdeš o nejnovější informace k luštěninám.
          </p>
          <div className="flex">
            <ButtonExternalLink
              href="https://facebook.com/lusteniny"
              variant="blue"
              text="Sledovat na Facebooku"
              icon={['fab', 'facebook-f']}
            />
          </div>
        </div>
        <div className="absolute inset-0 col-span-6 h-full w-full opacity-[0.15] md:relative md:col-span-3 md:opacity-100">
          <StaticImage
            src="../../content/images/Newsletter.png"
            className="aspect-[4/3] h-full w-full"
            objectFit="contain"
            layout="constrained"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
);
