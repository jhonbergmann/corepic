export interface FetchImages extends RootImage {}
export interface FetchImageDetails extends RootImageDetails {}

export interface RootImage {
  pages: Page[]
  pageParams: number[]
  results: Result[]
}

interface RootImageDetails {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  topic_submissions: TopicSubmissions
  asset_type: string
  user: User
  exif: Exif
  location: Location
  meta: Meta
  public_domain: boolean
  tags: Tag[]
  views: number
  downloads: number
  related_collections: RelatedCollections
}

export interface Page {
  total: number
  total_pages: number
  results: Result[]
}

interface AlternativeSlugs {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

interface TopicSubmissions {}

interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  portfolio_url: string
  bio?: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

interface ProfileImage {
  small: string
  medium: string
  large: string
}

interface Social {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email?: string
}

interface Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

interface Location {
  name?: string
  city?: string
  country?: string
  position: Position
}

interface Position {
  latitude?: string
  longitude?: string
}

interface Meta {
  index: boolean
}

interface Tag {
  type: string
  title: string
}

interface RelatedCollections {
  total: number
  type: string
  results: Result[]
}

export interface Result {
  id: string
  title: string
  description?: string
  published_at: string
  last_collected_at: string
  updated_at: string
  featured: boolean
  total_photos: number
  private: boolean
  urls: Urls
  share_key: string
  tags: Tag2[]
  links: Links3
  user: User2
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

interface Tag2 {
  type: string
  title: string
}

interface Links3 {
  self: string
  html: string
  photos: string
  related: string
}

interface User2 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
}

interface Links4 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following?: string
  followers?: string
}

interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

interface CoverPhoto {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs2
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description: string
  urls: Urls2
  links: Links5
  likes: number
  liked_by_user: boolean
  topic_submissions: TopicSubmissions2
  asset_type: string
  user: User3
}

interface AlternativeSlugs2 {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

interface Links5 {
  self: string
  html: string
  download: string
  download_location: string
}

interface TopicSubmissions2 {
  people?: People
  'cool-tones'?: CoolTones
  sports?: Sports
  travel?: Travel
  wallpapers?: Wallpapers
}

interface People {
  status: string
}

interface CoolTones {
  status: string
  approved_on: string
}

interface Sports {
  status: string
  approved_on: string
}

interface Travel {
  status: string
  approved_on: string
}

interface Wallpapers {
  status: string
  approved_on: string
}

interface User3 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url: string
  bio: string
  location: string
  links: Links6
  profile_image: ProfileImage3
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social3
}

interface Links6 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following?: string
  followers?: string
}

interface ProfileImage3 {
  small: string
  medium: string
  large: string
}

interface Social3 {
  instagram_username: string
  portfolio_url: string
  twitter_username?: string
  paypal_email?: string
}

interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  asset_type: string
  urls: Urls3
}

interface Urls3 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
