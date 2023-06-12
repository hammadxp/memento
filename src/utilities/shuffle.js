export default function shuffle() {
  const images = [
    { path: "/images/html5.png" },
    { path: "/images/css.png" },
    { path: "/images/js.png" },
    { path: "/images/react.png" },
    { path: "/images/flutter.png" },
    { path: "/images/node.png" },
    { path: "/images/ts.png" },
    { path: "/images/jquery.png" },
    { path: "/images/go.png" },
    { path: "/images/dart.png" },
  ];

  const shuffledImages = [...images, ...images]
    .sort(() => Math.random() - 0.5)
    .map((image) => {
      return { id: Math.random(), ...image };
    });

  return shuffledImages;
}
