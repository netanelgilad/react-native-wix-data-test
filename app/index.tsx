import { items } from "@wix/data";
import { useWixModules } from "@wix/sdk-react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    queryDataItems({
      dataCollectionId: "Pages"
    }).find().then(result => {
      setNumberOfItems(result.items.length)
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Number of items in the Pages collection: {numberOfItems}</Text>
    </View>
  );
}
