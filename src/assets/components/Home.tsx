import Container from "./Container";
import Hero from "./Hero";
import Gallery from "./reusable/Galery";
import Nav from "./reusable/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />{" "}
      <div className="mx-auto w-screen max-w-max h-fit min-h-screen bg-yellow-300 overflow-hidden ">
        <Container />
      </div>
    </>
  );
}
