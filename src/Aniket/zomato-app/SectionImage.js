import Image from "./components/Images";

const BE_IMAGES = [
  {
    url: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/640px-Pizza-3007395.jpg",
  },
  {
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
  },
];

let MY_IMAGES = [];

for (let i = 0; i < BE_IMAGES.length; i++) {
  let EACH_IMAGE = BE_IMAGES[i];
  MY_IMAGES.push(<Image myurl={EACH_IMAGE.url} />);
}

export default function SectionImage() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {MY_IMAGES}
    </div>
  );
}
