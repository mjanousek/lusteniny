export type SchemaObject = { key: string } & (
  | SchemaBreadCrumbList
  | SchemaLocalBusiness
  | SchemaEvent
);

export type SchemaBreadCrumbList = {
  '@context': 'https://schema.org/';
  '@type': 'BreadcrumbList';
  itemListELement: SchemaBreadCrumb[];
};

export type SchemaBreadCrumb = {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
};

export type SchemaLocalBusiness = {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string | string[];
  priceRange: string;
  address: SchemaAdress;
  geo: SchemaGeo;
  sameAs: string[];
};

export type SchemaAdress = {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: 'CZ';
};

export type SchemaGeo = {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
};

export type SchemaDayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type SchemaEvent = {
  '@context': 'https://schema.org';
  '@type': 'Event';
  name: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  eventStatus:
    | 'https://schema.org/EventScheduled'
    | 'https://schema.org/EventCancelled'
    | 'https://schema.org/EventMovedOnline'
    | 'https://schema.org/EventPostponed'
    | 'https://schema.org/EventRescheduled';
  eventAttendanceMode:
    | 'https://schema.org/OfflineEventAttendanceMode'
    | 'https://schema.org/MixedEventAttendanceMode'
    | 'https://schema.org/OnlineEventAttendanceMode';
  organizer: SchemaOrganizer;
  location: SchemaLocation;
  performer: SchemaPerformer;
  offers: SchemaOffers;
};

export type SchemaOrganizer = {
  '@type': 'Organization';
  name: string;
  url: string;
};

export type SchemaLocation = {
  '@type': 'Place';
  name: string;
  address: SchemaAdress;
};

export type SchemaPerformer = {
  '@type': 'PerformingGroup';
  name: string;
};

export type SchemaOffers = {
  '@type': 'Offer';
  availability: 'https://schema.org/InStock';
  name: string;
  price: string;
  priceCurrency: 'CZK';
  validFrom: Date;
  url: string;
};
