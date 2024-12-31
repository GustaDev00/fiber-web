import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";
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
      { title: "Dienstleistungen", href: "/dienstleistungen" },
      { title: "über uns", href: "/uber-uns" },
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
        content: "Sommerweg 27 8750 Glarus",
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
      },
      {
        title: "Marketing",
      },
      {
        title: "Intelligenz",
      },
      {
        title: "Mobile Apps",
      },
    ],
    buttons: {
      contact: {
        title: "Kontaktieren Sie uns",
        href: "#",
      },
      whatsapp: {
        title: "Lass uns loslegen",
        href: "#",
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
      id: 1,
      img: {
        src: "/imgs/services/dac.png",
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
      id: 3,
      img: {
        src: "/imgs/services/andrade.png",
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
          alt: "Marketing",
        },
        list: ["Innovatives Design", "SEO-Strategien", "100% responsive Website"],
      },
      {
        title: (
          <>
            Künstliche
            <CustomBr byViewport="mobile" /> Intelligenz
          </>
        ),
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
          alt: "Künstliche Intelligenz",
        },
        list: ["Innovatives Design", "SEO-Strategien", "100% responsive Website"],
      },
      {
        title: <>Mobile Apps</>,
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
          alt: "Mobile Apps",
        },
        list: ["Innovatives Design", "SEO-Strategien", "100% responsive Website"],
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
};
