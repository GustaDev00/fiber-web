import { CustomBr } from "@/components/atoms/custom-br";
import { AboutUsIcon } from "@/components/svgs/about-us";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";
import { ServicesIcon } from "@/components/svgs/services";
import { TwitterIcon } from "@/components/svgs/twitter";

export default {
  data: {
    footer: {
      description: (
        <>
          Mit klarem Fokus auf Automatisierung und
          <CustomBr byViewport="desktop" /> Kreativität verwandeln wir jede digitale
          <CustomBr byViewport="desktop" /> Herausforderung in Chancen.
        </>
      ),
      titles: {
        services: "Dienstleistungen",
        contacts: "Kontakt",
      },
    },

    navigation: [
      { title: "Home", href: "/", icon: HomeIcon },
      { title: "Dienstleistungen", href: "/dienstleistungen", icon: ServicesIcon },
      { title: "über uns", href: "/uber-uns", icon: AboutUsIcon },
    ],
    contact: [
      {
        text: "Telefon",
        content: "+41 76 539 87 50",
        link: "tel:+41765398750",
      },
      {
        text: "E-Mail",
        content: "info@fiberweb.ch",
        link: "mailto:info@fiberweb.ch",
      },
      {
        text: "Adresse",
        content: "Sommerweg 27, 8750 Glarus",
        link: "https://maps.app.goo.gl/M3iAhhh5svGcWHZ5A",
      },
    ],
    social_share: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: InstagramIcon,
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/",
        icon: FacebookIcon,
      },
      {
        title: "Twitter",
        link: "https://x.com/home",
        icon: TwitterIcon,
      },
    ],
    services: [
      {
        title: "Webdesign",
        link: "/dienstleistungen/webdesign/",
      },
      {
        title: "Marketing",
        link: "/dienstleistungen/marketing",
      },
      {
        title: "Künstliche Intelligenz",
        link: "/dienstleistungen/kuenstliche-intelligenz",
      },
      {
        title: "Mobile Apps",
        link: "/dienstleistungen/mobile-apps",
      },
    ],
    buttons: {
      contact: {
        title: "Kontaktieren Sie uns",
        href: "https://web.whatsapp.com/send?phone=+41765398750",
      },
      whatsapp: {
        title: "Lass uns loslegen",
        href: "https://web.whatsapp.com/send?phone=+41765398750",
      },
    },
  },
  loading: [
    { text: "Creative", img: "/imgs/loading/img1.png" },
    { text: "Marketing", img: "/imgs/loading/img2.png" },
    { text: "Webseiten", img: "/imgs/loading/img3.png" },
  ],
  header: {
    home: {
      title: (
        <>
          <span>Creative</span> Webseiten <CustomBr byViewport="desktop" />
          Effektives <span>Marketing </span>
          <CustomBr byViewport="desktop" /> <span>Smarte</span> KI Lösungen
        </>
      ),

      description: (
        <>
          FiberWeb ist eine führende Schweizer
          <CustomBr byViewport="desktop" /> Webagentur, spezialisiert auf
          <span>
            Branding, <CustomBr byViewport="desktop" /> UI/UX-Design,
          </span>
          sowie{" "}
          <span>
            Web- und
            <CustomBr byViewport="desktop" /> Mobile-Entwicklung.
          </span>{" "}
          Zudem bieten wir
          <CustomBr byViewport="desktop" /> <span>KI-Lösungen</span> an, um die Effizienz deines{" "}
          <CustomBr byViewport="desktop" /> Unternehmens zu maximieren.
        </>
      ),
    },
    uber_uns: {
      title: (
        <>
          Wir gestalten die digitale
          <CustomBr byViewport="desktop" />
          <span> Zukunft deiner Marke</span>
        </>
      ),

      description: (
        <>
          Mit klarem Fokus auf Automatisierung und Kreativität verwandeln wir jede digitale
          Herausforderung in Chancen. <CustomBr byViewport="desktop" /> Dein Erfolg ist unser
          Antrieb: Wir machen deine Prozesse schlank, deine Online-Präsenz unschlagbar und dein
          <CustomBr byViewport="desktop" /> Business bereit für die Zukunft.
        </>
      ),
    },
  },
  innovation: {
    title: (
      <>
        Innovation <span>beginnt hier</span>
      </>
    ),
    description: (
      <>
        Wir machen deine digitale Vision greifbar – selbst,
        <CustomBr byViewport="desktop" /> wenn du sie dir noch nicht vorstellen kannst. Unser
        <CustomBr byViewport="desktop" /> Ziel ist es, dein Unternehmen optimal für die
        <CustomBr byViewport="desktop" /> Zukunft abzusichern, indem wir deine
        <CustomBr byViewport="desktop" /> Einzigartigkeit online sichtbar machen. Mit
        <CustomBr byViewport="desktop" /> authentischen Lösungen sorgen wir dafür, dass du
        <CustomBr byViewport="desktop" /> dich rundum versorgt fühlst. Unser Anspruch? Eine
        <CustomBr byViewport="desktop" /> Zusammenarbeit, die sich wie eine Freundschaft
        <CustomBr byViewport="desktop" /> anfühlt und dir das beruhigende Gefühl gibt, die
        <CustomBr byViewport="desktop" /> beste Entscheidung getroffen zu haben – heute
        <CustomBr byViewport="desktop" /> und in Zukunft.
      </>
    ),
  },
  story: {
    title: (
      <>
        Die Story hinter <br />
        <span>FiberWeb</span>
      </>
    ),
    content: (
      <>
        <p>
          Es begann mit einer gemeinsamen Vision. Elita, mit einer Leidenschaft für Webdesign und
          Entwicklung, und Patrick, mit einer Expertise im Marketing, wollten unseren eigenen Stil
          in die digitale Welt bringen. Anfang dieses Jahres haben wir uns zusammengetan und
          FiberWeb gegründet, um Unternehmen dabei zu helfen, sich digital zu transformieren. Schon
          bald haben wir uns auf die Zusammenarbeit mit Unternehmen aus der Finanz- und
          Treuhandbranche spezialisiert.
        </p>
        <p>
          Unser junges, dynamisches Team wächst stetig. Heute arbeiten neben uns auch ein
          Projektleiter, ein Designer, drei Programmierer und drei Ads Manager bei FiberWeb – das
          Herzstück unserer Agentur.
        </p>
        <p>
          Unser Ziel? Coole, authentische Webseiten und Online-Marketing, das unsere kreativen
          Strategien widerspiegelt. Mit innovativen AI-Services wollen wir unsere Kunden auf die
          nächste Stufe bringen, denn die Zukunft verlangt nach Automatisierung und smarten
          Lösungen.
        </p>
        <p>
          Wir sind mutig, flexibel und stecken Herzblut in jedes Projekt. FiberWeb ist nicht nur
          unser Unternehmen – es ist Ausdruck unserer Leidenschaft für das Digitale.
        </p>
      </>
    ),
    video1: {
      src: "/videos/video01.mp4",
      type: "video/mp4",
    },
    video2: {
      src: "/videos/video02.mp4",
      type: "video/mp4",
    },
  },
  team: {
    title: (
      <>
        Lernen Sie unser <CustomBr byViewport="desktop" />
        <span>Team kennen</span>
      </>
    ),
    people: [
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
      {
        name: "Kaique Fernandes",
        role: "UX Designer",
        text: (
          <>Visionär am Bildschirm – verwandelt Ideen in visuelle Erlebnisse, die begeistern.</>
        ),
        img: {
          src: "/imgs/team/kaique.png",
          alt: "Kaique Fernandes",
        },
      },
    ],
  },
  text: "Erfolge, die unsere Qualität unterstreichen.",
  clients: [
    {
      subtitle: (
        <>
          Noser Treuhand
          <CustomBr byViewport="desktop" /> GmbH
        </>
      ),
      description: (
        <>
          Für unseren Kunden haben wir einen modernen, dunklen
          <CustomBr byViewport="desktop" /> Website-Auftritt mit neon-grünen Akzenten geschaffen,
          <CustomBr byViewport="desktop" /> der sich perfekt mit ihrer Marke und Vision verbindet.
          Das <CustomBr byViewport="desktop" />
          Ziel war es, eine digitale Plattform zu entwickeln, die nicht
          <CustomBr byViewport="desktop" /> nur visuell beeindruckt, sondern auch Funktionalität und
          <CustomBr byViewport="desktop" /> Nutzerfreundlichkeit in den Vordergrund stellt.
        </>
      ),
      list: ["Web design", "Marketing", "2024"],
      id: 1,
      img: {
        src: "/imgs/services/noser.png",
        alt: "webdesign DAC Innenausbau GmbH",
      },
      link: {
        href: "https://trockenbau-dac.ch/",
        title: "trockenbau-dac.ch",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      },
      tags: ["Web-Design", "UX-UI Design"],
    },
    {
      subtitle: (
        <>
          HA-Tech
          <CustomBr byViewport="desktop" /> GmbH
        </>
      ),
      description: (
        <>
          Für unseren Kunden haben wir einen modernen, dunklen
          <CustomBr byViewport="desktop" /> Website-Auftritt mit neon-grünen Akzenten geschaffen,
          <CustomBr byViewport="desktop" /> der sich perfekt mit ihrer Marke und Vision verbindet.
          Das <CustomBr byViewport="desktop" />
          Ziel war es, eine digitale Plattform zu entwickeln, die nicht
          <CustomBr byViewport="desktop" /> nur visuell beeindruckt, sondern auch Funktionalität und
          <CustomBr byViewport="desktop" /> Nutzerfreundlichkeit in den Vordergrund stellt.
        </>
      ),
      list: ["Web design", "Marketing", "2024"],
      id: 2,
      img: {
        src: "/imgs/services/tech.png",
        alt: "webdesign HA-Tech Gmbh",
      },
      link: {
        href: "https://ha-tech.ch/",
        title: "ha-tech.ch",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      },
      tags: ["Web-Design", "UX-UI Design"],
    },
    {
      subtitle: (
        <>
          Büro im
          <CustomBr byViewport="desktop" /> Flow
        </>
      ),
      description: (
        <>
          Für unseren Kunden haben wir einen modernen, dunklen
          <CustomBr byViewport="desktop" /> Website-Auftritt mit neon-grünen Akzenten geschaffen,
          <CustomBr byViewport="desktop" /> der sich perfekt mit ihrer Marke und Vision verbindet.
          Das <CustomBr byViewport="desktop" />
          Ziel war es, eine digitale Plattform zu entwickeln, die nicht
          <CustomBr byViewport="desktop" /> nur visuell beeindruckt, sondern auch Funktionalität und
          <CustomBr byViewport="desktop" /> Nutzerfreundlichkeit in den Vordergrund stellt.
        </>
      ),
      list: ["Web design", "Marketing", "2024"],
      id: 3,
      img: {
        src: "/imgs/services/burow.png",
        alt: "webdesign Andrade Gipser + Maler GmbH",
      },
      link: {
        href: "https://andrade-gipser.ch/",
        title: "andrade-gipser.ch",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      },
      tags: ["Web-Design", "UX-UI Design"],
    },
  ],
  video: {
    src: "/videos/fiber.mp4",
    type: "video/mp4",
  },
  philosofie: {
    title: (
      <>
        Unsere
        <CustomBr byViewport="mobile" /> Philosofie
      </>
    ),
    content: (
      <>
        <p>
          Bei <span>FiberWeb</span> glauben wir an die Kraft der digitalen
          <CustomBr byViewport="desktop" /> Innovation. Unsere Philosophie basiert auf einem tiefen
          <CustomBr byViewport="desktop" /> Verständnis für die Bedürfnisse unserer Kunden und einem
          <CustomBr byViewport="desktop" /> unermüdlichen Streben nach Perfektion. Wir verbinden
          <CustomBr byViewport="desktop" /> Kreativität mit modernster Technologie, um persönliche
          <CustomBr byViewport="desktop" /> Lösungen zu schaffen, die nicht nur beeindrucken,
          <CustomBr byViewport="desktop" /> sondern auch echten Mehrwert bieten.
        </p>
        <p>
          Unser Ziel ist es, Unternehmen durch durchdachtes
          <CustomBr byViewport="desktop" /> Design und effiziente Prozesse zu stärken und ihre
          digitale
          <CustomBr byViewport="desktop" /> Präsenz nachhaltig zu verbessern.
        </p>
      </>
    ),
  },
  process: {
    title: (
      <>
        Unser <span>Prozess</span>
      </>
    ),
    items: [
      {
        id: 1,
        title: "Gemeinsame Vision entwickeln",
        text: (
          <>
            In einem ersten Gespräch hören wir dir aufmerksam zu und tauchen in
            <CustomBr byViewport="desktop" /> deine Ziele ein. Gemeinsam entwickeln wir kreative
            Ideen, die deine <CustomBr byViewport="desktop" /> Vision widerspiegeln. Hier werden
            alle Wünsche besprochen und der <CustomBr byViewport="desktop" /> Grundstein für dein
            Projekt gelegt.
          </>
        ),
      },
      {
        id: 2,
        title: "Dein Konzept zum Leben erwecken",
        text: (
          <>
            Nach der Ideenfindung setzen wir uns daran, dein Konzept in die Realität umzusetzen. Wir
            arbeiten eng mit dir zusammen, um sicherzustellen, dass jede Phase des Projekts deinen
            Erwartungen entspricht. Unser Ziel ist es, deine Vision mit innovativen Lösunge und
            modernster Technologie zum Leben zu erwecken.
          </>
        ),
      },
      {
        id: 3,
        title: "Pixelperfektion umsetzen",
        text: (
          <>
            Mit einem Auge für Details und einem hohen Anspruch an Qualität setzen wir dein Projekt
            pixelgenau um. Jedes Element wird sorgfältig gestaltet und entwickelt, um ein
            beeindruckendes und funktionales Endprodukt zu gewährleisten.Deine Zufriedenheit steht
            dabei stets im Mittelpunkt.
          </>
        ),
      },
      {
        id: 4,
        title: "Feinschliff und Begleitung",
        text: (
          <>
            Nach der Umsetzung folgt der Feinschliff. Wir optimieren und testen dein Projekt, um
            sicherzustellen, dass alles reibungslos funktioniert. Auch nach dem Launch stehen wir
            dir zur Seite und begleiten dich, um langfristigen Erfolg zu gewährleisten. Dein Erfolg
            ist unser Antrieb.
          </>
        ),
      },
    ],
    description: (
      <>
        Unser Prozess bietet dir eine klare und strukturierte Herangehensweise, um deine Vision
        Wirklichkeit werden zu lassen. Wir begleiten dich durch jede Phase, von der ersten Idee bis
        zur finalen Umsetzung, mit höchster Präzision und einem Blick für Details.
      </>
    ),
    video: {
      src: "/videos/process.mp4",
      type: "video/mp4",
    },
  },
  services: {
    title: (
      <>
        Deine Vision.
        <br />
        Unsere Umsetzung.
      </>
    ),
    items: [
      {
        title: <>Webdesign</>,
        subtitle: <>Webdesign & -entwicklung</>,
        description: (
          <>
            Deine Website soll nicht nur beeindrucken, sondern ein
            <CustomBr byViewport="desktop" /> echtes Erlebnis bieten. Wir kreieren digitale Welten,
            die <CustomBr byViewport="desktop" />
            deine Besucher fesseln, begeistern und tief ins Herz deiner
            <CustomBr byViewport="desktop" /> Marke eintauchen lassen. Einzigartig, intuitiv und so
            <CustomBr byViewport="desktop" /> gestaltet, dass deine Nutzer nicht nur klicken,
            sondern <CustomBr byViewport="desktop" />
            immer wieder zurückkommen.
          </>
        ),
        img: {
          src: "/imgs/services/webdesign.png",
          alt: "Webdesign",
        },
        list: ["Innovatives Design", "SEO-Strategien", "100% responsive Website"],
      },
      {
        title: <>Marketing</>,
        subtitle: (
          <>
            Online
            <br />
            Marketing
          </>
        ),
        description: (
          <>
            Es geht um mehr als nur Reichweite – deine Marke
            <CustomBr byViewport="desktop" /> verdient Gespräche, Vertrauen und echte Verbindungen.
            <CustomBr byViewport="desktop" /> Unsere kreativen Kampagnen stellen sicher, dass du
            nicht <CustomBr byViewport="desktop" />
            nur gesehen, sondern auch gehört wirst. Wir platzieren <CustomBr byViewport="desktop" />
            dich strategisch und mit einem Wow-Effekt, der deine <CustomBr byViewport="desktop" />
            Zielgruppe begeistert und nachhaltig Eindruck hinterlässt.
          </>
        ),
        img: {
          src: "/imgs/services/marketing.png",
          alt: "Marketing",
        },
        list: ["Google Ads, Google Analytics", "Facebook Ads Manager", "Social Media Marketing"],
      },
      {
        title: (
          <>
            Künstliche
            <CustomBr byViewport="mobile" /> Intelligenz
          </>
        ),
        subtitle: (
          <>
            Künstliche
            <br />
            Intelligenz
          </>
        ),
        description: (
          <>
            Künstliche Intelligenz sollte keine Kopfschmerzen bereiten,
            <CustomBr byViewport="desktop" /> sondern dir den Rücken freihalten und alles schneller
            und <CustomBr byViewport="desktop" />
            smarter machen. Wir bringen dir AI-Lösungen, die wie für
            <CustomBr byViewport="desktop" /> dich gemacht sind – sie übernehmen die Routine,
            optimieren <CustomBr byViewport="desktop" />
            Abläufe und sorgen dafür, dass du dich voll auf dein Business
            <CustomBr byViewport="desktop" /> konzentrieren kannst.
          </>
        ),
        img: {
          src: "/imgs/services/intelligenz.png",
          alt: "Künstliche Intelligenz",
        },
        list: ["AI-Blog", "AI-Agent", "AI-Coach"],
      },
      {
        title: <>Mobile Apps</>,
        subtitle: (
          <>
            Mobile
            <br />
            Apps
          </>
        ),
        description: (
          <>
            Apps, die begeistern, bleiben. Mit einem Erlebnis, das einfach
            <CustomBr byViewport="desktop" /> funktioniert und begeistert, wird deine Marke zum
            ständigen <CustomBr byViewport="desktop" />
            Begleiter deiner Kunden, den sie nicht mehr missen möchten.
            <CustomBr byViewport="desktop" /> Sie öffnet Türen zu neuen Möglichkeiten und schafft
            eine <CustomBr byViewport="desktop" />
            Verbindung, die deine Nutzer täglich aufs Neue überzeugt.
          </>
        ),
        img: {
          src: "/imgs/services/mobile.pngmobile.png",
          alt: "Mobile Apps",
        },
        list: [
          "Konzept & Strategie",
          "User Experience & Interface Design",
          "Entwicklung & Technologie",
        ],
        link: {
          title: "mobile apps",
          href: "/dienstleistungen/mobile-apps/",
        },
      },
    ],
  },
  together: {
    title: (
      <>
        Gemeinsam
        <br /> erreichen wir
        <CustomBr byViewport="mobile" /> Grosses
      </>
    ),
    mensages: [
      <>
        Bei <strong>FiberWeb</strong> glauben wir an die Kraft der digitalen Innovation. Unsere
        Philosophie basiert auf einem tiefen Verständnis.
      </>,
      <>
        Bei <strong>FiberWeb</strong> steht der Mensch im Mittelpunkt unserer Technologie. Unsere
        Mission ist es, digitale Erlebnisse zu schaffen, die das Leben bereichern.
      </>,
      <>
        Unsere Stärke liegt in der Verbindung von Kreativität und Technologie.{" "}
        <strong>FiberWeb</strong> setzt neue Maßstäbe in der digitalen Transformation.
      </>,
      <>
        Innovation ist nicht nur ein Ziel, sondern unser Weg. Mit <strong>FiberWeb</strong>{" "}
        gestalten wir die digitale Zukunft gemeinsam.
      </>,

      // repeat

      <>
        Bei <strong>FiberWeb</strong> glauben wir an die Kraft der digitalen Innovation. Unsere
        Philosophie basiert auf einem tiefen Verständnis.
      </>,
      <>
        Bei <strong>FiberWeb</strong> steht der Mensch im Mittelpunkt unserer Technologie. Unsere
        Mission ist es, digitale Erlebnisse zu schaffen, die das Leben bereichern.
      </>,
      <>
        Unsere Stärke liegt in der Verbindung von Kreativität und Technologie.{" "}
        <strong>FiberWeb</strong> setzt neue Maßstäbe in der digitalen Transformation.
      </>,
      <>
        Innovation ist nicht nur ein Ziel, sondern unser Weg. Mit <strong>FiberWeb</strong>{" "}
        gestalten wir die digitale Zukunft gemeinsam.
      </>,
    ],

    logos: [
      {
        src: "/imgs/logos/lm.png",
        alt: "Logo LM Finance",
      },
      {
        src: "/imgs/logos/ha.png",
        alt: "Logo HA-Tech",
      },
      {
        src: "/imgs/logos/dac.png",
        alt: "Logo DAC Innenausbau",
      },
      {
        src: "/imgs/logos/andrade.png",
        alt: "Logo Andrade Gipser + Maler",
      },

      // repete
      {
        src: "/imgs/logos/lm.png",
        alt: "Logo LM Finance",
      },
      {
        src: "/imgs/logos/ha.png",
        alt: "Logo HA-Tech",
      },
      {
        src: "/imgs/logos/dac.png",
        alt: "Logo DAC Innenausbau",
      },
      {
        src: "/imgs/logos/andrade.png",
        alt: "Logo Andrade Gipser + Maler",
      },
    ],
  },
  transform: {
    title: (
      <>
        Zeit für eine digitale <br />
        <span>Transformation?</span>
      </>
    ),
    description: (
      <>
        FiberWeb – das Sprungbrett für deine
        <CustomBr byViewport="desktop" /> digitale Zukunft.
      </>
    ),
  },
  pages: [
    {
      title: "Webdesign",
      description:
        "Deine Website soll nicht nur beeindrucken, sondern ein echtes Erlebnis bieten. Wir kreieren digitale Welten, die deine Besucher fesseln, begeistern und tief ins Herz deiner Marke eintauchen lassen. Einzigartig, intuitiv und so gestaltet, dass deine Nutzer nicht nur klicken, sondern immer wieder zurückkommen.",
      link: "webdesign",
      header: {
        breadcrumb: "Webseiten",
        title: (
          <>
            <span>Webseiten für Marken,</span>
            <CustomBr byViewport="desktop" /> die sich abheben wollen
          </>
        ),
      },
      intro: {
        title: (
          <>
            Perfekt auf dich
            <CustomBr byViewport="desktop" />
            <span> abgestimmt</span>
          </>
        ),
        description: (
          <>
            Bei FiberWeb geht es nicht nur um eine Webseite – es geht
            <CustomBr byViewport="desktop" /> darum, deine Geschichte lebendig zu machen. Wir hören
            dir <CustomBr byViewport="desktop" />
            zu, verstehen deine Vision und setzen sie in ein digitales
            <CustomBr byViewport="desktop" /> Erlebnis um, das deine Kunden berührt. Für uns ist
            jede <CustomBr byViewport="desktop" />
            Entscheidung ein Schritt, um deine Marke noch stärker zu
            <CustomBr byViewport="desktop" /> machen und dir zu helfen, deine Ziele zu erreichen.
          </>
        ),
        img: {
          src: "/imgs/pages/webdesign.png",
          alt: "Webdesign",
        },
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        items: [
          {
            title: <>Webdesign</>,
            text: (
              <>
                Bei uns ist Webdesign mehr als nur schöne Farben und Formen – es ist die Architektur
                <CustomBr byViewport="desktop" /> deiner digitalen Vision. Wir gestalten Websites,
                die nicht nur gut aussehen, sondern <CustomBr byViewport="desktop" />
                auch funktionieren wie ein perfekt geschnittener Anzug. Jede Linie, jeder Button,
                jede <CustomBr byViewport="desktop" />
                Animation ist darauf ausgelegt, deine Besucher auf eine Reise mitzunehmen, die sie
                <CustomBr byViewport="desktop" /> genau dorthin führt, wo du sie haben willst.
              </>
            ),
          },
          {
            title: <>Web Development</>,
            text: (
              <>
                Webentwicklung ist mehr als nur Code – es ist die Bühne für deine Ideen. Ob komplexe
                <CustomBr byViewport="desktop" /> Filterlösungen, hunderte API-Integrationen oder
                faszinierende Animationen – wir <CustomBr byViewport="desktop" />
                schaffen Websites, die nicht nur funktionieren, sondern interagieren und begeistern.
                <CustomBr byViewport="desktop" /> Stell dir vor, deine Website wäre ein lebendiges,
                interaktives Konstrukt, das deine <CustomBr byViewport="desktop" />
                Nutzer auf eine spielerische Reise mitnimmt.
              </>
            ),
          },
          {
            title: <>SEO</>,
            text: (
              <>
                Eine schöne Website allein reicht nicht – sie muss auch gefunden werden. Mit unserer
                <CustomBr byViewport="desktop" /> SEO-Expertise sorgen wir dafür, dass deine Website
                nicht nur schnell lädt, sondern <CustomBr byViewport="desktop" />
                auch bei Google ganz vorne mitspielt. Wir entfernen überflüssigen Code, optimieren
                die <CustomBr byViewport="desktop" />
                Ladezeiten und schaffen die Basis für ein starkes Ranking.
              </>
            ),
          },
          {
            title: <>Support und Hosting</>,
            text: (
              <>
                Unser Support- und Hosting-Service sorgt dafür, dass deine Website sicher, schnell
                <CustomBr byViewport="desktop" /> und zuverlässig läuft. Mit regelmässigen Updates,
                Sicherheitschecks und Backups <CustomBr byViewport="desktop" />
                halten wir alles stabil – bevor du es überhaupt bemerkst. Sollte ein Problem
                auftreten, <CustomBr byViewport="desktop" />
                sind wir schnell zur Stelle, während du dich ganz auf dein Geschäft konzentrieren
                <CustomBr byViewport="desktop" /> kannst. Immer stabil, immer sicher – wir kümmern
                uns um die Technik.
              </>
            ),
          },
        ],
      },
      info: {
        title: (
          <>
            Unsere Kriterien für eine
            <CustomBr byViewport="desktop" />
            <span> aussergewöhnlich Website</span>
          </>
        ),
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        item: [
          {
            id: 1,
            title: <>Sichtbarkeit</>,
            text: (
              <>
                Eine Webseite sollte wie ein klarer <CustomBr byViewport="desktop" />
                blauer Himmel wirken, bei dem alles <CustomBr byViewport="desktop" />
                auf den ersten Blick erkennbar und
                <CustomBr byViewport="desktop" /> übersichtlich ist.
              </>
            ),
          },
          {
            id: 2,
            title: <>Anziehungskraft</>,
            text: (
              <>
                Wie der erste Sonnenstrahl am <CustomBr byViewport="desktop" />
                Morgen zieht deine Webseite die <CustomBr byViewport="desktop" />
                Nutzer sofort an und hält ihre Neugier.
              </>
            ),
          },
          {
            id: 3,
            title: <>Geschwindigkeit</>,
            text: (
              <>
                So flink wie ein Blitz, ohne <CustomBr byViewport="desktop" />
                Ladepausen oder Ablenkungen, nur <CustomBr byViewport="desktop" />
                schnelle und reibungslose Ergebnisse.
              </>
            ),
          },
          {
            id: 4,
            title: <>Zieltreffer</>,
            text: (
              <>
                Jeder Klick fühlt sich wie ein <CustomBr byViewport="desktop" />
                Volltreffer an und liefert genau das, <CustomBr byViewport="desktop" />
                wonach deine Besucher suchen.
              </>
            ),
          },
        ],
      },
      project: {
        title: (
          <>
            Sehen Sie sich weitere unserer
            <CustomBr byViewport="desktop" /> <span>Dienstleistungen an</span>
          </>
        ),
        imgs: [
          {
            title: "Online Marketing",
            img: {
              src: "/imgs/services/online-marketing.png",
              alt: "Online Marketing",
            },
            tags: ["Social Media", "Google Ads"],
            link: {
              href: "/dienstleistungen/marketing/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
          {
            title: "Künstliche Intelligenz (KI)",
            img: {
              src: "/imgs/services/ki.png",
              alt: "Online Marketing",
            },
            tags: ["AI-Agent", "AI-Blog"],
            link: {
              href: "/dienstleistungen/kuenstliche-intelligenz/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
        ],
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
      },
    },
    {
      title: "Marketing",
      description:
        "Stell dir vor, dein Unternehmen ist ein Rennwagen, und wir sind deine Boxencrew. Mit unseren kreativen und strategischen Online-Marketing-Dienstleistungen geben wir dir den Turbo, den du brauchst, um die Konkurrenz weit hinter dir zu lassen. Ob Facebook Ads, Google Ads oder Social Media Marketing – wir bringen dich auf die Überholspur und sorgen dafür, dass deine Marke genau dort gesehen wird, wo es zählt.",
      link: "marketing",
      header: {
        breadcrumb: "Marketing",
        title: (
          <>
            <span>Wir machen deine Marke,</span>
            <CustomBr byViewport="desktop" /> unvergesslich
          </>
        ),
      },
      intro: {
        title: (
          <>
            Boost Your
            <br />
            <span> Business</span>
          </>
        ),
        description: (
          <>
            Stell dir vor, dein Unternehmen ist ein Rennwagen, und wir
            <CustomBr byViewport="desktop" /> sind deine Boxencrew. Mit unseren kreativen und
            <CustomBr byViewport="desktop" /> strategischen Online-Marketing-Dienstleistungen geben
            wir dir den Turbo, den du <CustomBr byViewport="desktop" />
            brauchst, um die Konkurrenz weit hinter dir zu lassen.
            <CustomBr byViewport="desktop" /> Ob Facebook Ads, Google Ads oder Social Media
            Marketing – wir bringen dich auf die <CustomBr byViewport="desktop" />
            Überholspur und sorgen dafür, dass deine Marke genau dort gesehen wird, wo es zählt.
          </>
        ),
        img: {
          src: "/imgs/pages/webdesign.png",
          alt: "Marketing",
        },
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        items: [
          {
            title: <>Google Ads, Google Analytics</>,
            text: (
              <>
                Wir optimieren deine Werbekampagnen mit
                <CustomBr byViewport="desktop" /> präzisen Analysen und datengetriebenen
                <CustomBr byViewport="desktop" /> Entscheidungen, um maximale Sichtbarkeit
                <CustomBr byViewport="desktop" /> zu garantieren.
              </>
            ),
          },
          {
            title: <>Facebook Ads Manager</>,
            text: (
              <>
                Mit unserer Expertise im Facebook Ads Manager
                <CustomBr byViewport="desktop" /> erreichen wir gezielt deine Zielgruppe,
                <CustomBr byViewport="desktop" /> um die besten Conversion Rates zu erzielen.
              </>
            ),
          },
          {
            title: <>Social Media Marketing</>,
            text: (
              <>
                Wir nutzen Social Media Plattformen, um deine
                <CustomBr byViewport="desktop" /> Marke ins Zentrum der Aufmerksamkeit zu stellen
                <CustomBr byViewport="desktop" /> und nachhaltig zu wachsen.
              </>
            ),
          },
          {
            title: <>TikTok Ads</>,
            text: (
              <>
                Mit kreativen TikTok-Kampagnen bringen wir
                <CustomBr byViewport="desktop" /> frischen Wind in dein Marketing
                <CustomBr byViewport="desktop" /> und erreichen neue Zielgruppen.
              </>
            ),
          },
        ],
      },
      info: {
        title: (
          <>
            Magnetisches Marketing – Mit
            <CustomBr byViewport="desktop" />
            <span> voller Kraft zum Erfolg</span>
          </>
        ),
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        item: [
          {
            id: 1,
            title: <>Unwiderstehliche Anziehung</>,
            text: (
              <>
                Unser Marketing packt deine Zielgruppe direkt
                <CustomBr byViewport="desktop" /> am Kragen – jeder Post, jede Kampagne zieht
                <CustomBr byViewport="desktop" /> sie in den Bann und lässt sie nicht mehr los.
              </>
            ),
          },
          {
            id: 2,
            title: <>Laserfokus auf Wirkung</>,
            text: (
              <>
                Wie ein präziser Laserschnitt trifft unser
                <CustomBr byViewport="desktop" /> Marketing genau ins Schwarze – dort, wo es zählt,
                <CustomBr byViewport="desktop" /> und sorgt für durchschlagende Ergebnisse.
              </>
            ),
          },
          {
            id: 3,
            title: <>Ideen, die knallen</>,
            text: (
              <>
                Unsere Kampagnen sind keine 08/15-Lösungen –
                <CustomBr byViewport="desktop" /> sie explodieren förmlich in der digitalen
                <CustomBr byViewport="desktop" /> Welt und hinterlassen bleibende Eindrücke.
              </>
            ),
          },
          {
            id: 4,
            title: <>Erfolg im Überholmodus</>,
            text: (
              <>
                Unser Marketing ist nicht nur schnell, es fliegt
                <CustomBr byViewport="desktop" /> förmlich über die Ziellinie – mit messbaren
                <CustomBr byViewport="desktop" /> Ergebnissen, die dir den nötigen Vorsprung
                verschaffen.
              </>
            ),
          },
        ],
      },
      project: {
        title: (
          <>
            Sehen Sie sich weitere unserer
            <CustomBr byViewport="desktop" /> <span>Dienstleistungen an</span>
          </>
        ),
        imgs: [
          {
            title: "Web-Design UX-UI Design",
            img: {
              src: "/imgs/services/online-marketing.png",
              alt: "Web-Design UX-UI Design",
            },
            tags: ["Webdesign", "UX-UI Design"],
            link: {
              href: "/dienstleistungen/webdesign/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
          {
            title: "Künstliche Intelligenz (KI)",
            img: {
              src: "/imgs/services/ki.png",
              alt: "Künstliche Intelligenz (KI)",
            },
            tags: ["AI-Agent", "AI-Blog"],
            link: {
              href: "/dienstleistungen/kuenstliche-intelligenz/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
        ],
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
      },
    },
    {
      title: "Künstliche Intelligenz",
      description:
        "Stell dir vor, deine täglichen Aufgaben laufen wie von selbst – eine unsichtbare Maschine, die unermüdlich für dich arbeitet. KI setzt dein Business auf Autopilot, während du das Steuer in Richtung Wachstum lenkst. Routine wird zur Vergangenheit, und der Weg zur Dominanz ist frei. Automatisiere heute und beherrsche morgen – die Zukunft wartet auf dich.",
      link: "kuenstliche-intelligenz",
      header: {
        breadcrumb: "Künstliche Intelligenz",
        title: (
          <>
            <span>Automatisiere heute,</span>
            <CustomBr byViewport="desktop" /> dominiere morgen.
          </>
        ),
      },
      intro: {
        title: (
          <>
            Work smart, <br />
            <span>not hard!</span>
          </>
        ),
        description: (
          <>
            Stell dir vor, deine täglichen Aufgaben laufen wie von
            <CustomBr byViewport="desktop" /> selbst – eine unsichtbare Maschine, die
            <CustomBr byViewport="desktop" /> unermüdlich für dich arbeitet. KI setzt dein
            <CustomBr byViewport="desktop" /> Business auf Autopilot, während du das Steuer in
            <CustomBr byViewport="desktop" /> Richtung Wachstum lenkst.
          </>
        ),
        img: {
          src: "/imgs/pages/webdesign.png",
          alt: "Künstliche Intelligenz",
        },
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        items: [
          {
            title: <>AI-Agent</>,
            text: (
              <>
                Dein smarter Assistent auf deiner Website. Unser
                <CustomBr byViewport="desktop" /> AI-Agent beantwortet rund um die Uhr Fragen
                <CustomBr byViewport="desktop" /> deiner Kunden und sorgt für nahtlose
                <CustomBr byViewport="desktop" /> Interaktionen.
              </>
            ),
          },
          {
            title: <>AI-Coach</>,
            text: (
              <>
                Dein digitaler Schulungsassistent hilft dir,
                <CustomBr byViewport="desktop" /> professionelle Lernprogramme zu erstellen
                <CustomBr byViewport="desktop" /> und effizient umzusetzen.
              </>
            ),
          },
          {
            title: <>AI-Blog</>,
            text: (
              <>
                Unser AI-Blog erstellt regelmäßig relevante
                <CustomBr byViewport="desktop" /> Inhalte, die dein SEO verbessern und
                <CustomBr byViewport="desktop" /> organischen Traffic erhöhen.
              </>
            ),
          },
          {
            title: <>Personalisierte AI</>,
            text: (
              <>
                Individuelle AI-Lösungen, maßgeschneidert für
                <CustomBr byViewport="desktop" /> deine Geschäftsanforderungen, um dein
                <CustomBr byViewport="desktop" /> Unternehmen optimal zu unterstützen.
              </>
            ),
          },
        ],
      },
      info: {
        title: (
          <>
            Unsere Kriterien für eine
            <CustomBr byViewport="desktop" />
            <span> aussergewöhnlich Website</span>
          </>
        ),
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        item: [
          {
            id: 1,
            title: <>Blitzschnelle Antworten</>,
            text: (
              <>
                Dein AI-Agent liefert Antworten in
                <CustomBr byViewport="desktop" /> Sekundenschnelle – reaktionsschnell,
                <CustomBr byViewport="desktop" /> zuverlässig und immer einsatzbereit.
              </>
            ),
          },
          {
            id: 2,
            title: <>Intuitive Interaktionen</>,
            text: (
              <>
                Unsere AI-Dienstleistungen leiten deine
                <CustomBr byViewport="desktop" /> Nutzer intuitiv und lösen Probleme
                <CustomBr byViewport="desktop" /> effizient.
              </>
            ),
          },
          {
            id: 3,
            title: <>Sicherheit auf höchstem Niveau</>,
            text: (
              <>
                Unsere AI-Lösungen garantieren maximale
                <CustomBr byViewport="desktop" /> Sicherheit für sensible Daten.
              </>
            ),
          },
          {
            id: 4,
            title: <>Skalierbarkeit ohne Grenzen</>,
            text: (
              <>
                Unsere AI wächst mit deinem Business –
                <CustomBr byViewport="desktop" /> flexibel und leistungsstark für
                <CustomBr byViewport="desktop" /> jede Herausforderung.
              </>
            ),
          },
        ],
      },
      project: {
        title: (
          <>
            Sehen Sie sich weitere unserer
            <CustomBr byViewport="desktop" /> <span>Dienstleistungen an</span>
          </>
        ),
        imgs: [
          {
            title: "Online Marketing",
            img: {
              src: "/imgs/services/online-marketing.png",
              alt: "Online Marketing",
            },
            tags: ["Social Media", "Google Ads"],
            link: {
              href: "/dienstleistungen/marketing/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
          {
            title: "Mobile Apps",
            img: {
              src: "/imgs/services/mobile-apps.png",
              alt: "Mobile Apps",
            },
            tags: ["Konzept & Strategie", "Launch"],
            link: {
              href: "/dienstleistungen/mobile-apps/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
        ],
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
      },
    },
    {
      title: "Mobile Apps",
      description:
        "Deine App, dein direkter Draht zu Kunden – immer dabei, immer relevant. Mit einer einzigartigen mobilen Experience bringst du deine Marke ins tägliche Leben deiner Nutzer. Begeistere mit jedem Klick und baue Verbindungen auf, die langfristig wirken. Deine App ist mehr als Technik – sie ist das Herzstück deines digitalen Erfolgs.",
      link: "mobile-apps",
      header: {
        breadcrumb: "Mobile Apps",
        title: (
          <>
            <span>Deine App,</span>
            <CustomBr byViewport="desktop" /> grenzenlose Möglichkeiten.
          </>
        ),
      },
      intro: {
        title: (
          <>
            Perfekt auf dich
            <CustomBr byViewport="desktop" />
            <span> abgestimmt</span>
          </>
        ),
        description: (
          <>
            Deine App, dein direkter Draht zu Kunden – immer dabei,
            <CustomBr byViewport="desktop" /> immer relevant. Mit einer einzigartigen mobilen
            Experience
            <CustomBr byViewport="desktop" /> bringst du deine Marke ins tägliche Leben deiner
            Nutzer.
            <CustomBr byViewport="desktop" /> Begeistere mit jedem Klick und baue Verbindungen auf,
            die
            <CustomBr byViewport="desktop" /> langfristig wirken.
          </>
        ),
        img: {
          src: "/imgs/pages/webdesign.png",
          alt: "Mobile Apps",
        },
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        items: [
          {
            title: <>Konzept & Strategie</>,
            text: (
              <>
                Von der Idee zur App: Wir entwickeln eine klare
                <CustomBr byViewport="desktop" /> Strategie, die deine Vision in eine mobile
                <CustomBr byViewport="desktop" /> Realität verwandelt.
              </>
            ),
          },
          {
            title: <>User Experience & Interface Design</>,
            text: (
              <>
                Wir kreieren intuitive Designs, die deine Nutzer
                <CustomBr byViewport="desktop" /> begeistern und die Bedienung deiner App
                <CustomBr byViewport="desktop" /> zum Vergnügen machen.
              </>
            ),
          },
          {
            title: <>Entwicklung & Technologie</>,
            text: (
              <>
                Mit modernsten Technologien entwickeln wir Apps,
                <CustomBr byViewport="desktop" /> die stabil, sicher und leistungsstark sind.
              </>
            ),
          },
          {
            title: <>Launch & Optimierung</>,
            text: (
              <>
                Wir sorgen für einen reibungslosen Launch und
                <CustomBr byViewport="desktop" /> optimieren deine App kontinuierlich
                <CustomBr byViewport="desktop" /> für maximale Performance.
              </>
            ),
          },
        ],
      },
      info: {
        title: (
          <>
            Unsere Kriterien für eine
            <CustomBr byViewport="desktop" />
            <span> aussergewöhnlich App</span>
          </>
        ),
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        item: [
          {
            id: 1,
            title: <>Rasante Geschwindigkeit</>,
            text: (
              <>
                Deine App muss sich wie ein Hochgeschwindigkeitszug
                <CustomBr byViewport="desktop" /> anfühlen – schnell, reibungslos und
                <CustomBr byViewport="desktop" /> immer einsatzbereit.
              </>
            ),
          },
          {
            id: 2,
            title: <>Erlebnis auf den Punkt</>,
            text: (
              <>
                Jede Berührung zählt. Wir gestalten deine App so,
                <CustomBr byViewport="desktop" /> dass sie sofort begeistert und deine
                <CustomBr byViewport="desktop" /> Nutzer ans Ziel bringt.
              </>
            ),
          },
          {
            id: 3,
            title: <>Sicherheit als Standard</>,
            text: (
              <>
                Deine App ist eine Festung – maximale Sicherheit
                <CustomBr byViewport="desktop" /> steht an erster Stelle.
              </>
            ),
          },
          {
            id: 4,
            title: <>Grenzenloses Wachstum</>,
            text: (
              <>
                Egal, wie groß dein Business wird, deine App wächst
                <CustomBr byViewport="desktop" /> mit und bleibt bereit für alles, was kommt.
              </>
            ),
          },
        ],
      },
      project: {
        title: (
          <>
            Sehen Sie sich weitere unserer
            <CustomBr byViewport="desktop" /> <span>Dienstleistungen an</span>
          </>
        ),
        imgs: [
          {
            title: "Web-Design UX-UI Design",
            img: {
              src: "/imgs/services/online-marketing.png",
              alt: "Web-Design UX-UI Design",
            },
            tags: ["Webdesign", "UX-UI Design"],
            link: {
              href: "/dienstleistungen/webdesign/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
          {
            title: "Künstliche Intelligenz (KI)",
            img: {
              src: "/imgs/services/ki.png",
              alt: "Künstliche Intelligenz (KI)",
            },
            tags: ["AI-Agent", "AI-Blog"],
            link: {
              href: "/dienstleistungen/kuenstliche-intelligenz/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
        ],
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
      },
    },
    {
      title: "Mobile Apps",
      description:
        "Deine App, dein direkter Draht zu Kunden – immer dabei, immer relevant. Mit einer einzigartigen mobilen Experience bringst du deine Marke ins tägliche Leben deiner Nutzer. Begeistere mit jedem Klick und baue Verbindungen auf, die langfristig wirken. Deine App ist mehr als Technik – sie ist das Herzstück deines digitalen Erfolgs.",
      link: "mobile-apps",
      header: {
        breadcrumb: "Mobile Apps",
        title: (
          <>
            <span>Deine App,</span>
            <CustomBr byViewport="desktop" /> grenzenlose Möglichkeiten.
          </>
        ),
      },
      intro: {
        title: (
          <>
            Perfekt auf dich
            <CustomBr byViewport="desktop" />
            <span> abgestimmt</span>
          </>
        ),
        description: (
          <>
            Deine App, dein direkter Draht zu Kunden – immer dabei,
            <CustomBr byViewport="desktop" /> immer relevant. Mit einer einzigartigen mobilen
            Experience
            <CustomBr byViewport="desktop" /> bringst du deine Marke ins tägliche Leben deiner
            Nutzer.
            <CustomBr byViewport="desktop" /> Begeistere mit jedem Klick und baue Verbindungen auf,
            die
            <CustomBr byViewport="desktop" /> langfristig wirken.
          </>
        ),
        img: {
          src: "/imgs/pages/mobile-apps.png",
          alt: "Mobile Apps",
        },
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        items: [
          {
            title: <>Konzept & Strategie</>,
            text: (
              <>
                Von der Idee zur App: Wir entwickeln eine klare
                <CustomBr byViewport="desktop" /> Strategie, die deine Vision in eine mobile
                <CustomBr byViewport="desktop" /> Realität verwandelt.
              </>
            ),
          },
          {
            title: <>User Experience & Interface Design</>,
            text: (
              <>
                Wir kreieren intuitive Designs, die deine Nutzer
                <CustomBr byViewport="desktop" /> begeistern und die Bedienung deiner App
                <CustomBr byViewport="desktop" /> zum Vergnügen machen.
              </>
            ),
          },
          {
            title: <>Entwicklung & Technologie</>,
            text: (
              <>
                Mit modernsten Technologien entwickeln wir Apps,
                <CustomBr byViewport="desktop" /> die stabil, sicher und leistungsstark sind.
              </>
            ),
          },
          {
            title: <>Launch & Optimierung</>,
            text: (
              <>
                Wir sorgen für einen reibungslosen Launch und
                <CustomBr byViewport="desktop" /> optimieren deine App kontinuierlich
                <CustomBr byViewport="desktop" /> für maximale Performance.
              </>
            ),
          },
        ],
      },
      info: {
        title: (
          <>
            Unsere Kriterien für eine
            <CustomBr byViewport="desktop" />
            <span> aussergewöhnlich App</span>
          </>
        ),
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
        item: [
          {
            id: 1,
            title: <>Rasante Geschwindigkeit</>,
            text: (
              <>
                Deine App muss sich wie ein Hochgeschwindigkeitszug
                <CustomBr byViewport="desktop" /> anfühlen – schnell, reibungslos und
                <CustomBr byViewport="desktop" /> immer einsatzbereit.
              </>
            ),
          },
          {
            id: 2,
            title: <>Erlebnis auf den Punkt</>,
            text: (
              <>
                Jede Berührung zählt. Wir gestalten deine App so,
                <CustomBr byViewport="desktop" /> dass sie sofort begeistert und deine
                <CustomBr byViewport="desktop" /> Nutzer ans Ziel bringt.
              </>
            ),
          },
          {
            id: 3,
            title: <>Sicherheit als Standard</>,
            text: (
              <>
                Deine App ist eine Festung – maximale Sicherheit
                <CustomBr byViewport="desktop" /> steht an erster Stelle.
              </>
            ),
          },
          {
            id: 4,
            title: <>Grenzenloses Wachstum</>,
            text: (
              <>
                Egal, wie groß dein Business wird, deine App wächst
                <CustomBr byViewport="desktop" /> mit und bleibt bereit für alles, was kommt.
              </>
            ),
          },
        ],
      },
      project: {
        title: (
          <>
            Sehen Sie sich weitere unserer
            <CustomBr byViewport="desktop" /> <span>Dienstleistungen an</span>
          </>
        ),
        imgs: [
          {
            title: "Web-Design UX-UI Design",
            img: {
              src: "/imgs/services/online-marketing.png",
              alt: "Web-Design UX-UI Design",
            },
            tags: ["Webdesign", "UX-UI Design"],
            link: {
              href: "/dienstleistungen/webdesign/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
          {
            title: "Künstliche Intelligenz (KI)",
            img: {
              src: "/imgs/services/ki.png",
              alt: "Künstliche Intelligenz (KI)",
            },
            tags: ["AI-Agent", "AI-Blog"],
            link: {
              href: "/dienstleistungen/kuenstliche-intelligenz/",
              title: "Mehr erfahren",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
            },
          },
        ],
        link: {
          title: "Lass uns loslegen",
          href: "https://web.whatsapp.com/send?phone=+41765398750",
        },
      },
    },
  ],
};
