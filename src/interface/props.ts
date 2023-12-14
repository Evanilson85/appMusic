export interface PropContextMusicChildren {
  children: React.ReactNode
}

export interface PropsContextCurrentMusic {
  title?: string,
  music?: string,
  uri?: string
}

export interface PropsList {
  name?: string
  uri?: string
  albumId?: any
}

export interface PropsContextAll {
  updateSetCurrentMusic: (params: PropsList) => void
  musicCurrent?: PropsList
}