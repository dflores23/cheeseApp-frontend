import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [cheese, setCheese] = useState(null);

  const URL = "https://cheeseapp-df.herokuapp.com/cheese/";

  const getCheese = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCheese(data);
  };

  const createCheese = async (cheeses) => {
    // make post request to create cheese
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cheeses),
    });
    // update list of cheese
    getCheese();
  };

const updateCheese = async (cheeses, id)=> {
  await fetch(URL +id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cheeses),
  })
  getCheese()
}

const deleteCheese = async id => {
  await fetch(URL +id, {
    method: "delete",
  })
  getCheese()
}

  useEffect(() => getCheese(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index cheese={cheese} createCheese={createCheese} />
        </Route>
        <Route
          path="/cheese/:id"
          render={(rp) => (
            <Show
            cheese={cheese}
            updateCheese={updateCheese}
            deleteCheese={deleteCheese}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;