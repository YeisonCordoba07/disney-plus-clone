import MainCollectionsJson from "@/mock/main-collections.json";
import {ItemCollection} from "@/components/atoms/item-collection/ItemCollection";


function MainCollections() {
  const data = MainCollectionsJson;

  return (
    <div className="main-collections">

      {
        data.map((item) => {

          return (
            <ItemCollection
              videoSource={item.video}
              imageSource={item.image}
              key={item.id}/>
          );

        })
      }

    </div>
  );
}

export {MainCollections}