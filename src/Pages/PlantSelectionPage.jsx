import React from "react";
import { Button } from "@mui/material";
import "./PlantSelection.css";
import PlantCard from "../Components/PlantCard";

function PlantSelection() {
  const plantImage = "DEFAULTIMAGE";
  const plantName = "PLANTNAME";

  return (
    <div>
      <Button className="plantTypeButton" variant="contained" color="secondary">
        ALL
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        VEGETABLE
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        FRUIT
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        HERB
      </Button>
      <div className="plantContainer">
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/apple.png`}
          plantName={"Apple"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/asparagus.png`}
          plantName={"Asparagus"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/basil.png`}
          plantName={"Basil"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/beetroot.png`}
          plantName={"Beetroot"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/blueberry.png`}
          plantName={"Blueberry"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/blackberry.png`}
          plantName={"Blackberry"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/bokchoi.png`}
          plantName={"Bok Choi"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/broadbean.png`}
          plantName={"Broad Bean"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/broccoli.png`}
          plantName={"Broccoli"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/capsicum.png`}
          plantName={"Capsicum"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/carrot.png`}
          plantName={"Carrot"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/cauliflower.png`}
          plantName={"Cauliflower"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/celery.png`}
          plantName={"Celery"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/coriander.png`}
          plantName={"coriander"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/courgette.png`}
          plantName={"Courgette"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/cucumber.png`}
          plantName={"Cucumber"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/eggplant.png`}
          plantName={"Eggplant"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/feijoa.png`}
          plantName={"Feijoa"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/garlic.png`}
          plantName={"Garlic"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/kale.png`}
          plantName={"Kale"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/lemon.png`}
          plantName={"Lemon"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/lettuce.png`}
          plantName={"Lettuce"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/lime.png`}
          plantName={"Lime"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/mandarin.png`}
          plantName={"Mandarin"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/mesclun.png`}
          plantName={"Mesclun"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/onion.png`}
          plantName={"Onion"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/orange.png`}
          plantName={"Orange"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/parsley.png`}
          plantName={"Parsley"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/passionfruit.png`}
          plantName={"Passionfruit"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/peas.png`}
          plantName={"Peas"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/pear.png`}
          plantName={"Pear"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/potato.png`}
          plantName={"Potato"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/pumpkin.png`}
          plantName={"Pumpkin"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/radish.png`}
          plantName={"Radish"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/raspberry.png`}
          plantName={"Raspberry"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/silverbeet.png`}
          plantName={"Silverbeet"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/spinach.png`}
          plantName={"Spinach"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/springonion.png`}
          plantName={"SpringOnion"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/strawberry.png`}
          plantName={"Strawberry"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/sweetcorn.png`}
          plantName={"Sweetcorn"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/tomato.png`}
          plantName={"Tomato"}
        />
      </div>
      <div className="addButton">
        <Button variant="contained" color="secondary">
          ADD TO PLANTER
        </Button>
      </div>
    </div>
  );
}
export default PlantSelection;
