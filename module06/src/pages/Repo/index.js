import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default function Repo(props) {
  const { navigation } = props;
  const repo = navigation.getParam('repo');

  return <WebView source={{ uri: repo.html_url }} />;
}

Repo.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('repo').name,
});

Repo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
