import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    let unsubscribeFromSnapshot = () => {
      const collectionRef = firestore.collection('collections');
      collectionRef.onSnapshot(async (snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionMap);
      });
    };
    return () => {
      unsubscribeFromSnapshot();
    };
  }, [updateCollections]);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapStateToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapStateToProps)(ShopPage);
