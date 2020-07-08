import React from "react";
import Layout from "../../components/Layout";
import { nanoid } from "nanoid";
import {
  Garbage,
  Grind,
  Pellet,
  Product,
  Waste,
} from "../../components/animejs/garbage";

interface AssemblyLine {
  materials: Array<MaterialType>;
}

interface SystemList {
  sort: boolean;
  refineA: boolean;
  refineB: boolean;
  manufactureA: boolean;
  manufactureB: boolean;
}

interface MaterialType {
  name: string;
  delay: number;
  id: string;
  type: string;
  path: string;
  highlight: boolean;
}

interface RouteType {
  parent: string;
  require: keyof SystemList;
  possibleRoutes: Array<PathType>;
  wasteRoute: WastePathType;
}

interface PathType {
  name: string;
  type: string;
  amount: number;
  path: string;
}

//type Blah = PathType | WastePathType;
interface WastePathType {
  name: string;
  type: string;
  amount: number;
  chance: number;
  path: string;
}

const routes: Array<RouteType> = [
  {
    parent: "garbage",
    require: "sort",
    possibleRoutes: [
      {
        name: "grind1",
        type: "grind",
        amount: 1,
        path: "#grind1-svg path",
      },
      {
        name: "grind2",
        type: "grind",
        amount: 1,
        path: "#grind2-svg path",
      },
    ],
    wasteRoute: {
      name: "waste6",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste6-svg path",
    },
  },
  {
    parent: "grind1",
    require: "refineA",
    possibleRoutes: [
      { name: "pellet2", type: "pellet", amount: 1, path: "#pellet2-svg path" },
    ],
    wasteRoute: {
      name: "waste8",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste8-svg path",
    },
  },
  {
    parent: "grind2",
    require: "refineB",
    possibleRoutes: [
      { name: "pellet1", type: "pellet", amount: 1, path: "#pellet1-svg path" },
    ],
    wasteRoute: {
      name: "waste7",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste7-svg path",
    },
  },
  {
    parent: "pellet1",
    require: "sort",
    possibleRoutes: [
      {
        name: "product1",
        type: "product",
        amount: 1,
        path: "#product1-svg path",
      },
      {
        name: "product2",
        type: "product",
        amount: 1,
        path: "#product2-svg path",
      },
    ],
    wasteRoute: {
      name: "waste2",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste2-svg path",
    },
  },
  {
    parent: "pellet2",
    require: "sort",
    possibleRoutes: [
      {
        name: "product3",
        type: "product",
        amount: 1,
        path: "#product3-svg path",
      },
    ],
    wasteRoute: {
      name: "waste1",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste1-svg path",
    },
  },
  {
    parent: "product1",
    require: "sort",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
    ],
    wasteRoute: {
      name: "waste5",
      type: "waste",
      amount: 3,
      chance: 0.1,
      path: "#waste5-svg path",
    },
  },
  {
    parent: "product2",
    require: "sort",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
    ],
    wasteRoute: {
      name: "waste4",
      type: "waste",
      amount: 1,
      chance: 0.1,
      path: "#waste4-svg path",
    },
  },
  {
    parent: "product3",
    require: "sort",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
    ],
    wasteRoute: {
      name: "waste3",
      type: "waste",
      amount: 1,
      chance: 0.1,
      path: "#waste3-svg path",
    },
  },
];

export const Experiment007 = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>({
    sort: true,
    refineA: true,
    refineB: true,
    manufactureA: true,
    manufactureB: true,
  });

  const pickPath = (path: RouteType): PathType | WastePathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Chance it still goes to waste
      if (path.wasteRoute.chance > Math.random()) {
        return path.wasteRoute;
      } else {
        //Pick random path
        const picked = Math.floor(Math.random() * path.possibleRoutes.length);
        return path.possibleRoutes[picked];
      }
      //else, goes to waste
    } else return path.wasteRoute;
  };

  const nextPath = (item: MaterialType) => {
    const currentPath = routes.find((i) => i.parent === item.name);
    if (currentPath) {
      const nextPath = pickPath(currentPath);
      for (var x = 0; x < nextPath.amount; x++)
        nextMaterial(setMaterials)(item, nextPath);
    }
  };

  const nextMaterial = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    setState((state) => {
      const modifiedMaterials = state.materials.concat([
        {
          name: nextPath.name,
          delay: Math.floor(Math.random() * 10) * 100,
          id: newId,
          type: nextPath.type,
          path: nextPath.path,
          highlight: parent.highlight,
        },
      ]);
      const materials = modifiedMaterials.filter((i) => parent.id != i.id);
      return { ...state, materials };
    });
  };

  const addGarbage = () => {
    const newId = nanoid();
    setMaterials((state) => {
      const materials = state.materials.concat({
        name: "garbage",
        delay: 0,
        id: newId,
        type: "garbage",
        path: "#garbage-svg path",
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  return (
    <Layout title="Experiment | 008">
      <h2>008 - Restructure the Assembly Line </h2>
      <h4>Date: June 4th 2020</h4>
      <p>
        The last experiment was a big success but I ended up coding myself into
        a corner. In the previous experiment I had a state for each type of
        particle and then rendered each according to their type. This was fine,
        except that when one particle could turn into multiple types then it
        meant that i ran into issues with the callback functions. Now I need to
        to set up my state so that each particle has a specific type and this
        type can be rendered differently depending on when it completes.
      </p>
      <p>
        I think I need to set up a particle state and then using a function,
        look up that type and what it can turn into and then execute this based
        on a certain probability.
      </p>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            addGarbage();
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 100,
            backgroundColor: "green",
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            console.log(materials);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 350,
            backgroundColor: "blue",
          }}
        >
          State
        </button>
        <button
          onClick={() => {
            setMaterials({
              materials: [],
            });
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 500,
            backgroundColor: "red",
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setSystems({ ...systems, ["refineB"]: !systems.refineB });
            console.log(systems);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1950,
            left: 500,
            backgroundColor: "blue",
          }}
        >
          Toggle RefineB
        </button>
        <button
          onClick={() => {
            setSystems({ ...systems, ["refineA"]: !systems.refineB });
            console.log(systems);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1950,
            left: 300,
            backgroundColor: "orange",
          }}
        >
          Toggle RefineA
        </button>
      </div>

      <div style={{ width: 800, height: 2000 }}>
        {materials.materials.map((item) => {
          switch (item.type) {
            case "garbage":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "grind":
              return (
                <Grind
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "pellet":
              return (
                <Pellet
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "product":
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "waste":
              return (
                <Waste
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
        <div style={{ position: "relative" }}>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product1-svg"
          >
            <path
              d="M211.5 466v110.5c0 16.569-13.431 30-30 30h-31c-16.569 0-30 13.431-30 30v223c0 16.569 13.431 30 30 30H196c16.569 0 30 13.431 30 30V935"
              fill="none"
              stroke="purple"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet1-svg"
          >
            <path
              d="M540 1847.5v9.5c0 16.57 13.431 30 30 30h72c16.569 0 30-13.43 30-30V320.5c0-16.569-13.431-30-30-30H239.5c-16.569 0-30 13.431-30 30v123"
              fill="none"
              stroke="blue"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product3-svg"
          >
            <path
              d="M426 470h119c16.569 0 30 13.431 30 30v109.5c0 9.665-7.835 17.5-17.5 17.5v0c-9.665 0-17.5 7.835-17.5 17.5v88"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product2-svg"
          >
            <path
              d="M426 495v32c0 16.569-13.431 30-30 30h-28.5c-16.569 0-30 13.431-30 30v145.5"
              fill="none"
              stroke="red"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet2-svg"
          >
            <path
              d="M426 1847.5v40.5c0 16.57 13.431 30 30 30h217c16.569 0 30-13.43 30-30V287.5c0-16.569-13.431-30-30-30H456c-16.569 0-30 13.431-30 30v156"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind2-svg"
          >
            <path
              d="M436 1317h74c16.569 0 30 13.43 30 30v52.5c0 16.57-13.431 30-30 30H384c-16.569 0-30 13.43-30 30v94c0 16.57 13.431 30 30 30h126c16.569 0 30 13.43 30 30V1838"
              fill="none"
              stroke="green"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind1-svg"
          >
            <path
              d="M426 1331.5V1448c0 16.57-13.431 30-30 30H221c-16.569 0-30 13.43-30 30v138.5c0 16.57 13.431 30 30 30h175c16.569 0 30 13.43 30 30v129"
              fill="none"
              stroke="pink"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="garbage-svg"
          >
            <path
              d="M323 1012v150.01c0 16.57 13.431 29.99 30 29.99h41.5c16.569 0 30 13.43 30 30v85"
              fill="none"
              stroke="lightblue"
            />
          </svg>
          <svg
            id="waste8-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M411 1843.5H76.5c-16.569 0-30 13.43-30 30v80.5"
            />
          </svg>
          <svg
            id="waste7-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M523 1847h-11.5c-10.77 0-19.5 8.73-19.5 19.5v0c0 10.77-8.73 19.5-19.5 19.5h-396c-16.569 0-30 13.43-30 30v43"
            />
          </svg>
          <svg
            id="waste6-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M407.5 1320h-331c-16.569 0-30 13.43-30 30v610.5"
            />
          </svg>
          <svg
            id="waste5-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M212.5 936H202c-16.569 0-30 13.431-30 30v272c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v662.5"
            />
          </svg>
          <svg
            id="waste4-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M320 736h-7.5c-16.569 0-30 13.431-30 30v471.5c0 16.57-13.431 30-30 30h-176c-16.569 0-30 13.43-30 30v660"
            />
          </svg>
          <svg
            id="waste3-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M528 734.5h-9c-16.569 0-30 13.431-30 30V870c0 16.569-13.431 30-30 30H314c-16.569 0-30 13.431-30 30v306c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v661.5"
            />
          </svg>
          <svg
            id="waste2-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M193 456h-1c-16.569 0-30 13.431-30 30v5.5c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30V1954"
            />
          </svg>
          <svg
            id="waste1-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M409.5 472.5h-15.75c-14.774 0-26.75 11.976-26.75 26.75v0c0 14.774-11.976 26.75-26.75 26.75H283c-16.569 0-30 13.431-30 30v241c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30v1102"
            />
          </svg>
        </div>
      </div>
      <p>
        Have had to restructure the state machine several times in order to get
        this to work but now it seems much more flexible for adding and removing
        paths while still being able to manipulate how items flow through the
        system. Currently there are two states, one for the materials and one
        for the systems. The material state can be updated through{" "}
        <code>nextMaterial()</code> which removes the material that just arrived
        and then looks up the next possible path and makes that material to be
        rendered next. The function to select the next path is particularly
        interesting:
      </p>
      <pre>
        <code>
          {` const pickPath = (path: RouteType): PathType | WastePathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Chance it still goes to waste
      if (path.wasteRoute.chance > Math.random()) {
        return path.wasteRoute;
      } else {
          //Pick random path
        const picked = Math.floor(Math.random() * path.possibleRoutes.length);
        return path.possibleRoutes[picked];
      }
      //else, goes to waste
    } else return path.wasteRoute;
  };`}
        </code>
      </pre>
      <p>
        Here I can specify in the routes JSON where each path can lead as well
        as what the default waste state is incase the system isn't inplace. I
        can also adjust the change of an item being sent to waste anyway as well
        as the number of materials created for each route. Additionally I could
        have multiple routes take the same path but with varying amounts of
        materials.
      </p>
      <p>
        Figuring out the types for this has been a bit of a challenge as these
        need to be passed in and returned to makes sure there are no bugs, but
        Typescript has been a huge help in flagging anything that was wrong or
        missig something.
      </p>
      <pre>
        <code>
          {`interface MaterialType {
  name: string;
  delay: number;
  id: string;
  type: string;
  path: string;
  highlight: boolean;
}

interface RouteType {
  parent: string;
  require: string;
  possibleRoutes: Array<PathType>;
  wasteRoute: WastePathType;
}

interface PathType {
  name: string;
  type: string;
  amount: number;
  chance?: number;
  path: string;
}

interface WastePathType {
  name: string;
  type: string;
  amount: number;
  chance: number;
  path: string;
}`}
        </code>
      </pre>
      <p>
        I'm sure i could still tidy up the WastePathType by extending the
        PathType, but i'm unsure how to do that just now. For now it covers all
        the features that I wanted to have so that I can move onto the next step
        of implimenting more design elements as well as figure out how to
        narrate the story.
      </p>
    </Layout>
  );
};

export default Experiment007;
