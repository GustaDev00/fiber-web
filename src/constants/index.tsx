import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";
import { TwitterIcon } from "@/components/svgs/twitter";

export default {
  data: {
    navigation: [
      { title: "Home", href: "/", icon: HomeIcon },
      { title: "Dienstleistungen", href: "/dienstleistungen" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Kontakt", href: "/kontakt" },
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
    title: "Unsere Philosofie",
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
        title: "Webdesign",
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
        title: "Marketing",
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
        title: "Künstliche Intelligenz",
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
        title: "Mobile Apps",
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
        <br /> erreichen wir Grosses
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
};
