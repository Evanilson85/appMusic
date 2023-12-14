import { createContext, useEffect, useState, useMemo, useCallback } from 'react'
import * as Props from '../interface/props'

export const ContextMusic = createContext<Props.PropsContextAll>({} as Props.PropsContextAll)

export const ProviderMusic = ({ children }: Props.PropContextMusicChildren) => {

  const [musicCurrent, setMusicCurrent] = useState<Props.PropsList>({})
  
  const updateSetCurrentMusic = (params: Props.PropsList ) => {
    // setMusicCurrent(params)
    console.log(params)
  }


  const itensProvider = useMemo(() => ({ 
    updateSetCurrentMusic,
    musicCurrent
  }), [])
  
  return(
    <ContextMusic.Provider value={itensProvider} >
      {children}
    </ContextMusic.Provider>
  )


  // const itensProvider = useMemo(() => ({ 
//   updateSetCurrentMusic,
//   musicCurrent,
//   teste
// }), [musicCurrent, teste])
}