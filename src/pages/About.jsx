import "./About.css";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap sm:gap-x-3 items-center pt-10 justify-center">
        <h1 className="text-5xl font-bold  sm:text-6xl">We love</h1>
        <div className="rounded-md bg-primary ">
          <div className="stat">
            <div className="stat-title text-primary-content text-5xl font-bold">
              Comfy
            </div>
          </div>
        </div>
        <div class="box flex items-center content-center"></div>
      </div>
    </>
  );
};
export default About;
