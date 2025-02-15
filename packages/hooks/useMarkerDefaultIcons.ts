export type MarkerDefaultIcons =
  | 'simple_red'
  | 'simple_blue'
  | 'loc_red'
  | 'loc_blue'
  | 'start'
  | 'end'
  | 'location'
  | 'red1'
  | 'red2'
  | 'red3'
  | 'red4'
  | 'red5'
  | 'red6'
  | 'red7'
  | 'red8'
  | 'red9'
  | 'red10'
  | 'blue1'
  | 'blue2'
  | 'blue3'
  | 'blue4'
  | 'blue5'
  | 'blue6'
  | 'blue7'
  | 'blue8'
  | 'blue9'
  | 'blue10'

let icons: Record<MarkerDefaultIcons, BMapGL.Icon> | null = null

export default function useMarkerDefaultIcons(): Record<MarkerDefaultIcons, BMapGL.Icon> {
  if (icons !== null) return icons
  const defaultIconUrl = '//mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png'
  icons = {
    simple_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(454 / 2, 378 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    simple_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(454 / 2, 450 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    loc_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 378 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    loc_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 450 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    start: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 278 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    end: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
      imageOffset: new BMapGL.Size(450 / 2, 278 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    location: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(28 / 2, 40 / 2), {
      imageOffset: new BMapGL.Size(248 / 2, 466 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    })
  } as Record<MarkerDefaultIcons, BMapGL.Icon>

  for (let i = 1; i <= 10; i++) {
    icons['red' + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size((42 / 2) * (i - 1), 0),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    })
  }

  for (let i = 1; i <= 10; i++) {
    icons['blue' + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size((42 / 2) * (i - 1), 132 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    })
  }

  return icons
}
