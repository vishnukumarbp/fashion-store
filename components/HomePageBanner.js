import Image from "next/image";
import SlickSlider from "./SlickSlider";

function HomePageBanner() {
  return (
    <SlickSlider
      childrens={[
        <div key="1">
          <Image
            width="1440"
            height="400"
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&h=400&q=80&fp-y=0"
            objectFit="contain"
          />
        </div>,
        <div key="2">
          <Image
            width="1440"
            height="400"
            src="https://images.unsplash.com/photo-1536896528287-3129cdc56be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&h=400&q=80&fp-y=0.1"
            objectFit="contain"
          />
        </div>,
        <div key="3">
          <Image
            width="1440"
            height="400"
            src="https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&h=400&q=80&fp-y=0.4"
            objectFit="contain"
          />
        </div>,
      ]}
      customSettings={{
        className: "SlickSlider",
      }}
    />
  );
}

export default HomePageBanner;
