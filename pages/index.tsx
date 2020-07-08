import React from "react";

import {
  AssemblyLine,
  RouteType,
  PathType,
  MaterialType,
  SystemList,
  FormType,
  Logs,
} from "../components/LifePlastic/Interfaces/Interfaces";
import { RootRoutes } from "../components/LifePlastic/data/RootRoutes";
import { CombinedRoutes } from "../components/LifePlastic/Routes/CombinedRoutes";

import { Plastic } from "../components/LifePlastic/Plastic/PlasticParticles";
import { ParticlePET } from "../components/LifePlastic/Plastic/ParticlePET";
import { ParticleHDPE } from "../components/LifePlastic/Plastic/ParticleHDPE";
import { ParticlePP } from "../components/LifePlastic/Plastic/ParticlePP";
import { ParticlePS } from "../components/LifePlastic/Plastic/ParticlePS";
import { ParticleLDPE } from "../components/LifePlastic/Plastic/ParticleLDPE";
import { ParticlePVC } from "../components/LifePlastic/Plastic/ParticlePVC";
import { ParticleOTHER } from "../components/LifePlastic/Plastic/ParticleOTHER";
import { ParticleGARBAGE } from "../components/LifePlastic/Plastic/ParticleGARBAGE";
import { ParticlePellet } from "../components/LifePlastic/Plastic/ParticlePellet";
import { ParticleBale } from "../components/LifePlastic/Plastic/ParticleBale";

import { GroundFactories } from "../components/LifePlastic/GroundFactories";
import { SkyFactories } from "../components/LifePlastic/SkyFactories";
import { Bins } from "../components/LifePlastic/Bins";
import { Routes } from "../components/LifePlastic/Routes";
import { GroundPipesBackground } from "../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../components/LifePlastic/SkyPipesForeground";
import { nanoid } from "nanoid";
import { StartingSystems } from "../components/LifePlastic/data/StartingSystems";
import { FactoryButton } from "../components/LifePlastic/Buttons";
import UIButtons from "../components/LifePlastic/UI/NavBarRedesign";
import {
  Diagram,
  TutorialTitleDIV,
  TutorialDIV,
  SKYBACKGROUND,
  NavBar,
  Toggle,
  Footer,
  FooterBackground,
} from "../components/LifePlastic/styles/PlasticStyles";
import RevealBox from "../components/LifePlastic/UI/RevealBox";
import { GarbageBackground } from "../components/LifePlastic/Garbage";
import { GarbagePile } from "../components/LifePlastic/Plastic/GarbagePile";
import TutorialLines from "../components/LifePlastic/TutorialLines";
import Example1 from "../components/LifePlastic/examples/example1";
import Example2 from "../components/LifePlastic/examples/example2";
import Example3 from "../components/LifePlastic/examples/example3";
import { AddLabels } from "../components/LifePlastic/AddLabels";
import TutorialOverlay from "../components/LifePlastic/UI/TutorialOverlay";
import SymbolAnatomy from "../components/LifePlastic/examples/SymbolAnatomy";
import FactorySigns from "../components/LifePlastic/FactorySigns";

export const plasticColourPicker = (type: keyof FormType) => {
  switch (type) {
    case "PET":
      return "#d50000";
    case "HDPE":
      return "#aa00ff";
    case "PP":
      return "#304ffe";
    case "PS":
      return "#00b8d4";
    case "LDPE":
      return "#00c853";
    case "PVC":
      return "#ffd600";
    case "OTHER":
      return "#ff6d00";
    case "MIXED":
      return "#78909c";
    case "GARBAGE":
      return "#424242";
    default:
      return "#424242";
  }
};

const Experiment013: React.FC = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>(StartingSystems);
  const [garbagePile, setGarbagePile] = React.useState<number>(0);
  const [tutorial, setTutorial] = React.useState<boolean>(true);
  const [triggerTutorial, setTriggerTutorial] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (garbagePile >= 2) {
      setTutorial(false);
    }
  }, [garbagePile]);

  const pathBuilder = (path: RouteType): Array<string> => {
    if (path.possible.length === path.probability.length) {
      let arrayReturn: Array<string> = [];
      for (let x = 0; x < path.possible.length; x++) {
        for (let y = 0; y < path.probability[x]; y++) {
          arrayReturn.push(path.possible[x]);
        }
      }
      return arrayReturn;
    } else {
      console.log(
        `The Routes and Probabilities for ${path.parent} don't match!`
      );
      return ["none"];
    }
  };

  const pickPath = (path: RouteType): PathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Pick random path
      const builtPaths = pathBuilder(path);
      const picked = Math.floor(Math.random() * builtPaths.length);
      return routeLookUp(builtPaths[picked]);
      //else, goes to waste
    } else return routeLookUp(path.toWaste);
  };

  const nextPath = (item: MaterialType) => {
    const currentPath = RootRoutes.find((i) => i.parent === item.name);
    if (currentPath) {
      const nextPath = pickPath(currentPath);
      if (nextPath.type != "undefined") {
        for (var x = 0; x < nextPath.amount; x++)
          nextMaterial(setMaterials)(item, nextPath);
      } else {
        addGarbage(setMaterials)(item);
      }
    } else {
      addGarbage(setMaterials)(item);
    }
  };

  const nextMaterial = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    if (nextPath.type != "undefined") {
      setState((state) => {
        const modifiedMaterials = state.materials.concat([
          {
            name: nextPath.name,
            delay: Math.floor(Math.random() * 10) * 100,
            id: newId,
            type: nextPath.type,
            plastic: nextPath.plastic,
            version: parent.version,
            path: `#${nextPath.name}`,
            highlight: parent.highlight,
          },
        ]);
        const materials = modifiedMaterials.filter((i) => parent.id != i.id);
        return { ...state, materials };
      });
    }
  };

  const addGarbage = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType) => {
    setGarbagePile(garbagePile + 1);
    setState((state) => {
      const materials = state.materials.filter((i) => parent.id != i.id);
      return { materials };
    });
  };

  const routeLookUp = (route: string): PathType => {
    const foundRoute = CombinedRoutes.find((i) => i.name === route);
    if (foundRoute) {
      return foundRoute;
    } else {
      return {
        name: "undefined",
        plastic: "undefined",
        type: "undefined",
        amount: 1,
        path: "undefined",
      };
    }
  };

  const addRecyclable = (route: string) => {
    const newId = nanoid();
    const startRoute = routeLookUp(route);
    setMaterials((state) => {
      const materials = state.materials.concat({
        name: startRoute.name,
        delay: 0,
        id: newId,
        type: startRoute.type,
        plastic: startRoute.plastic,
        version: Math.floor(Math.random() * 2),
        path: `#${startRoute.name}`,
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  const toggleSystem = (id: any) => {
    if (Object.keys(systems).find((i) => i == id)) {
      const verifiedId: keyof SystemList = id;
      const selectedSystem = systems[verifiedId];
      if (selectedSystem) {
        setSystems({ ...systems, [verifiedId]: false });
      } else {
        setSystems({ ...systems, [verifiedId]: true });
      }
    } else {
      console.log(`${id} is not a valid ID`);
    }
  };

  return (
    <div style={{ margin: "auto", width: "1080px", height: "4428px" }}>
      {tutorial ? (
        <RevealBox show={triggerTutorial} onRemove={() => setTutorial(false)}>
          <TutorialTitleDIV>
            <h1>Life of Plastic</h1>
            <h3>... it's fantastic!</h3>
          </TutorialTitleDIV>
          <TutorialDIV>
            <p>
              Plastic, like most consumable packaging, has for a long time been
              a through-put design. Resources would be used to make bottles,
              which would be consumed and eventually thrown away. In this model,
              resources move in one direction, from production to consumption.
            </p>
            <Example1 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              Thankfully, in the 21st century, we have recycling which promises
              to loop the resources back into the production cycle and divert
              them from becoming waste. In an ideal system, resources would
              never reach landfills and instead be caught in a regenerative
              cycle.
            </p>
            <Example2 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              Unfortunately, our current recycling system is just not that
              efficent and we are left with some material being recycled back,
              while some is still diverted to landfills. While every recycling
              system is different, in general PET plastic bottles could be
              reused up to 7 times. This is roughly 85% efficent.
            </p>
            <Example3 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              However, not all plastic is created equal. There are 7 types of
              plastic that can be recycled, though most places will only deal
              with PET, HDPE and PP. The technology exists to recycle the other
              4 types but depending on the supply and demand, they might not be
              available in your municipality.
            </p>
            <SymbolAnatomy />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              To start exploring, what these relationships look like, click the
              PET button below and then add plastic with the recycle symbol. If
              you're unsure what to do, there is a tutorial in the top right.
              Have fun exploring!
            </p>
          </TutorialDIV>
          <TutorialLines />
          <div style={{ position: "relative", zIndex: 10, top: -30 }}>
            <NavBar>
              <div style={{ height: "60px", width: "100px" }} />
              <Toggle
                onClick={() => {
                  setTriggerTutorial(true);
                }}
              >
                PET
              </Toggle>
            </NavBar>
          </div>
        </RevealBox>
      ) : (
        <div />
      )}
      <Diagram>
        <div style={{ position: "absolute", zIndex: 9 }}>
          <TutorialTitleDIV>
            <h1>Life of Plastic</h1>
            <h3>... it's fantastic!</h3>
          </TutorialTitleDIV>
          {tutorial ? (
            <div />
          ) : (
            <div>
              <button
                style={{
                  background: `${SKYBACKGROUND}`,
                  zIndex: 3,
                  cursor: "pointer",
                  float: "right",
                  margin: "10px 30px",
                  overflow: "visible",
                  display: "block",
                  border: "none",
                  outline: "none",
                  fontSize: "18px",
                  lineHeight: "83%",
                  letterSpacing: "3px",
                  fontFamily: "Muli,sans-serif",
                  fontWeight: 200,
                  position: "relative",
                  top: -150,
                  left: 100,
                }}
                onClick={() => {
                  setMaterials({
                    materials: [],
                  });
                  setTutorial(true);
                  setTriggerTutorial(false);
                }}
              >
                Back to Intro
              </button>
              {mode ? <div></div> : <TutorialOverlay />}
            </div>
          )}
        </div>

        <GarbagePile GarbagePile={garbagePile} />
        <AddLabels />
        <GarbageBackground />
        <SkyPipesBackground systems={systems} />
        <GroundPipesBackground systems={systems} />
        <GroundFactories systems={systems} />
        <SkyFactories systems={systems} />
        <GroundPipesForeground systems={systems} />
        <SkyPipesForeground systems={systems} />
        <Bins systems={systems} />
        <FactorySigns systems={systems} />
        <Routes
          routeStyle={{
            GarbageLines: "none",
            MixedLines: "none",
            BaleLines: "none",
            PelletLines: "none",
            RegrindLines: "none",
            HandLines: "none",
            ProductsLines: "none",
            MissingLines: "none",
          }}
        />

        {materials.materials.map((item) => {
          switch (item.type) {
            case "PET":
              return (
                <ParticlePET
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "HDPE":
              return (
                <ParticleHDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PP":
              return (
                <ParticlePP
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PS":
              return (
                <ParticlePS
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "LDPE":
              return (
                <ParticleLDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PVC":
              return (
                <ParticlePVC
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Bale":
              return (
                <ParticleBale
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Regrind":
              return (
                <Plastic
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Pellet":
              return (
                <ParticlePellet
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "OTHER":
              return (
                <ParticleOTHER
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "MIXED":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "GARBAGE":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
        <FactoryButton
          systems={systems}
          getSystemId={(id) => toggleSystem(id)}
        />
      </Diagram>
      <UIButtons
        logs={[]}
        systems={systems}
        addRecyclable={addRecyclable}
        resetState={() => {
          setSystems(StartingSystems);
          setMaterials({
            materials: [],
          });
        }}
        setSystem={(systems) => setSystems(systems)}
        modeChange={() => setMode(!mode)}
        saveSystem={() => console.log("saved")}
      />
      <FooterBackground />
      <Footer>
        <hr />
        <h2>Life of Plastic</h2>
        <p>
          A data visualization to explore the complex relationship of plastic
          and its recycling system.
        </p>
        <h2>About the Project</h2>
        <p>
          The project was created by{" "}
          <a target="_blank" href="https://www.lloydrichardsdesign.com">
            Lloyd Richards
          </a>{" "}
          as part of his internship at{" "}
          <a target="_blank" href="https://www.interactivethings.com/">
            Interactive Things
          </a>
          . Over the course six week, Lloyd explored, designed and developed a
          visualization based on a topic of his choosiing. Hvaving a strong
          passion for sustainability and systems, he chose to explore the
          complexities of the plastic recycling system.
        </p>
        <p>
          With so many visualization showing the simplicity of the system, Lloyd
          chose to apporach it from the otherside and show how complex the
          system is in reality. First outlining all the technological processes
          for recycling the major types of plastic and then researching how each
          is interconnected. The flowdiagram was implimented into an interactive
          webexperiance that allowed users to add plastic to the system and see
          what routes it would take, like a giant pinball machine.
        </p>
        <p>
          The data visualization was created in TypeScript using React, Next.js,
          anime.js, Framer-Motion, and Emotion.{" "}
          <a
            target="_blank"
            href="https://github.com/interactivethings/LifeofPlastic"
          >
            GitHub Repo
          </a>
        </p>
        <h2>Source</h2>
        <ul>
          <li>
            Swiss Recycling -{" "}
            <a target="_blank" href="http://www.swissrecycling.ch/">
              website
            </a>
          </li>
          <li>
            Recycling PET -{" "}
            <a target="_blank" href="https://www.petrecycling.ch/de/home">
              website
            </a>
          </li>
          <li>
            Design For Recycled Content Guide -{" "}
            <a target="_blank" href="https://recycledcontent.org/">
              website
            </a>
          </li>
          <li>
            GreenBlue: Closing the Loop -{" "}
            <a
              target="_blank"
              href="http://www.truthstudio.com/content/Closing_The_Loop_Guide_final.pdf"
            >
              .pdf
            </a>
          </li>
          <li>
            Paper: Efficiency of ecycling post-consumer plastic packages -{" "}
            <a
              target="_blank"
              href="https://aip.scitation.org/doi/pdf/10.1063/1.5016785"
            >
              .pdf
            </a>
          </li>
          <li>
            Plasticker: Material Cost -{" "}
            <a
              target="_blank"
              href="https://plasticker.de/preise/pms_en.php?show=ok&make=ok&aog=A&kat=Mahlgut"
            >
              website
            </a>
          </li>
        </ul>
        <h2>Credit</h2>
        <p>Designed and Developed by Lloyd Richards</p>
        <p>
          HUGE thanks to Peter Gassner for his patience and guidance throughout
          the project. And to everyone at Interactive Things for their input
          throughout the design and development process.
        </p>
        <h2>Contact</h2>
        <p>
          <a target="_blank" href="https://www.lloydrichardsdesign.com">
            www.lloydrichardsdesign.com
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://www.instagram.com/lloydrichardsdesign/"
          >
            @lloydrichardsdesign
          </a>
        </p>
      </Footer>
    </div>
  );
};

export default Experiment013;
