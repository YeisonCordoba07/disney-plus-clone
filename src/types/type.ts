export type Movie = Movies[]

export interface Movies {
  id: number
  image: Image
  episode: string
  extra: Extra
}

export interface Image {
  poster: string
  title: string
}

export interface Extra {
  ageAdvisor: number
  genre: string[]
  year: number
}


// Main Collections
export type ItemCollectionType = ItemCollectionTypes[]

export interface ItemCollectionTypes {
  id: string
  video: string
  image: string
  section?: string
}