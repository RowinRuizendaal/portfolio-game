const isMobile = window.innerWidth <= 768


export const intro = {
  dialouge: [
    {
      text: 'dialouge.intro.p1'
    },
    {
      text: 'dialouge.intro.p2'
    },
    {
      text: 'dialouge.intro.p3'
    },
    {
      text: 'dialouge.intro.p4'
    },
    {
      text: 'dialouge.intro.p5'
    },
    {
      text: isMobile ? 'dialouge.intro.p6' : 'dialouge.intro.p7'
    }
  ]
}
