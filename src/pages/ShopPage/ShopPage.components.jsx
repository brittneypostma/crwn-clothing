import React from "react";
import "./ShopPage.data";
import SHOP_DATA from "./ShopPage.data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.components";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
