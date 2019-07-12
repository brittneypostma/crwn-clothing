import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsPage from "./collection.component";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
